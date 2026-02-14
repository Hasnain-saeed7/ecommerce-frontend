

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { productService } from '../api/productService';

// export default function Home() {
//   const [featuredProducts, setFeaturedProducts] = useState([]);
//   const [newArrivals, setNewArrivals] = useState([]);
//   const [bestSellers, setBestSellers] = useState([]); 
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const products = await productService.getProducts();
      
//       // 1. Featured Products (Matching your backend 'is_featured' flag)
//       setFeaturedProducts(products.filter(p => p.is_featured).slice(0, 8));
      
//       // 2. New Arrivals (Matching your backend 'is_new_arrival' flag)
//       const newArrivalProducts = products.filter(p => p.is_new_arrival);
//       setNewArrivals(newArrivalProducts.length > 0 ? newArrivalProducts.slice(0, 8) : products.slice(8, 16));

//       // 3. Best Sellers (Matching your backend 'is_bestseller' flag)
//       const bestSellerProducts = products.filter(p => p.is_bestseller); 
//       setBestSellers(bestSellerProducts.length > 0 ? bestSellerProducts.slice(0, 8) : products.slice(0, 4));

//     } catch (error) {
//       console.error('Failed to load products:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const ProductCard = ({ product }) => {
//     const displayPrice = product.discount_price || product.price;
//     return (
//       <div className="pro">
//         <Link to={`/product/${product.id}`}>
//           <img 
//             src={product.main_image} 
//             alt={product.name} 
//             onError={(e) => { e.target.src = '/img/products/f1.jpg'; }} 
//           />
//         </Link>
//         <div className="des">
//           <span>{product.brand || 'Brand'}</span>
//           <h5>{product.name}</h5>
//           <div className="star">
//             {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
//           </div>
//           <h5>Rs. {displayPrice}</h5>
//         </div>
//         <Link to={`/product/${product.id}`}>
//           <i className="fa-solid fa-cart-shopping cart"></i>
//         </Link>
//       </div>
//     );
//   };

//   return (
//     <>
//       <section id="hero">
//         <h4>Trade-in-offer</h4>
//         <h1>Super Value deals</h1>
//         <h1>On all products</h1>
//         <h6>save more coupons & up to 70% off!</h6>
//         <Link to="/shop"><button id="btn">Shop Now</button></Link>
//       </section>

//       <section id="feature" className="section-p1">
//         {['f1', 'f2', 'f3', 'f4', 'f5', 'f6'].map((img, i) => (
//           <div className="fe-box" key={i}>
//             <img src={`/img/features/${img}.png`} alt="" />
//             <h6>{['Free Shipping', 'Online Order', 'Save Money', 'Promotions', 'Happy Sell', '24/7 Support'][i]}</h6>
//           </div>
//         ))}
//       </section>

//       {/* Featured Products with Background */}
//       <section 
//         id="product1" 
//         className="section-p1"
//         style={{
//           backgroundImage: 'url(/img/updation/featured-bg.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           position: 'relative'
//         }}
//       >
//         {/* Dark Overlay */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           zIndex: 0
//         }}></div>

//         {/* Content */}
//         <div style={{ position: 'relative', zIndex: 1 }}>
//           <h2 style={{ color: 'white' }}>Featured Products</h2>
//           <p style={{ color: 'white' }}>Summer Collection New Modern Design</p>
//           <div className="pro-container">
//             {!loading && (featuredProducts.length > 0 ? 
//               featuredProducts.map(p => <ProductCard key={p.id} product={p} />) : 
//               <p style={{ color: 'white' }}>No featured products found.</p>
//             )}
//           </div>
//         </div>
//       </section>

//       <section id="banner">
//         <h4>Repair Services</h4>
//         <h2>upto <span>70% Off</span> - all t-Shirts & Accessories</h2>
//         <Link to="/shop"><button id="bton">Explore more</button></Link>
//       </section>

//       {/* New Arrivals with Background */}
//       <section 
//         id="product1" 
//         className="section-p1"
//         style={{
//           backgroundImage: 'url(/img/updation/new-arrivals-bg.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           position: 'relative'
//         }}
//       >
//         {/* Dark Overlay */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           zIndex: 0
//         }}></div>

//         {/* Content */}
//         <div style={{ position: 'relative', zIndex: 1 }}>
//           <h2 style={{ color: 'white' }}>New Arrivals</h2>
//           <p style={{ color: 'white' }}>Fresh items just for you</p>
//           <div className="pro-container">
//             {!loading && (newArrivals.length > 0 ? 
//               newArrivals.map(p => <ProductCard key={p.id} product={p} />) : 
//               <p style={{ color: 'white' }}>No new arrivals found.</p>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Best Sellers with Background */}
//       <section 
//         id="product1" 
//         className="section-p1"
//         style={{
//           backgroundImage: 'url(/img/updation/bestsellers-bg.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           position: 'relative'
//         }}
//       >
//         {/* Dark Overlay */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           zIndex: 0
//         }}></div>

//         {/* Content */}
//         <div style={{ position: 'relative', zIndex: 1 }}>
//           <h2 style={{ color: 'white' }}>Best Sellers</h2>
//           <p style={{ color: 'white' }}>Our Most Popular Products</p>
//           <div className="pro-container">
//             {!loading && (bestSellers.length > 0 ? 
//               bestSellers.map(p => <ProductCard key={p.id} product={p} />) : 
//               <p style={{ color: 'white' }}>No best sellers found.</p>
//             )}
//           </div>
//         </div>
//       </section>

      

//      <section id="banner-sm" style={{ display: 'flex', gap: '0', padding: '0' }}>
//   <div className="banner-box" style={{ flex: 1, margin: 0 }}>
//     <h4>Crazy deals</h4>
//     <h2>buy 1 get 1 free</h2>
//     <button className="white">Learn More</button>
//   </div>
//   <div className="banner-box banner-box2" style={{ flex: 1, margin: 0 }}>
//     <h4>Spring/Summer</h4>
//     <h2>Upcoming Season</h2>
//     <button className="white">Collection</button>
//   </div>
// </section> 

//     </>
//   );
// }





























import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../api/productService';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSellers, setBestSellers] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const products = await productService.getProducts();
      
      setFeaturedProducts(products.filter(p => p.is_featured).slice(0, 8));
      setNewArrivals(products.filter(p => p.is_new_arrival).slice(0, 8));
      setBestSellers(products.filter(p => p.is_bestseller).slice(0, 8));

    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  const ProductCard = ({ product }) => {
    const displayPrice = product.discount_price || product.price;
    return (
      <div className="pro">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.main_image} 
            alt={product.name} 
            onError={(e) => { e.target.src = '/img/products/f1.jpg'; }} 
          />
        </Link>
        <div className="des">
          <span>{product.brand || 'Brand'}</span>
          <h5>{product.name}</h5>
          <div className="star">
            {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
          </div>
          <h5>Rs. {displayPrice}</h5>
        </div>
        <Link to={`/product/${product.id}`}>
          <i className="fa-solid fa-cart-shopping cart"></i>
        </Link>
      </div>
    );
  };

  return (
    <>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h1>Super Value deals</h1>
        <h1>On all products</h1>
        <h6>save more coupons & up to 70% off!</h6>
        <Link to="/shop"><button id="btn">Shop Now</button></Link>
      </section>

      <section id="feature" className="section-p1">
        {['f1', 'f2', 'f3', 'f4', 'f5', 'f6'].map((img, i) => (
          <div className="fe-box" key={i}>
            <img src={`/img/features/${img}.png`} alt="" />
            <h6>{['Free Shipping', 'Online Order', 'Save Money', 'Promotions', 'Happy Sell', '24/7 Support'][i]}</h6>
          </div>
        ))}
      </section>

      <section 
        id="product1" 
        className="section-p1"
        style={{
          backgroundImage: 'url(/img/updation/featured-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white' }}>Featured Products</h2>
          <p style={{ color: 'white' }}>Summer Collection New Modern Design</p>
          <div className="pro-container">
            {!loading && (featuredProducts.length > 0 ? 
              featuredProducts.map(p => <ProductCard key={p.id} product={p} />) : 
              <p style={{ color: 'white' }}>No featured products found.</p>
            )}
          </div>
        </div>
      </section>

      <section id="banner">
        <h4>Repair Services</h4>
        <h2>upto <span>70% Off</span> - all t-Shirts & Accessories</h2>
        <Link to="/shop"><button id="bton">Explore more</button></Link>
      </section>

      <section 
        id="product1" 
        className="section-p1"
        style={{
          backgroundImage: 'url(/img/updation/new-arrivals-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white' }}>New Arrivals</h2>
          <p style={{ color: 'white' }}>Fresh items just for you</p>
          <div className="pro-container">
            {!loading && (newArrivals.length > 0 ? 
              newArrivals.map(p => <ProductCard key={p.id} product={p} />) : 
              <p style={{ color: 'white' }}>No new arrivals found.</p>
            )}
          </div>
        </div>
      </section>

      <section 
        id="product1" 
        className="section-p1"
        style={{
          backgroundImage: 'url(/img/updation/bestsellers-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white' }}>Best Sellers</h2>
          <p style={{ color: 'white' }}>Our Most Popular Products</p>
          <div className="pro-container">
            {!loading && (bestSellers.length > 0 ? 
              bestSellers.map(p => <ProductCard key={p.id} product={p} />) : 
              <p style={{ color: 'white' }}>No best sellers found.</p>
            )}
          </div>
        </div>
      </section>

      <section id="banner-sm" style={{ display: 'flex', gap: '0', padding: '0' }}>
        <div className="banner-box" style={{ flex: 1, margin: 0 }}>
          <h4>Crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2" style={{ flex: 1, margin: 0 }}>
          <h4>Spring/Summer</h4>
          <h2>Upcoming Season</h2>
          <button className="white">Collection</button>
        </div>
      </section>
    </>
  );
}
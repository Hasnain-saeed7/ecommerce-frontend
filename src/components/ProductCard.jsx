// import { Link } from 'react-router-dom';

// export default function ProductCard({ product }) {
//   return (
//     <div className="pro">
//       <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//         <img src={product.images?.[0]} alt={product.title} />
//         <div className="des">
//           <span>{product.brand}</span>
//           <h5>{product.title}</h5>
//           <div className="star" aria-label="5 star rating">
//             <i className="fa-solid fa-star" />
//             <i className="fa-solid fa-star" />
//             <i className="fa-solid fa-star" />
//             <i className="fa-solid fa-star" />
//             <i className="fa-solid fa-star" />
//           </div>
//           <h4>${product.price}</h4>
//         </div>
//       </Link>
//       <a href="#" aria-label="Add to cart">
//         <i className="fa-solid fa-cart-shopping cart" />
//       </a>
//     </div>
//   );
// }



import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const displayPrice = product.discount_price || product.price;
  const hasDiscount = product.discount_price && product.discount_price < product.price;

  return (
    <div className="pro">
      <Link to={`/product/${product.id}`}>
        <img src={product.main_image} alt={product.name} />
        <div className="des">
          <span>{product.brand || 'Brand'}</span>
          <h5>{product.name}</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>
            ${displayPrice}
            {hasDiscount && (
              <span style={{
                textDecoration: 'line-through',
                color: '#999',
                marginLeft: '10px',
                fontSize: '14px'
              }}>
                ${product.price}
              </span>
            )}
          </h4>
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <i className="fa-solid fa-cart-shopping cart"></i>
      </Link>
    </div>
  );
}
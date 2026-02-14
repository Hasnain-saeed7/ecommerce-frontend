
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../api/productService';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const productsData = await productService.getProducts();
      const categoriesData = await productService.getCategories();
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Failed to load:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (product.brand || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category_id == selectedCategory;
    const matchesGender = !selectedGender || product.gender === selectedGender;
    return matchesSearch && matchesCategory && matchesGender;
  });

  if (loading) return <div style={{ textAlign: 'center', padding: '100px' }}>Loading...</div>;

  return (
    <>
      <section id="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>

      {/* Full Page Background Container */}
      <div
        style={{
          backgroundImage: 'url(/img/updation/shop-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          minHeight: '100vh'
        }}
      >
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0
        }}></div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Search Bar */}
          <section style={{ padding: '40px 80px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <input
                type="text"
                placeholder="🔍 Search products by name or brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  fontSize: '16px',
                  border: '2px solid #088178',
                  borderRadius: '50px',
                  marginBottom: '20px',
                  outline: 'none',
                  backgroundColor: 'white'
                }}
              />

              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    padding: '12px 20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    backgroundColor: 'white'
                  }}
                >
                  <option value="">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>

                <select
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  style={{
                    padding: '12px 20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    backgroundColor: 'white'
                  }}
                >
                  <option value="">All Genders</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                  <option value="Unisex">Unisex</option>
                </select>

                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                    setSelectedGender('');
                  }}
                  style={{
                    padding: '12px 24px',
                    background: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                  Clear Filters
                </button>
              </div>

              <p style={{ marginTop: '15px', color: 'white', fontWeight: 'bold' }}>
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
          </section>

          {/* Products */}
          <section id="product1" className="section-p1">
            <div className="pro-container">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => {
                  const displayPrice = product.discount_price || product.price;
                  const hasDiscount = product.discount_price && product.discount_price < product.price;

                  return (
                    <div className="pro" key={product.id}>
                      <Link to={`/product/${product.id}`}>
                        <img 
                          src={product.main_image} 
                          alt={product.name}
                          onError={(e) => {
                            e.target.src = '/img/products/f1.jpg';
                          }}
                        />
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
                            Rs. {displayPrice}
                            {hasDiscount && (
                              <span style={{
                                textDecoration: 'line-through',
                                color: '#999',
                                marginLeft: '10px',
                                fontSize: '14px'
                              }}>
                                Rs. {product.price}
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
                })
              ) : (
                <div style={{ textAlign: 'center', width: '100%', padding: '60px 20px', color: 'white' }}>
                  <h3>No products found</h3>
                  <p>Try adjusting your filters or search term</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}













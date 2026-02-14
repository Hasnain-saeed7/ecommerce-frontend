
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productService } from '../api/productService';
import { useCart } from '../contexts/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImg, setMainImg] = useState('');
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [message, setMessage] = useState('');
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const data = await productService.getProduct(id);
        setProduct(data);
        setMainImg(data.main_image);

        // Auto-select first variant as default (so user sees options)
        if (data.variants && data.variants.length > 0) {
          setSelectedSize(data.variants[0].size);
          setSelectedColor(data.variants[0].color);
          setSelectedVariant(data.variants[0]);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  // Update selected variant when size or color changes
  useEffect(() => {
    if (product && selectedSize && selectedColor) {
      const variant = product.variants?.find(
        v => v.size === selectedSize && v.color === selectedColor
      );
      setSelectedVariant(variant || null);
    }
  }, [selectedSize, selectedColor, product]);

  const handleAddToCart = async () => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('⚠️ Please login to add items to cart');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    if (!selectedVariant) {
      setMessage('⚠️ Please select size and color');
      return;
    }

    if (selectedVariant.stock === 0) {
      setMessage('❌ This variant is out of stock');
      return;
    }

    setAdding(true);
    try {
      await addToCart({
        product_id: product.id,
        variant_id: selectedVariant.id,
        quantity: qty
      });
      setMessage('✅ Product added to cart successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Failed to add to cart:', error);
      setMessage('❌ Failed to add to cart. Please try again.');
    } finally {
      setAdding(false);
    }
  };

  // Get unique sizes and colors from variants
  const sizes = [...new Set(product?.variants?.map(v => v.size) || [])];
  const colors = [...new Set(product?.variants?.map(v => v.color) || [])];

  if (loading) return (
    <section className="section-p1"><h2>Loading...</h2></section>
  );
  
  if (!product) return (
    <section className="section-p1"><h2>Product not found!</h2></section>
  );

  return (
    <>
      {/* Full Page Background */}
      <div
        style={{
          backgroundImage: 'url(/img/updation/product-details-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          minHeight: '100vh',
          padding: '40px 20px'
        }}
      >
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 0
        }}></div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <section id="prodetails" className="section-p1" style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            <div className="single-pro-image">
              <img
                src={mainImg}
                key={mainImg}
                width="100%"
                id="MainImg"
                alt={product.name}
                onError={(e) => { e.target.src = '/img/products/f1.jpg'; }}
              />

              <div className="small-img-group">
                {[product.main_image, product.image_2, product.image_3, product.image_4]
                  .filter(img => img)
                  .map((img, index) => (
                    <div className="small-img-col" key={index}>
                      <img
                        src={img}
                        width="100%"
                        className="small-img"
                        alt={`thumbnail-${index}`}
                        onClick={() => setMainImg(img)}
                        style={{
                          cursor: 'pointer',
                          opacity: mainImg === img ? '1' : '0.6',
                          border: mainImg === img ? '2px solid #088178' : 'none'
                        }}
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="single-pro-details">
              <h6>Home / {product.subcategory || 'Collection'}</h6>
              <h4>{product.name}</h4>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: '10px 0' }}>
                <h2 style={{ color: '#088178' }}>
                  Rs. {product.discount_price || product.price}
                </h2>
                {product.discount_price && product.discount_price < product.price && (
                  <span style={{
                    textDecoration: 'line-through',
                    color: '#999',
                    fontSize: '18px'
                  }}>
                    Rs. {product.price}
                  </span>
                )}
              </div>

              {/* Stars */}
              <div className="star" style={{ marginBottom: '15px' }}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              {/* Size Selection - User can choose from available options */}
              {sizes.length > 0 && (
                <div style={{ marginBottom: '15px' }}>
                  <h6 style={{ marginBottom: '8px' }}>
                    <strong>Select Size:</strong> {selectedSize}
                  </h6>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {sizes.map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        style={{
                          padding: '8px 16px',
                          border: selectedSize === size
                            ? '2px solid #088178'
                            : '1px solid #ddd',
                          background: selectedSize === size ? '#088178' : 'white',
                          color: selectedSize === size ? 'white' : '#333',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection - User can choose from available options */}
              {colors.length > 0 && (
                <div style={{ marginBottom: '15px' }}>
                  <h6 style={{ marginBottom: '8px' }}>
                    <strong>Select Color:</strong> {selectedColor}
                  </h6>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {colors.map(color => {
                      const variant = product.variants?.find(v => v.color === color);
                      return (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setSelectedColor(color)}
                          title={color}
                          style={{
                            width: '35px',
                            height: '35px',
                            borderRadius: '50%',
                            background: variant?.color_code || '#ccc',
                            border: selectedColor === color
                              ? '3px solid #088178'
                              : '2px solid #ddd',
                            cursor: 'pointer',
                            outline: selectedColor === color
                              ? '2px solid #088178'
                              : 'none',
                            outlineOffset: '2px'
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Stock Info */}
              {selectedVariant && (
                <p style={{
                  color: selectedVariant.stock > 0 ? '#27ae60' : '#e74c3c',
                  marginBottom: '15px',
                  fontWeight: 'bold'
                }}>
                  {selectedVariant.stock > 0
                    ? `✅ In Stock (${selectedVariant.stock} available)`
                    : '❌ Out of Stock'
                  }
                </p>
              )}

              {/* Show message if selected combination doesn't exist */}
              {!selectedVariant && selectedSize && selectedColor && (
                <p style={{
                  color: '#e74c3c',
                  marginBottom: '15px',
                  fontWeight: 'bold'
                }}>
                  ⚠️ This size/color combination is not available. Please choose another option.
                </p>
              )}

            
              {/* Quantity */}
<div className="purchase-action" style={{
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginBottom: '15px'
}}>
  <input
    type="number"
    value={qty}
    min={1}
    max={selectedVariant?.stock || 1}
    onChange={(e) => {
      const value = Number(e.target.value);
      const maxStock = selectedVariant?.stock || 1;
      
      // Don't allow more than available stock
      if (value > maxStock) {
        setQty(maxStock);
        setMessage(`⚠️ Only ${maxStock} items available in stock`);
        setTimeout(() => setMessage(''), 3000);
      } else {
        setQty(Math.max(1, value));
      }
    }}
    style={{
      width: '70px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      textAlign: 'center',
      fontSize: '16px'
    }}
  />


                <button
                  className="normal"
                  onClick={handleAddToCart}
                  disabled={adding || !selectedVariant || (selectedVariant && selectedVariant.stock === 0)}
                  style={{
                    opacity: (adding || !selectedVariant) ? 0.7 : 1,
                    cursor: (adding || !selectedVariant) ? 'not-allowed' : 'pointer'
                  }}
                >
                  {adding ? 'Adding...' : 'Add To Cart'}
                </button>
              </div>

              {/* Message */}
              {message && (
                <div style={{
                  padding: '12px 20px',
                  background: message.includes('✅') ? '#d4edda' : '#fff3cd',
                  color: message.includes('✅') ? '#155724' : '#856404',
                  borderRadius: '6px',
                  marginBottom: '15px',
                  fontWeight: 'bold'
                }}>
                  {message}
                </div>
              )}

              {/* Product Details */}
              <h4>Product Details</h4>
              <span>{product.description || "No description provided."}</span>

              {/* Extra Info */}
              <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
                {product.brand && <p><strong>Brand:</strong> {product.brand}</p>}
                {product.material && <p><strong>Material:</strong> {product.material}</p>}
                {product.gender && <p><strong>Gender:</strong> {product.gender}</p>}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
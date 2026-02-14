
// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import { useCart } from '../contexts/CartContext';

// export default function Cart() {
//   const { isAuthenticated } = useAuth();
//   const { cart, loading, updateQuantity, removeItem, cartTotal } = useCart();
//   const navigate = useNavigate();

//   const shipping = cartTotal > 100 ? 0 : 10;
//   const total = cartTotal + shipping;

//   if (!isAuthenticated) {
//     return (
//       <>
//         <section id="page-header">
//           <h2>Your Cart</h2>
//           <p>Home / Cart</p>
//         </section>
//         <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: 'white' }}>
//           <div style={{ fontSize: '60px', marginBottom: '20px' }}>🛒</div>
//           <h3>Please login to view your cart</h3>
//           <p style={{ color: '#666', margin: '15px 0' }}>
//             Login to add items and manage your cart
//           </p>
//           <Link to="/login" style={{
//             padding: '14px 40px', background: '#088178', color: 'white',
//             textDecoration: 'none', borderRadius: '4px',
//             display: 'inline-block', marginRight: '10px'
//           }}>Login</Link>
//           <Link to="/signup" style={{
//             padding: '14px 40px', background: '#333', color: 'white',
//             textDecoration: 'none', borderRadius: '4px', display: 'inline-block'
//           }}>Sign Up</Link>
//         </div>
//       </>
//     );
//   }

//   if (loading) return (
//     <div style={{ textAlign: 'center', padding: '100px', backgroundColor: 'white' }}>Loading cart...</div>
//   );

//   return (
//     <>
//       <section id="page-header">
//         <h2>Your Cart</h2>
//         <p>Home / Cart</p>
//       </section>

//       {/* Full Page Background */}
//       <div
//         style={{
//           backgroundImage: 'url(/img/updation/cart-bg.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           position: 'relative',
//           minHeight: '100vh'
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
//           <section id="cart" className="section-p1">
//             {cart.length === 0 ? (
//               <div style={{ textAlign: 'center', padding: '60px', backgroundColor: 'white', borderRadius: '10px', maxWidth: '600px', margin: '0 auto' }}>
//                 <div style={{ fontSize: '60px', marginBottom: '20px' }}>🛒</div>
//                 <h3>Your cart is empty</h3>
//                 <Link to="/shop" style={{
//                   padding: '14px 40px', background: '#088178', color: 'white',
//                   textDecoration: 'none', borderRadius: '4px',
//                   display: 'inline-block', marginTop: '20px'
//                 }}>Continue Shopping</Link>
//               </div>
//             ) : (
//               <>
//                 <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', overflowX: 'auto' }}>
//                   <table width="100%">
//                     <thead>
//                       <tr>
//                         <td>Remove</td>
//                         <td>Image</td>
//                         <td>Product</td>
//                         <td>Price</td>
//                         <td>Quantity</td>
//                         <td>Subtotal</td>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cart.map(item => {
//                         const price = item.product?.discount_price || item.product?.price || 0;
//                         return (
//                           <tr key={item.id}>
//                             <td>
//                               <button onClick={() => removeItem(item.id)} style={{
//                                 background: 'none', border: 'none',
//                                 cursor: 'pointer', color: '#e74c3c', fontSize: '20px'
//                               }}>✕</button>
//                             </td>
//                             <td>
//                               <img
//                                 src={item.product?.main_image}
//                                 alt={item.product?.name}
//                                 style={{ width: '80px', borderRadius: '4px' }}
//                                 onError={(e) => { e.target.src = '/img/products/f1.jpg'; }}
//                               />
//                             </td>
//                             <td>
//                               <strong>{item.product?.name}</strong>
//                               <br />
//                               <small style={{ color: '#666' }}>
//                                 Size: {item.variant?.size} | Color: {item.variant?.color}
//                               </small>
//                             </td>
//                             <td>Rs. {Number(price).toFixed(2)}</td>
//                             <td>
//                               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                                 <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                                   style={{ width: '28px', height: '28px', border: '1px solid #ddd',
//                                     background: 'white', cursor: 'pointer', borderRadius: '4px' }}>-</button>
//                                 <span style={{ minWidth: '20px', textAlign: 'center' }}>
//                                   {item.quantity}
//                                 </span>
//                                 <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                                   style={{ width: '28px', height: '28px', border: '1px solid #ddd',
//                                     background: 'white', cursor: 'pointer', borderRadius: '4px' }}>+</button>
//                               </div>
//                             </td>
//                             <td>Rs. {(Number(price) * item.quantity).toFixed(2)}</td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div id="cart-add" className="section-p1">
//                   <div id="coupon" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
//                     <h3>Apply Coupon</h3>
//                     <div>
//                       <input type="text" placeholder="Enter Your Coupon" />
//                       <button className="normal">Apply</button>
//                     </div>
//                   </div>

//                   <div id="subtotal" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
//                     <h3>Cart Totals</h3>
//                     <table>
//                       <tbody>
//                         <tr>
//                           <td>Cart Subtotal</td>
//                           <td>Rs. {cartTotal.toFixed(2)}</td>
//                         </tr>
//                         <tr>
//                           <td>Shipping</td>
//                           <td>{shipping === 0 ? 'Free' : `Rs. ${shipping.toFixed(2)}`}</td>
//                         </tr>
//                         <tr>
//                           <td><strong>Total</strong></td>
//                           <td><strong>Rs. {total.toFixed(2)}</strong></td>
//                         </tr>
//                       </tbody>
//                     </table>
//                     <button className="normal" onClick={() => navigate('/checkout')}>
//                       Proceed to checkout
//                     </button>
//                   </div>
//                 </div>
//               </>
//             )}
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }











































import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { isAuthenticated } = useAuth();
  const { cart, loading, updateQuantity, removeItem, cartTotal } = useCart();
  const navigate = useNavigate();

  // Coupon state
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const shipping = cartTotal > 100 ? 0 : 10;
  const subtotalAfterDiscount = cartTotal - discount;
  const total = subtotalAfterDiscount + shipping;

  // Apply Coupon Function
  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    
    if (code === 'HQ') {
      const discountAmount = cartTotal * 0.10; // 10% discount
      setDiscount(discountAmount);
      setCouponApplied(true);
      setCouponMessage('✅ Coupon applied! You saved Rs. ' + discountAmount.toFixed(2));
    } else if (code === '') {
      setCouponMessage('⚠️ Please enter a coupon code');
    } else {
      setDiscount(0);
      setCouponApplied(false);
      setCouponMessage('❌ Invalid coupon code. Try "HQ" for 10% off!');
    }

    // Clear message after 5 seconds
    setTimeout(() => setCouponMessage(''), 5000);
  };

  // Remove Coupon
  const removeCoupon = () => {
    setDiscount(0);
    setCouponApplied(false);
    setCouponCode('');
    setCouponMessage('');
  };

  if (!isAuthenticated) {
    return (
      <>
        <section id="page-header">
          <h2>Your Cart</h2>
          <p>Home / Cart</p>
        </section>
        <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: 'white' }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>🛒</div>
          <h3>Please login to view your cart</h3>
          <p style={{ color: '#666', margin: '15px 0' }}>
            Login to add items and manage your cart
          </p>
          <Link to="/login" style={{
            padding: '14px 40px', background: '#088178', color: 'white',
            textDecoration: 'none', borderRadius: '4px',
            display: 'inline-block', marginRight: '10px'
          }}>Login</Link>
          <Link to="/signup" style={{
            padding: '14px 40px', background: '#333', color: 'white',
            textDecoration: 'none', borderRadius: '4px', display: 'inline-block'
          }}>Sign Up</Link>
        </div>
      </>
    );
  }

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '100px', backgroundColor: 'white' }}>Loading cart...</div>
  );

  return (
    <>
      <section id="page-header">
        <h2>Your Cart</h2>
        <p>Home / Cart</p>
      </section>

      {/* Full Page Background */}
      <div
        style={{
          backgroundImage: 'url(/img/updation/cart-bg.jpg)',
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
          <section id="cart" className="section-p1">
            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px', backgroundColor: 'white', borderRadius: '10px', maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>🛒</div>
                <h3>Your cart is empty</h3>
                <Link to="/shop" style={{
                  padding: '14px 40px', background: '#088178', color: 'white',
                  textDecoration: 'none', borderRadius: '4px',
                  display: 'inline-block', marginTop: '20px'
                }}>Continue Shopping</Link>
              </div>
            ) : (
              <>
                <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', overflowX: 'auto' }}>
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map(item => {
                        const price = item.product?.discount_price || item.product?.price || 0;
                        const maxStock = item.variant?.stock || 1;
                        
                        return (
                          <tr key={item.id}>
                            <td>
                              <button onClick={() => removeItem(item.id)} style={{
                                background: 'none', border: 'none',
                                cursor: 'pointer', color: '#e74c3c', fontSize: '20px'
                              }}>✕</button>
                            </td>
                            <td>
                              <img
                                src={item.product?.main_image}
                                alt={item.product?.name}
                                style={{ width: '80px', borderRadius: '4px' }}
                                onError={(e) => { e.target.src = '/img/products/f1.jpg'; }}
                              />
                            </td>
                            <td>
                              <strong>{item.product?.name}</strong>
                              <br />
                              <small style={{ color: '#666' }}>
                                Size: {item.variant?.size} | Color: {item.variant?.color}
                              </small>
                            </td>
                            <td>Rs. {Number(price).toFixed(2)}</td>
                            <td>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                  style={{ 
                                    width: '28px', 
                                    height: '28px', 
                                    border: '1px solid #ddd',
                                    background: item.quantity <= 1 ? '#f0f0f0' : 'white', 
                                    cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer', 
                                    borderRadius: '4px' 
                                  }}>-</button>
                                <span style={{ minWidth: '20px', textAlign: 'center' }}>
                                  {item.quantity}
                                </span>
                                <button 
                                  onClick={() => {
                                    if (item.quantity < maxStock) {
                                      updateQuantity(item.id, item.quantity + 1);
                                    } else {
                                      alert(`Only ${maxStock} items available in stock`);
                                    }
                                  }}
                                  disabled={item.quantity >= maxStock}
                                  style={{ 
                                    width: '28px', 
                                    height: '28px', 
                                    border: '1px solid #ddd',
                                    background: item.quantity >= maxStock ? '#f0f0f0' : 'white', 
                                    cursor: item.quantity >= maxStock ? 'not-allowed' : 'pointer', 
                                    borderRadius: '4px' 
                                  }}>+</button>
                              </div>
                              {item.quantity >= maxStock && (
                                <small style={{ color: '#e74c3c', display: 'block', marginTop: '5px' }}>
                                  Max stock reached
                                </small>
                              )}
                            </td>
                            <td>Rs. {(Number(price) * item.quantity).toFixed(2)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div id="cart-add" className="section-p1">
                  <div id="coupon" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
                    <h3>Apply Coupon</h3>
                    <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
                      💡 Tip: Use code <strong style={{ color: '#088178' }}>HQ</strong> for 10% off!
                    </p>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                      <input 
                        type="text" 
                        placeholder="Enter Your Coupon"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        disabled={couponApplied}
                        style={{
                          flex: 1,
                          padding: '12px',
                          border: '1px solid #ddd',
                          borderRadius: '6px',
                          textTransform: 'uppercase'
                        }}
                      />
                      {!couponApplied ? (
                        <button 
                          className="normal" 
                          onClick={applyCoupon}
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          Apply
                        </button>
                      ) : (
                        <button 
                          className="normal" 
                          onClick={removeCoupon}
                          style={{ 
                            whiteSpace: 'nowrap',
                            backgroundColor: '#e74c3c'
                          }}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    {couponMessage && (
                      <div style={{
                        padding: '10px',
                        borderRadius: '6px',
                        backgroundColor: couponMessage.includes('✅') ? '#d4edda' : 
                                       couponMessage.includes('❌') ? '#f8d7da' : '#fff3cd',
                        color: couponMessage.includes('✅') ? '#155724' : 
                               couponMessage.includes('❌') ? '#721c24' : '#856404',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}>
                        {couponMessage}
                      </div>
                    )}
                  </div>

                  <div id="subtotal" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
                    <h3>Cart Totals</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>Cart Subtotal</td>
                          <td>Rs. {cartTotal.toFixed(2)}</td>
                        </tr>
                        {discount > 0 && (
                          <tr style={{ color: '#27ae60', fontWeight: 'bold' }}>
                            <td>Discount (HQ Coupon)</td>
                            <td>- Rs. {discount.toFixed(2)}</td>
                          </tr>
                        )}
                        <tr>
                          <td>Shipping</td>
                          <td>{shipping === 0 ? 'Free' : `Rs. ${shipping.toFixed(2)}`}</td>
                        </tr>
                        <tr>
                          <td><strong>Total</strong></td>
                          <td><strong>Rs. {total.toFixed(2)}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="normal" onClick={() => navigate('/checkout')}>
                      Proceed to checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
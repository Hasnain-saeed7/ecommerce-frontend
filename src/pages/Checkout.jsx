
 
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import api from '../api/axios';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: 'Pakistan',
    notes: ''
  });

  const shipping = cartTotal > 100 ? 0 : 10;
  const tax = cartTotal * 0.05;
  const total = cartTotal + shipping + tax;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!formData.full_name || !formData.email || !formData.address || !formData.city) {
      alert('Please fill all required fields!');
      return;
    }
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    setLoading(true);
    try {
      const orderPayload = {
        shipping_name: formData.full_name,
        shipping_email: formData.email,
        shipping_phone: formData.phone,
        shipping_address: formData.address,
        shipping_city: formData.city,
        shipping_state: formData.state,
        shipping_zipcode: formData.zipcode,
        shipping_country: formData.country,
        payment_method: paymentMethod,
        notes: formData.notes,
        items: cart.map(item => ({
          product_id: item.product_id,
          variant_id: item.variant_id,
          quantity: item.quantity,
          price: parseFloat(item.product?.discount_price || item.product?.price || 0)
        }))
      };

      console.log('Sending order:', orderPayload);
      const response = await api.post('/orders', orderPayload);
      const order = response.data;
      
      await clearCart();
      navigate(`/order-success/${order.id}`);
    } catch (error) {
      console.error('Order failed detail:', error.response?.data);
      console.error('Full error:', error);
      alert(`Failed to place order. Check console for details.`);
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '80px' }}>
        <h3>Your cart is empty!</h3>
        <Link to="/shop" style={{
          padding: '14px 40px', background: '#088178', color: 'white',
          textDecoration: 'none', borderRadius: '4px', display: 'inline-block', marginTop: '20px'
        }}>Go Shopping</Link>
      </div>
    );
  }

  return (
    <>
      <section id="page-header">
        <h2>Checkout</h2>
        <p>Home / Cart / Checkout</p>
      </section>

      {/* Full Page Background */}
      <div
        style={{
          backgroundImage: 'url(/img/updation/checkout-bg.jpg)',
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0
        }}></div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <section style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>

              {/* LEFT - Form */}
              <div style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}>
                <h3 style={{ marginBottom: '20px', color: '#088178' }}>📦 Shipping Information</h3>

                {[
                  { label: 'Full Name *', name: 'full_name', type: 'text', required: true },
                  { label: 'Email *', name: 'email', type: 'email', required: true },
                  { label: 'Phone', name: 'phone', type: 'text' },
                  { label: 'Address *', name: 'address', type: 'text', required: true },
                  { label: 'City *', name: 'city', type: 'text', required: true },
                  { label: 'State/Province', name: 'state', type: 'text' },
                  { label: 'ZIP / Postal Code', name: 'zipcode', type: 'text' },
                  { label: 'Country', name: 'country', type: 'text' },
                  { label: 'Order Notes', name: 'notes', type: 'text' },
                ].map(field => (
                  <div key={field.name} style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      style={{
                        width: '100%', padding: '12px',
                        border: '1px solid #ddd', borderRadius: '6px',
                        fontSize: '14px', boxSizing: 'border-box'
                      }}
                    />
                  </div>
                ))}

                {/* Payment Methods */}
                <h3 style={{ margin: '30px 0 15px', color: '#088178' }}>💳 Payment Method</h3>

                {[
                  { id: 'cod', label: '💵 Cash on Delivery', desc: 'Pay when you receive your order' },
                  { id: 'jazzcash', label: '📱 JazzCash', desc: 'Pay via JazzCash mobile wallet' },
                  { id: 'easypaisa', label: '💚 Easypaisa', desc: 'Pay via Easypaisa mobile wallet' },
                  { id: 'card', label: '💳 Credit/Debit Card', desc: 'Visa, Mastercard, Maestro' },
                  { id: 'bank_transfer', label: '🏦 Bank Transfer', desc: 'Direct bank transfer' },
                ].map(method => (
                  <div
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    style={{
                      padding: '15px 20px',
                      border: paymentMethod === method.id ? '2px solid #088178' : '1px solid #ddd',
                      borderRadius: '8px', marginBottom: '12px', cursor: 'pointer',
                      background: paymentMethod === method.id ? '#f0faf9' : 'white',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{method.label}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>{method.desc}</div>
                    </div>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      border: paymentMethod === method.id ? '6px solid #088178' : '2px solid #ddd',
                      background: 'white', flexShrink: 0
                    }} />
                  </div>
                ))}

                {/* Payment Details */}
                {paymentMethod === 'jazzcash' && (
                  <div style={{ background: '#fff8e1', padding: '15px', borderRadius: '8px', border: '1px solid #ffc107' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>📱 JazzCash Payment Details:</p>
                    <p><strong>Number:</strong> 0312-6325881</p>
                    <p><strong>Name:</strong> BazaarHub Store</p>
                    <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                      ⚠️ Send exact amount and keep transaction ID
                    </p>
                  </div>
                )}

                {paymentMethod === 'easypaisa' && (
                  <div style={{ background: '#e8f5e9', padding: '15px', borderRadius: '8px', border: '1px solid #4caf50' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>💚 Easypaisa Payment Details:</p>
                    <p><strong>Number:</strong> 0312-6325881</p>
                    <p><strong>Name:</strong> BazaarHub Store</p>
                    <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                      ⚠️ Send exact amount and keep transaction ID
                    </p>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>💳 Card Details:</p>
                    <input type="text" placeholder="Card Number: 1234 5678 9012 3456"
                      style={{ width: '100%', padding: '12px', border: '1px solid #ddd',
                        borderRadius: '6px', marginBottom: '10px', boxSizing: 'border-box' }}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <input type="text" placeholder="Expiry: MM/YY"
                        style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }}
                      />
                      <input type="text" placeholder="CVV: 123"
                        style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }}
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'bank_transfer' && (
                  <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '8px', border: '1px solid #2196f3' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>🏦 Bank Transfer Details:</p>
                    <p><strong>Bank:</strong> HBL</p>
                    <p><strong>Account:</strong> 1234-5678-9012</p>
                    <p><strong>Name:</strong> BazaarHub Store</p>
                    <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                      ⚠️ Use your order number as reference
                    </p>
                  </div>
                )}
              </div>

              {/* RIGHT - Order Summary */}
              <div style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                height: 'fit-content'
              }}>
                <h3 style={{ marginBottom: '20px', color: '#088178' }}>🧾 Order Summary</h3>

                <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
                  {cart.map(item => {
                    const price = parseFloat(item.product?.discount_price || item.product?.price || 0);
                    return (
                      <div key={item.id} style={{
                        display: 'flex', gap: '15px', marginBottom: '15px',
                        paddingBottom: '15px', borderBottom: '1px solid #eee'
                      }}>
                        <img
                          src={item.product?.main_image}
                          alt={item.product?.name}
                          style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }}
                          onError={(e) => { e.target.src = '/img/products/f1.jpg'; }}
                        />
                        <div style={{ flex: 1 }}>
                          <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{item.product?.name}</p>
                          <p style={{ fontSize: '13px', color: '#666' }}>
                            Size: {item.variant?.size} | Color: {item.variant?.color}
                          </p>
                          <p style={{ fontSize: '13px' }}>Qty: {item.quantity}</p>
                        </div>
                        <p style={{ fontWeight: 'bold', color: '#088178' }}>
                          Rs. {(price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Totals */}
                <div style={{ background: 'white', border: '1px solid #eee', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
                  {[
                    { label: 'Subtotal', value: `Rs. ${cartTotal.toFixed(2)}` },
                    { label: 'Shipping', value: shipping === 0 ? '🎉 Free' : `Rs. ${shipping.toFixed(2)}` },
                    { label: 'Tax (5%)', value: `Rs. ${tax.toFixed(2)}` },
                  ].map(row => (
                    <div key={row.label} style={{
                      display: 'flex', justifyContent: 'space-between',
                      padding: '10px 0', borderBottom: '1px solid #f0f0f0'
                    }}>
                      <span>{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  ))}
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '15px 0', fontWeight: 'bold', fontSize: '20px', color: '#088178'
                  }}>
                    <span>Total</span>
                    <span>Rs. {total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  style={{
                    width: '100%', padding: '18px',
                    background: loading ? '#aaa' : '#088178',
                    color: 'white', border: 'none', borderRadius: '8px',
                    fontSize: '18px', fontWeight: 'bold',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  {loading ? '⏳ Placing Order...' : '✅ Place Order Now'}
                </button>

                <div style={{ textAlign: 'center', marginTop: '15px' }}>
                  <p style={{ fontSize: '12px', color: '#888' }}>
                    🔒 Secure & encrypted checkout
                  </p>
                  <img src="/img/pay/pay.png" alt="Payments"
                    style={{ maxWidth: '180px', marginTop: '10px' }}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}




















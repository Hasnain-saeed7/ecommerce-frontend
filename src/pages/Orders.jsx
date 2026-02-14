import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { orderService } from '../api/orderService';

export default function Orders() {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      loadOrders();
    }
  }, [isAuthenticated]);

  const loadOrders = async () => {
    try {
      const data = await orderService.getOrders();
      setOrders(data);
    } catch (error) {
      console.error('Failed to load orders:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <section id="page-header">
          <h2>My Orders</h2>
          <p>Home / Orders</p>
        </section>
        <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: 'white' }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>📦</div>
          <h3>Please login to view your orders</h3>
          <p style={{ color: '#666', margin: '15px 0' }}>
            Login to track your order history
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

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px' }}>Loading orders...</div>
    );
  }

  return (
    <>
      <section id="page-header">
        <h2>My Orders</h2>
        <p>Home / Orders</p>
      </section>

      {/* Full Page Background */}
      <div
        style={{
          backgroundImage: 'url(/img/updation/orders-bg.jpg)',
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
          <section className="section-p1" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {orders.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px', backgroundColor: 'white', borderRadius: '10px' }}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>📦</div>
                <h3>No orders yet</h3>
                <p style={{ color: '#666', marginBottom: '20px' }}>
                  Start shopping to see your orders here!
                </p>
                <Link to="/shop" style={{
                  padding: '14px 40px', background: '#088178', color: 'white',
                  textDecoration: 'none', borderRadius: '4px', display: 'inline-block'
                }}>Continue Shopping</Link>
              </div>
            ) : (
              <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '30px' }}>
                <h2 style={{ marginBottom: '30px' }}>Order History</h2>
                
                {orders.map(order => (
                  <div key={order.id} style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px',
                    backgroundColor: '#f9f9f9'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '15px' }}>
                      <div>
                        <h4>Order #{order.id}</h4>
                        <p style={{ color: '#666', fontSize: '14px' }}>
                          {new Date(order.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{
                          padding: '6px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          backgroundColor: order.status === 'Delivered' ? '#27ae60' : 
                                         order.status === 'Shipped' ? '#3498db' : 
                                         order.status === 'Processing' ? '#f39c12' : '#95a5a6',
                          color: 'white'
                        }}>
                          {order.status}
                        </span>
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #ddd', paddingTop: '15px', marginTop: '15px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <h5>Shipping Address:</h5>
                          <p style={{ fontSize: '14px', color: '#666' }}>
                            {order.shipping_address}<br />
                            {order.city}, {order.postal_code}
                          </p>
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <h5>Payment Method:</h5>
                          <p style={{ fontSize: '14px', color: '#666' }}>{order.payment_method}</p>
                        </div>
                        <div style={{ textAlign: 'right', minWidth: '150px' }}>
                          <h5>Total Amount:</h5>
                          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#088178' }}>
                            Rs. {order.total_amount.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                      <h5>Items ({order.items?.length || 0}):</h5>
                      <div style={{ display: 'grid', gap: '10px', marginTop: '10px' }}>
                        {order.items?.map(item => (
                          <div key={item.id} style={{
                            display: 'flex',
                            gap: '15px',
                            padding: '10px',
                            backgroundColor: 'white',
                            borderRadius: '6px'
                          }}>
                            <img 
                              src={item.product?.main_image} 
                              alt={item.product?.name}
                              style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                              onError={(e) => { e.target.src = '/img/products/f1.jpg'; }}
                            />
                            <div style={{ flex: 1 }}>
                              <h6 style={{ margin: '0 0 5px 0' }}>{item.product?.name}</h6>
                              <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
                                Qty: {item.quantity} × Rs. {item.price.toFixed(2)}
                              </p>
                            </div>
                            <div style={{ fontWeight: 'bold' }}>
                              Rs. {(item.quantity * item.price).toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: '15px', textAlign: 'right' }}>
                      <Link 
                        to={`/order/${order.id}`}
                        style={{
                          padding: '10px 20px',
                          background: '#088178',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '4px',
                          display: 'inline-block',
                          fontSize: '14px'
                        }}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
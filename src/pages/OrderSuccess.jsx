

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { orderService } from '../api/orderService';

export default function OrderSuccess() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const data = await orderService.getOrder(id);
        setOrder(data);
      } catch (error) {
        console.error('Failed to load order:', error);
      }
    };
    if (id) loadOrder();
  }, [id]);

  return (
    <>
      {/* Full Page Background */}
      <div
        style={{
          backgroundImage: 'url(/img/updation/order-success-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
        <div style={{ 
          position: 'relative', 
          zIndex: 1,
          backgroundColor: 'white',
          padding: '60px 40px',
          borderRadius: '15px',
          maxWidth: '600px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>🎉</div>
          <h2 style={{ color: '#088178', marginBottom: '15px', fontSize: '28px' }}>
            Order Placed Successfully!
          </h2>
          <p style={{ color: '#666', marginBottom: '30px', fontSize: '16px' }}>
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          
          {order && (
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '10px', 
              marginBottom: '30px',
              textAlign: 'left'
            }}>
              <div style={{ marginBottom: '12px' }}>
                <strong>Order Number:</strong> #{order.id}
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Total:</strong> Rs. {order.total_amount?.toFixed(2)}
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Payment:</strong> {order.payment_method}
              </div>
              <div>
                <strong>Status:</strong> <span style={{ 
                  color: '#088178', 
                  fontWeight: 'bold' 
                }}>{order.status}</span>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/orders" style={{
              padding: '14px 30px', 
              background: '#088178', 
              color: 'white',
              textDecoration: 'none', 
              borderRadius: '8px', 
              display: 'inline-block',
              fontWeight: 'bold'
            }}>
              View Orders
            </Link>
            <Link to="/shop" style={{
              padding: '14px 30px', 
              background: '#333', 
              color: 'white',
              textDecoration: 'none', 
              borderRadius: '8px', 
              display: 'inline-block',
              fontWeight: 'bold'
            }}>
              Continue Shopping
            </Link>
          </div>

          <p style={{ 
            marginTop: '30px', 
            fontSize: '14px', 
            color: '#888',
            borderTop: '1px solid #eee',
            paddingTop: '20px'
          }}>
            📧 A confirmation email has been sent to your email address.
          </p>
        </div>
      </div>
    </>
  );
}





























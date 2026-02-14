
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success message
    setShowSuccess(true);
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#let&apos;s_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      {/* Full Page Background */}
      <div
        style={{
          backgroundImage: 'url(/img/updation/contact-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'relative',
          minHeight: '100vh',
          padding: '60px 20px'
        }}
      >
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 0
        }}></div>

        {/* Content Container */}
        <div style={{ 
          position: 'relative', 
          zIndex: 1, 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>

          {/* Success Message */}
          {showSuccess && (
            <div style={{
              backgroundColor: '#27ae60',
              color: 'white',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '30px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              animation: 'slideDown 0.5s ease-out'
            }}>
              <i className="fa-solid fa-check-circle" style={{ fontSize: '30px', marginBottom: '10px' }} />
              <h3 style={{ margin: '10px 0 5px 0' }}>Message Sent Successfully!</h3>
              <p style={{ margin: 0, fontSize: '14px' }}>Thank you for contacting us. We'll get back to you within 24 hours.</p>
            </div>
          )}

          {/* Contact Info Cards Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '25px', 
            marginBottom: '50px' 
          }}>
            {/* Location Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                margin: '0 auto 20px',
                backgroundColor: '#088178',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <i className="fa-solid fa-location-dot" style={{ fontSize: '30px', color: 'white' }} />
              </div>
              <h3 style={{ color: '#088178', marginBottom: '15px' }}>Visit Us</h3>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>
                Askari Road, Street 12<br />
                Islamabad, Pakistan
              </p>
            </div>

            {/* Phone Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                margin: '0 auto 20px',
                backgroundColor: '#088178',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <i className="fa-solid fa-phone" style={{ fontSize: '30px', color: 'white' }} />
              </div>
              <h3 style={{ color: '#088178', marginBottom: '15px' }}>Call Us</h3>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>
                +92 312 6325881<br />
                Mon - Sat: 9:00am - 4:00pm
              </p>
            </div>

            {/* Email Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                margin: '0 auto 20px',
                backgroundColor: '#088178',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <i className="fa-solid fa-envelope" style={{ fontSize: '30px', color: 'white' }} />
              </div>
              <h3 style={{ color: '#088178', marginBottom: '15px' }}>Email Us</h3>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>
                contact@bazaarhub.com<br />
                We'll reply within 24hrs
              </p>
            </div>
          </div>

          {/* Map and Form Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '30px',
            marginBottom: '50px'
          }}>
            {/* Google Map - ISLAMABAD */}
            <div style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              overflow: 'hidden'
            }}>
              <h3 style={{ color: '#088178', marginBottom: '20px', textAlign: 'center' }}>Find Us Here</h3>
              <iframe
                title="Islamabad Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.5969894754!2d72.8606472!3d33.6844202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1705838000000!5m2!1sen!2s"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Contact Form */}
            <div style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{ color: '#088178', marginBottom: '10px' }}>Send us a Message</h3>
              <p style={{ color: '#666', marginBottom: '25px', fontSize: '14px' }}>
                We'd love to hear from you! Fill out the form below.
              </p>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    marginBottom: '15px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '15px',
                    transition: 'border 0.3s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#088178'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    marginBottom: '15px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#088178'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    marginBottom: '15px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#088178'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    marginBottom: '20px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '15px',
                    resize: 'vertical',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#088178'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
                <button 
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '14px',
                    backgroundColor: '#088178',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#066d63'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#088178'}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Team Member Card */}
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            textAlign: 'center',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <h3 style={{ color: '#088178', marginBottom: '30px' }}>Our Team</h3>
            <img 
              src="/img/hasspic/WhatsApp Image 2026-01-21 at 12.20.19 PM.jpeg" 
              alt="Hasnain Saeed"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 auto 20px',
                border: '5px solid #088178',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
              }}
            />
            <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '20px' }}>Hasnain Saeed</h4>
            <p style={{ color: '#088178', fontWeight: 'bold', marginBottom: '15px' }}>Web Developer</p>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '10px',
              alignItems: 'center',
              color: '#666',
              fontSize: '15px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-phone" style={{ color: '#088178' }} />
                <span>+92 312 6325881</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-envelope" style={{ color: '#088178' }} />
                <span>hasnainqureshi2232@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Add CSS animation for success message */}
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
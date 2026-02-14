// export default function About() {
//   return (
//     <>
//       <section id="page-header" className="about-header">
//         <h2>#KnowUs</h2>
//         <p>Learn more about the team behind BazaarHub!</p>
//       </section>

//       <section id="about-head" className="section-p1">
//         <img src="/img/about/a1.png" alt="About BazaarHub" />

//         <div>
//           <h2>Who We Are?</h2>
//           <p>
//             We are a dedicated team providing the best quality fashion with a focus on
//             sustainability and style. Our goal is to bridge the gap between traditional
//             craftsmanship and modern web technologies.
//           </p>

//           <abbr>
//             &quot;Design is not just what it looks like and feels like. Design is how it
//             works.&quot;
//           </abbr>

//           <br />
//           <br />

//           <marquee bgcolor="#ccc" loop="-1" scrollAmount="5" width="100%">
//             Welcome to our store! Quality is our priority. Enjoy up to 70% off on new
//             arrivals!
//           </marquee>
//         </div>
//       </section>

//       <section id="about-app" className="section-p1">
//         <h1>
//           Download Our <a href="#">App</a>
//         </h1>

//         <div className="video">
//           <video autoPlay muted loop src="/img/about/1.mp4" />
//         </div>
//       </section>

//       <section id="feature" className="section-p1">
//         <div className="fe-box">
//           <img src="/img/features/f1.png" alt="" />
//           <h6>Free Shipping</h6>
//         </div>

//         <div className="fe-box">
//           <img src="/img/features/f2.png" alt="" />
//           <h6>Online Order</h6>
//         </div>

//         <div className="fe-box">
//           <img src="/img/features/f3.png" alt="" />
//           <h6>Save Money</h6>
//         </div>

//         <div className="fe-box">
//           <img src="/img/features/f4.png" alt="" />
//           <h6>Promotions</h6>
//         </div>

//         <div className="fe-box">
//           <img src="/img/features/f5.png" alt="" />
//           <h6>Happy Sell</h6>
//         </div>

//         <div className="fe-box">
//           <img src="/img/features/f6.png" alt="" />
//           <h6>24/7 Support</h6>
//         </div>
//       </section>
//     </>
//   );
// }
































export default function About() {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Learn more about the team behind BazaarHub!</p>
      </section>

      {/* Full Page Background */}
      <div
        style={{
          backgroundImage: 'url(/img/updation/about-bg.jpg)',
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
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 0
        }}></div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <section id="about-head" className="section-p1">
            <img src="/img/about/a1.png" alt="About BazaarHub" />

            <div>
              <h2 style={{ color: 'white' }}>Who We Are?</h2>
              <p style={{ color: 'white' }}>
                We are a dedicated team providing the best quality fashion with a focus on
                sustainability and style. Our goal is to bridge the gap between traditional
                craftsmanship and modern web technologies.
              </p>

              <abbr style={{ color: '#ffd700' }}>
                &quot;Design is not just what it looks like and feels like. Design is how it
                works.&quot;
              </abbr>

              <br />
              <br />

              <marquee bgcolor="#088178" loop="-1" scrollamount="5" width="100%" style={{ color: 'white', padding: '10px' }}>
                Welcome to our store! Quality is our priority. Enjoy up to 70% off on new
                arrivals!
              </marquee>
            </div>
          </section>

          <section id="about-app" className="section-p1">
            <h1 style={{ color: 'white' }}>
              Download Our <a href="#" style={{ color: '#088178' }}>App</a>
            </h1>

            <div className="video">
              <video autoPlay muted loop src="/img/about/1.mp4" />
            </div>
          </section>

          <section id="feature" className="section-p1">
            <div className="fe-box" style={{ backgroundColor: 'white' }}>
              <img src="/img/features/f1.png" alt="" />
              <h6>Free Shipping</h6>
            </div>

            <div className="fe-box" style={{ backgroundColor: 'white' }}>
              <img src="/img/features/f2.png" alt="" />
              <h6>Online Order</h6>
            </div>

            <div className="fe-box" style={{ backgroundColor: 'white' }}>
              <img src="/img/features/f3.png" alt="" />
              <h6>Save Money</h6>
            </div>

            <div className="fe-box" style={{ backgroundColor: 'white' }}>
              <img src="/img/features/f4.png" alt="" />
              <h6>Promotions</h6>
            </div>

            <div className="fe-box" style={{ backgroundColor: 'white' }}>
              <img src="/img/features/f5.png" alt="" />
              <h6>Happy Sell</h6>
            </div>

            <div className="fe-box" style={{ backgroundColor: 'white' }}>
              <img src="/img/features/f6.png" alt="" />
              <h6>24/7 Support</h6>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
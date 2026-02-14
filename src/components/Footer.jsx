

// export default function Footer() {
//   return (
//     <>
//       <footer 
//         id="footer"
//         style={{
//           backgroundImage: 'url(/img/updation/footer-bg.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="col">
//           <img className="logo" src="/img/updation/logo.png" alt="" />
//           <h4>Contact</h4>
//           <p>
//             <strong>Address :</strong>Askari Road.Street 12 ,Islamabad
//           </p>
//           <p>
//             <strong>Phone :</strong>+923126325881
//           </p>
//           <p>
//             <strong>Hours :</strong>10:00-18:00 , Sunday-Thursday
//           </p>
//           <div className="follow">
//             <h4>Follow Us</h4>
//             <div className="icons">
//               <i className="fab fa-facebook-f" />
//               <i className="fab fa-twitter" />
//               <i className="fa-brands fa-instagram" />
//               <i className="fab fa-pinterest-p" />
//               <i className="fab fa-youtube" />
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <h4>About</h4>
//           <a href="">About Us</a>
//           <a href="">Delivery Information</a>
//           <a href="">Privacy Policy</a>
//           <a href="">Terms $ Conditions</a>
//           <a href="">Contact Us</a>
//         </div>

//         <div className="col">
//           <h4>My Account</h4>
//           <a href="">Sign in</a>
//           <a href="">View Cart</a>
//           <a href="">My Wishlist</a>
//           <a href="">Track My Order</a>
//           <a href="">Help</a>
//         </div>

//         <div className="col">
//           <p>From App Store or Google Play</p>
//           <div className="row">
//             <img className="tasver" src="/img/pay/app.jpg" alt="" />
//             <img className="tasver" src="/img/pay/play.jpg" alt="" />
//           </div>
//           <p>Secure Payment Gateways</p>
//           <img src="/img/pay/pay.png" alt="" />
//         </div>
//       </footer>

//       <div className="copyright">
//         <p>@2026 Hasnain Saeed | All Rights Reserved</p>
//       </div>
//     </>
//   );
// }
























export default function Footer() {
  return (
    <>
      <footer 
        id="footer"
        style={{
          backgroundImage: 'url(/img/updation/footer-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="col">
          <img 
            className="logo" 
            src="/img/updation/hqlogo3.png" 
            alt="" 
            style={{
              width: '80px',
              height: 'auto',
              marginBottom: '20px'
            }}
          />
          <h4>Contact</h4>
          <p>
            <strong>Address :</strong>Askari Road.Street 12 ,Islamabad
          </p>
          <p>
            <strong>Phone :</strong>+923126325881
          </p>
          <p>
            <strong>Hours :</strong>10:00-18:00 , Sunday-Thursday
          </p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icons">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-twitter" />
              <i className="fa-brands fa-instagram" />
              <i className="fab fa-pinterest-p" />
              <i className="fab fa-youtube" />
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="">About Us</a>
          <a href="">Delivery Information</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms $ Conditions</a>
          <a href="">Contact Us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href="">Sign in</a>
          <a href="">View Cart</a>
          <a href="">My Wishlist</a>
          <a href="">Track My Order</a>
          <a href="">Help</a>
        </div>

        <div className="col">
          <p>From App Store or Google Play</p>
          <div className="row">
            <img className="tasver" src="/img/pay/app.jpg" alt="" />
            <img className="tasver" src="/img/pay/play.jpg" alt="" />
          </div>
          <p>Secure Payment Gateways</p>
          <img src="/img/pay/pay.png" alt="" />
        </div>
      </footer>

      <div className="copyright">
        <p>@2026 Hasnain Saeed | All Rights Reserved</p>
      </div>
    </>
  );
}





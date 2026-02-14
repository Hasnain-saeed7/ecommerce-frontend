export default function Newsletter() {
  return (
    <section id="newsletter">
      <div className="newstext">
        <h2>Sign Up For Newsletters</h2>
        <h6>
          Get E-mail updates about our latest shop and <span>special offers</span>
        </h6>
      </div>

      <div className="newsbar">
        {/* UI only - no backend integration */}
        <input type="text" placeholder="Sign Up  your Email" />
        <button type="button">Sign Up</button>
      </div>
    </section>
  );
}


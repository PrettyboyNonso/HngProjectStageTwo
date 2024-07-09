export const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div className="help-lines">
          <p style={{ fontWeight: "bold" }}>Help lines:</p>
          <p>+2348063091901, +2347055041109</p>
        </div>

        <div className="office-address">
          <p style={{ fontWeight: "bold" }}>Office Address:</p>
          <p>
            Str. 1 Ajayi crowther Estate, Lekki Phase 1, Lagos State, Nigeria.
          </p>
        </div>
      </div>
      <div className="footer-div">
        <p style={{ fontWeight: "bold" }}>Social Media:</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
      </div>
      <div className="footer-div">
        <p style={{ fontWeight: "bold", marginLeft: "-1.8em" }}>About</p>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Checkout</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

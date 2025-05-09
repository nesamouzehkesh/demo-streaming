import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-nav">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Collection Statement</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Manage Account</a></li>
        </ul>
      </div>

      <p className="footer-legal">© 2016 DEMO Streaming. All Rights Reserved.</p>

      <div className="footer-extras">
        <ul className="social-icons-list">
          <li><span className="social-icon facebook" /></li>
          <li><span className="social-icon twitter" /></li>
          <li><span className="social-icon instagram" /></li>
        </ul>

        <ul className="store-badges-list">
          <li><span className="store-badge ios" /></li>
          <li><span className="store-badge android" /></li>
          <li><span className="store-badge windows" /></li>
        </ul>
      </div>
    </footer>
  );
}

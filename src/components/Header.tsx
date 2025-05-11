import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header gradient-blue shadow">
      <div className="header-content">
        <Link to="/" className="header-logo">
          <h1>DEMO Streaming</h1>
        </Link>
        <div className="header-actions">
          <Link to="#" className="login">Log in</Link>
          <Link to="#" className="trial-button">Start your free trial</Link>
        </div>
      </div>
    </header>
  );
}

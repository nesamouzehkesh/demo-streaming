import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <h1>DEMO Streaming</h1>
        <div className="header-actions">
          <Link to="#" className="login">Log in</Link>
          <Link to="#" className="trial-button">Start your free trial</Link>
        </div>
      </div>
    </header>
  );
}

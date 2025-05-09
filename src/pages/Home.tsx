import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <h2 className="home-title">Popular Titles</h2>
      <div className="tiles">
        <Link to="/series" className="tile">
          <div className="tile-image series" />
          <p>Popular Series</p>
        </Link>
        <Link to="/movies" className="tile">
          <div className="tile-image movies" />
          <p>Popular Movies</p>
        </Link>
      </div>
    </div>
  );
}

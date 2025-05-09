import './Home.css';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

export default function Home() {
  return (
    <div className="home">
      <SectionHeading title="Popular Titles" />
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

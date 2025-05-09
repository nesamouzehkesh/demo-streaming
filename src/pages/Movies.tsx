import { useFilteredPrograms } from '../hooks/use-filtered-programs';
import './Movies.css';
import SectionHeading from '../components/SectionHeading';

export default function Movies() {
  const { data: movies, loading, error } = useFilteredPrograms('movie');

  if (loading) return <p className="state">Loading...</p>;
  if (error) return <p className="state error">Oops! Something went wrong.</p>;

  return (
    <>
    <SectionHeading title="Popular Movies" />
    <div className="program-grid">
      {movies.map((item) => (
        <div className="program-card" key={item.title}>
          <img src={item.images['Poster Art'].url} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
    </>
    
  );
}

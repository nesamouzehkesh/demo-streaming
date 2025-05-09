import { useFilteredPrograms } from '../hooks/use-filtered-programs';
import './Series.css';

export default function Series() {
  const { data: series, loading, error } = useFilteredPrograms('series');

  if (loading) return <p className="state">Loading...</p>;
  if (error) return <p className="state error">Oops! Something went wrong.</p>;

  return (
    <div className="program-grid">
      {series.map((item) => (
        <div className="program-card" key={item.title}>
          <img src={item.images['Poster Art'].url} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

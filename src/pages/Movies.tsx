import { useEffect, useState } from 'react';
import type { Program } from '../types/Program';
import { fetchPrograms } from '../utils/fetch-data';
import './Movies.css';

export default function Movies() {
  const [movies, setMovies] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPrograms()
      .then((entries) => {
        const filtered = entries
          .filter((item) => item.programType === 'movie' && item.releaseYear >= 2010)
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 21);
        setMovies(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="state">Loading...</p>;
  if (error) return <p className="state error">Oops! Something went wrong.</p>;

  return (
    <div className="program-grid">
      {movies.map((item) => (
        <div className="program-card" key={item.title}>
          <img src={item.images['Poster Art'].url} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

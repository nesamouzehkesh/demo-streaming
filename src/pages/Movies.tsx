import { useFilteredPrograms } from '../hooks/use-filtered-programs';
import './Movies.css';
import SectionHeading from '../components/SectionHeading';
import ProgramTile from '../components/ProgramTile';

export default function Movies(): React.ReactElement {
  const { data: movies, loading, error } = useFilteredPrograms('movie');

  if (loading) return <p className="state">Loading...</p>;
  if (error) return <p className="state error">Oops! Something went wrong.</p>;

  return (
    <>
    <SectionHeading title="Popular Movies" />
    <div className="program-grid">
      {movies.map(program => (
        <ProgramTile key={program.title} program={program} />
      ))}
    </div>
    </>
  );
}

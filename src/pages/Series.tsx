import { useFilteredPrograms } from '../hooks/use-filtered-programs';
import SectionHeading from '../components/SectionHeading';
import ProgramTile from '../components/ProgramTile';
import './Series.css';

export default function Series() {
  const { data: series, loading, error } = useFilteredPrograms('series');

  if (loading) return <p className="state">Loading...</p>;
  if (error) return <p className="state error">Oops! Something went wrong.</p>;

  return (
    <>
    <SectionHeading title="Popular Series" />
    <div className="program-grid">
      {series.map(program => (
        <ProgramTile key={program.title} program={program} />
      ))}
    </div>
    </>
  );
}

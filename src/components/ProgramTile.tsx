import { Link } from 'react-router-dom';
import './ProgramTile.css';

type ProgramTileProps = {
  program: {
    title: string;
    programType: 'movie' | 'series';
    images: {
      'Poster Art': {
        url: string;
      };
    };
  };
};

export default function ProgramTile({ program }: ProgramTileProps) {
  return (
    <Link to={`/${program.programType}s`} className="program-tile">
      <div className="program-image">
        <img src={program.images['Poster Art'].url} alt={program.title} />
      </div>
      <p className="program-title">{program.title}</p>
    </Link>
  );
}

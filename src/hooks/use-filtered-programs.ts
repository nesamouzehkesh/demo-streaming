import { useEffect, useState } from 'react';
import type { Program } from '../types/Program';
import { fetchPrograms } from '../utils/fetch-data';

export function useFilteredPrograms(type: 'movie' | 'series') {
  const [data, setData] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPrograms()
      .then((entries: Program[]) => {
        const filtered = entries
          .filter((item: Program) => item.programType === type && item.releaseYear >= 2010)
          .sort((a: Program, b: Program) => a.title.localeCompare(b.title))
          .slice(0, 21);
        setData(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [type]);

  return { data, loading, error };
}

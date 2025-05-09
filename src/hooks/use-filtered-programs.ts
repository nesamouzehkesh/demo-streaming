import { useState, useEffect } from 'react';
import type { Program } from '../types/Program';
import { fetchPrograms } from '../utils/fetch-data';

export function useFilteredPrograms(programType: 'movie' | 'series') {
  const [data, setData] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const programs = await fetchPrograms();
        const filtered = programs
          .filter(program => program.programType === programType)
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 21);
        setData(filtered);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load data'));
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [programType]);

  return { data, loading, error };
}

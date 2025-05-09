import { useEffect, useState } from 'react';
import type { Program } from '../types/Program';
import { fetchPrograms } from '../utils/fetch-data';
import { filterAndSortPrograms } from '../utils/filter-and-sort';

type UseFilteredProgramsResult = {
  data: Program[];
  loading: boolean;
  error: boolean;
};

export function useFilteredPrograms(type: 'movie' | 'series'): UseFilteredProgramsResult {
  const [data, setData] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPrograms()
      .then((entries: Program[]) => {
        const filtered = filterAndSortPrograms(entries, type);
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

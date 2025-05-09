import type { Program } from '../types/Program';

export function filterAndSortPrograms(programs: Program[], type: 'series' | 'movie'): Program[] {
  return programs
    .filter((p) => p.programType === type && p.releaseYear >= 2010)
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 21);
}

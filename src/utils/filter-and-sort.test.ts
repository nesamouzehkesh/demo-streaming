import { filterAndSortPrograms } from './filter-and-sort';

const mockData = [
  {
    title: 'The Resort',
    description: '',
    programType: 'series' as const,
    releaseYear: 2012,
    images: { 'Poster Art': { url: '', width: 1000, height: 1500 } }
  },
  {
    title: 'YOLO: Crystal Fantasy',
    description: '',
    programType: 'series' as const,
    releaseYear: 2015,
    images: { 'Poster Art': { url: '', width: 1000, height: 1500 } }
  },
  {
    title: 'Wonder',
    description: '',
    programType: 'movie' as const,
    releaseYear: 2019,
    images: { 'Poster Art': { url: '', width: 1000, height: 1500 } }
  },
  {
    title: 'Old Show',
    description: '',
    programType: 'series' as const,
    releaseYear: 2008,
    images: { 'Poster Art': { url: '', width: 1000, height: 1500 } }
  },
];

describe('filterAndSortPrograms', () => {
  it('filters by programType and releaseYear and sorts alphabetically', () => {
    const result = filterAndSortPrograms(mockData, 'series');
    expect(result.length).toBe(2);
    expect(result[0].title).toBe('The Resort');
    expect(result[1].title).toBe('YOLO: Crystal Fantasy');
  });

  it('limits to 21 entries', () => {
    const longList = Array.from({ length: 30 }, (_, i) => ({
      title: `John Wick ${i}`,
      description: '',
      programType: 'movie' as const,
      releaseYear: 2015,
      images: { 'Poster Art': { url: '', width: 1000, height: 1500 } },
    }));
    const result = filterAndSortPrograms(longList, 'movie');
    expect(result.length).toBe(21);
  });
});

import type { Program } from '../types/Program';

export async function fetchPrograms(): Promise<Program[]> {
  const response = await fetch('../../public/sample.json');
  if (!response.ok) throw new Error('Failed to load');
  const data = await response.json();
  return data.entries;
}

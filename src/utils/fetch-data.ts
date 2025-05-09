import type { Program } from '../types/Program';
import sampleData from '../data/sample.json';

export async function fetchPrograms(): Promise<Program[]> {
  // simulating API call with some delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleData.entries as Program[]);
    }, 500);
  });
}

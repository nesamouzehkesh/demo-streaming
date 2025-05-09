export interface Program {
    title: string;
    description: string;
    programType: 'series' | 'movie';
    images: {
      'Poster Art': {
        url: string;
        width: number;
        height: number;
      };
    };
    releaseYear: number;
  }
  
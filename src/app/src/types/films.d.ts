interface IMovie {
  countries: string[];
  directors: IDirector[];
  genres: string[];
  idIMDB: string;
  languages: string[];
  ranking: number;
  rating: string;
  runtime: string;
  title: string;
  type: string;
  urlPoster: string;
  year: string;
  writers: [
    {[key: string]: string}
    ];
  simplePlot: string;
  trailers?: any;
}

interface IDirector {
  name: string;
  id: string;
}

interface IMyApiResponse {
  about: {
    version: string,
    serverTime: string
  };
  data: {
    movies?: IMovie[],

  };
}

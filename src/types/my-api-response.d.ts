interface IMyApiResponse {
  about: {
    version: string,
    serverTime: string
  };
  data?: {
    movies?: IMovie[],
    trailer?: ITrailer[]
  };
  error?: {
    code: number,
    message: string
  };
}

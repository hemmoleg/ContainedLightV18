export interface MovieDataJSON{
  movies: Array<MovieData>;
}

export interface CrewMember{
  position: string,
  names: string[]
}
export interface MovieData {
  id: string;
  title: string;
  info: string;
  logline: string;
  cast: string[];
  crew: CrewMember[]
}
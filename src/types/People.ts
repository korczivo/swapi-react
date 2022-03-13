import {
  ResourceUrl,
} from './Base';

export interface People {
  birth_year: string;
  eye_color: string;
  films: Array<ResourceUrl>;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  url: string;
  species: Array<ResourceUrl>;
  starships: Array<ResourceUrl>;
  vehicles: Array<ResourceUrl>;
}

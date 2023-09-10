export interface Breed {
  id: string;
  url: string;
  breeds: string[];
}

export interface Info {
  count: number;
}

export interface BreedsResponse {
  breeds: Breed[];
  info: Info;
}

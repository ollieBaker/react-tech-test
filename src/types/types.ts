export type BeerObject = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  abv: number;
  tagline: string;
  food_pairing: string[];
};

export interface IDrinkListItem {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

export interface IDrinkItemFull {
  id: number;
  name: string;
  description: string;
  image_url: string;
  abv: string;
  tagline: string;
  food_pairing: string[];
}

export interface IPage {
  page: number;
  pageSize?: number;
}

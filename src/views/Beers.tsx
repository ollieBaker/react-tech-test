import { BeerObject } from '../types/types';
import DrinkList from '../components/DrinkList.js';
import { useLoaderData } from 'react-router-dom';

export default function Drinks() {
  let beers = useLoaderData() as BeerObject[];

  return (
    <main>
      <h1>Beer App</h1>
      <DrinkList drinkData={beers} path="beer" />
    </main>
  );
}

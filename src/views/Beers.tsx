import { BeerObject } from '../types/types';
import DrinkList from '../components/DrinkList/DrinkList.js';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBeersByPage } from '../api/punk';

export default function Drinks() {
  const initialBeers = useLoaderData() as BeerObject[];

  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState(initialBeers);
  const [isLoading, setisLoading] = useState(false);
  const [beerRemaining, setBeerRemaining] = useState(true);

  const loadMoreBeer = async () => {
    setPage((p) => p + 1);
  };

  useEffect(() => {
    const getBeer = async () => {
      if (page > 1) {
        setisLoading(true);
        const data = await getBeersByPage({ page });
        if (!data.length || data.length < 10) setBeerRemaining(false);
        setBeers([...beers, ...data]);
        setisLoading(false);
      }
    };
    getBeer();

    return () => {};
  }, [page]);

  return (
    <main>
      <h1>Beer App</h1>
      <DrinkList drinkData={beers} path="beer" />
      {beerRemaining ? (
        <p>
          Thirsty?{' '}
          <button disabled={isLoading} onClick={loadMoreBeer}>
            Get more beer here!
          </button>
        </p>
      ) : (
        <p>You drunk the bar dry!</p>
      )}
    </main>
  );
}

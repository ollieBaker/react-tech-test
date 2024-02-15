import { BeerObject } from '../types/types';
import DrinkList from '../components/DrinkList/DrinkList.js';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { getBeersByPage } from '../api/punk';

export default function Drinks() {
  const loaderData = useLoaderData() as { beers: Promise<BeerObject[]> };

  const [page, setPage] = useState(1);
  const [newBeers, setNewBeers] = useState([]);
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
        setNewBeers([...newBeers, ...data]);
        setisLoading(false);
      }
    };
    getBeer();

    return () => {};
  }, [page]);

  return (
    <main>
      <h1>Punk API</h1>
      <Suspense fallback={<p>Hang tight, your beers are pouring...</p>}>
        <Await resolve={loaderData.beers}>
          {(beers) => (
            <DrinkList drinkData={[...beers, ...newBeers]} path="beer" />
          )}
        </Await>
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
      </Suspense>
    </main>
  );
}

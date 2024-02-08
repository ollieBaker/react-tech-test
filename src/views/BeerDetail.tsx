import { useLoaderData } from 'react-router-dom';
import { BeerObject } from '../types/types';

import BeerDetailList from '../components/BeerDetail/BeerDetail';

export default function BeerDetail() {
  let beer = useLoaderData() as BeerObject;

  return (
    <section className="beer-detail-page">
      <h1 className="beer-detail-page__header">{beer.name}</h1>
      <BeerDetailList beer={beer} />
    </section>
  );
}

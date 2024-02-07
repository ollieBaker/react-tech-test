import { useLoaderData } from 'react-router-dom';
import { BeerObject } from '../types/types';

export default function BeerDetail() {
  let beer = useLoaderData() as BeerObject;

  const foodPairing = beer.food_pairing.map((pairing) => (
    <li key={pairing}>{pairing}</li>
  ));

  // color #51cadd

  return (
    <section>
      <h1>This the page for {beer.name}</h1>
      <article>
        <dl>
          <dt>Who?</dt>
          <dd>{beer.name}</dd>
          <dt>What?</dt>
          <dd>{beer.tagline}</dd>
          <dt>How Strong? (ABV)</dt>
          <dd>{beer.abv}%</dd>
          <dt>What's it like?</dt>
          <dd>{beer.description}</dd>
          <dt>What's it pair with?</dt>
          <dd>
            <ul>{foodPairing}</ul>
          </dd>
        </dl>
        <div>
          <img
            src={beer.image_url}
            alt={`Illustration of a ${beer.name} beer`}
          />
        </div>
      </article>
    </section>
  );
}

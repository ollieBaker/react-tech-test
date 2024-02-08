import { BeerObject } from '../../types/types';
import './BeerDetail.css';

export default function BeerDetail({ beer }: { beer: BeerObject }) {
  const foodPairing = beer.food_pairing.map((pairing) => (
    <li className="beer-detail__pairing-item" key={pairing}>
      {pairing}
    </li>
  ));

  return (
    <article className="beer-detail">
      <div className="beer-detail__container">
        <dl className="beer-detail__list">
          <dt className="beer-detail__list-header">Who?</dt>
          <dd className="beer-detail__text">{beer.name}</dd>
          <dt className="beer-detail__list-header">What?</dt>
          <dd className="beer-detail__text">{beer.tagline}</dd>
          <dt className="beer-detail__list-header">How Strong? (ABV)</dt>
          <dd className="beer-detail__text">{beer.abv}%</dd>
          <dt className="beer-detail__list-header">What's it taste like?</dt>
          <dd className="beer-detail__text">{beer.description}</dd>
          <dt className="beer-detail__list-header">What's it pair with?</dt>
          <dd className="beer-detail__text">
            <ul className="beer-detail__paring-list">{foodPairing}</ul>
          </dd>
        </dl>
        <div className="beer-detail__image">
          <img
            src={beer.image_url}
            alt={`Illustration of a ${beer.name} beer`}
          />
        </div>
      </div>
    </article>
  );
}

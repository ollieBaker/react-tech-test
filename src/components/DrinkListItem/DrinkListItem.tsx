import { IDrinkListItem } from '../../types/types';
import './DrinkListItem.css';
import { Link } from 'react-router-dom';

export default function DrinkListItem({
  drink,
  path,
}: {
  drink: IDrinkListItem;
  path: string;
}) {
  return (
    <li className="drink-list-item">
      <Link className="drink-list-item__link" to={`/${path}/${drink.id}`}>
        <div className="drink-list-item__container">
          <div className="drink-list-item__image">
            <img className="drink-list-item__img" src={drink.image_url} />
          </div>
          <div className="drink-list-item__details">
            <h2 className="drink-list-item__name">{drink.name}</h2>
            <p className="drink-list-item__description">
              {drink.description.split('.')[0]}.
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

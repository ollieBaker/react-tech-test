import { IDrinkListItem } from '../types/types';

export default function DrinkListItem({
  drink,
  path,
}: {
  drink: IDrinkListItem;
  path: string;
}) {
  return (
    <li className="drink-list-item">
      <a href={`/${path}/${drink.id}`}>
        <div className="drink-list-item__container">
          <p className="drink-list-item__name">{drink.name}</p>
          <p className="drink-list-item__description">
            {drink.description.slice(0, 100)}
          </p>
          <p>
            <img
              className="drink-list-item__img"
              src={drink.image_url}
              height="42"
            />
          </p>
        </div>
      </a>
    </li>
  );
}

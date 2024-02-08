import { IDrinkListItem } from '../../types/types';
import DrinkItem from '../DrinkListItem/DrinkListItem';
import './DrinkList.css';

export default function DrinkList({
  drinkData,
  path,
}: {
  drinkData: Array<IDrinkListItem>;
  path: string;
}) {
  const drinks = drinkData.map((drink) => (
    <DrinkItem key={drink.id} drink={drink} path={path} />
  ));

  return (
    <section className="drink-list">
      <ul className="drink-list__list">{drinks}</ul>
    </section>
  );
}

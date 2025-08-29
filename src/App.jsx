import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const SORT_BY_LENGTH = 'length';
const SORT_BY_ALPHABET = 'alphabet';
const REVERS_SORT = 'revers';

export const App = () => {
  const [sortType, setSortType] = useState(null);
  const preparedGoods = [...goodsFromServer];
  const [isReversed, setIsReversed] = useState(false);

  if (sortType === SORT_BY_ALPHABET) {
    preparedGoods.sort((goods1, good2) => goods1.localeCompare(good2));
  }

  if (sortType === SORT_BY_LENGTH) {
    preparedGoods.sort((good1, good2) => good1.length - good2.length);
  }

  if (isReversed) {
    preparedGoods.reverse();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${sortType === SORT_BY_ALPHABET ? '' : 'is-light'}`}
          onClick={() => {
            setSortType(SORT_BY_ALPHABET);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${sortType === SORT_BY_LENGTH ? '' : 'is-light'}`}
          onClick={() => {
            setSortType(SORT_BY_LENGTH);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${isReversed ? '' : 'is-light'}`}
          onClick={() => {
            setIsReversed(prev => !prev);
          }}
        >
          Reverse
        </button>

        {sortType || isReversed ? (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setSortType(null);
              setIsReversed(false);
            }}
          >
            Reset
          </button>
        ) : (
          ''
        )}
      </div>

      <ul>
        {preparedGoods.map((good, index) => {
          return (
            <li data-cy="Good" key={index}>
              {good}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

import { BreedsListProps } from './BreedsList.types';

import './BreedsList.css';

function BreedsList({ data, ...rest }: BreedsListProps) {
  return (
    <ul {...rest} className="list">
      {data?.map((data, index) => (
        <li key={index} className="list-item">
          {data}
        </li>
      ))}
    </ul>
  );
}

export default BreedsList;

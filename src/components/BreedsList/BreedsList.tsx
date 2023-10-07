import { BreedsListProps } from './BreedsList.types';
import { useMemo } from 'react';

import './BreedsList.css';

function BreedsList({ data, ...rest }: BreedsListProps) {
  // Use useMemo to memoize the mapped array of breeds
  const mappedData = useMemo(() => {
    return data?.map((item, index) => (
      <li key={index} className="list-item">
        {item}
        {/* console.log(item); */}
      </li>
    ));
  }, [data]);

  return (
    <ul {...rest} className="list">
      {mappedData}
    </ul>
  );
}

export default BreedsList;

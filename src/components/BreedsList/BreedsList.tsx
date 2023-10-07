import { Breed } from '../../types/types';
import BreedCard from '../BreedCard';

interface BreedListProps {
  breeds: Breed[];
  catImageUrl: string;
  isCatImageLoading: boolean;
}

function BreedList({ breeds, catImageUrl, isCatImageLoading }: BreedListProps) {
  return (
    <div className="class-flex">
      {breeds.map((breed: Breed) => (
        <BreedCard
          key={breed.id}
          breed={breed}
          catImageUrl={catImageUrl}
          isCatImageLoading={isCatImageLoading}
        />
      ))}
    </div>
  );
}

export default BreedList;

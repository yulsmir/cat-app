import { Breed } from '../../types/types';
import BreedCard from '../BreedCard';
import useRandomCatImage from '../../hooks/useRandomCatImage';

interface BreedListProps {
  breeds: Breed[];
  catImageUrl: string | null;
  isCatImageLoading: boolean;
}

function BreedList({ breeds }: BreedListProps) {
  return (
    <div className="class-flex">
      {breeds.map((breed: Breed) => {
        const { catImageUrl, isLoading } = useRandomCatImage(breed.id);

        return (
          <BreedCard
            key={breed.id}
            breed={breed}
            catImageUrl={catImageUrl ?? ''}
            isCatImageLoading={isLoading}
          />
        );
      })}
    </div>
  );
}

export default BreedList;

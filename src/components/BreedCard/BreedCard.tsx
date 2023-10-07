import { Breed } from '../../types/types';

interface BreedCardProps {
  breed: Breed;
  catImageUrl: string;
  isCatImageLoading: boolean;
}

function BreedCard({ breed, catImageUrl, isCatImageLoading }: BreedCardProps) {
  return (
    <div className="breed-card card">
      <div>
        <ul>
          <li>
            {isCatImageLoading ? (
              <p>Loading cat image...</p>
            ) : (
              <img src={catImageUrl} className="random-cat-image" alt={breed.name} />
            )}
          </li>
          <li>{breed.name}</li>
          <li>
            <a href={breed.wikipedia_url} target="_blank" rel="noopener noreferrer">
              Wikipedia
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BreedCard;

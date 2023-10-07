import { useEffect, useState, useCallback } from 'react';
import { Breed } from '../../types/types';
import Headline from '../../components/Headline/Headline';
import ErrorPage from '../ErrorPage';
import NotFound from '../NotFound';
import './BreedPage.css';
import '../ErrorPage';

import useRandomCatImage from '../../hooks/useRandomCatImage';
import { useFetch } from '../../hooks/useFetch';

function BreedsPage() {
  const {
    data: breedData,
    isLoading: isBreedDataLoading,
    isError: isBreedDataError,
  } = useFetch<Breed[]>('https://api.thecatapi.com/v1/breeds');

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Breed[]>([]);

  // Memoize the fetchData function using useCallback
  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      if (!isBreedDataLoading && !isBreedDataError) {
        setData(breedData || []);
        setIsLoading(false);
      } else if (isBreedDataError) {
        setIsError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.error(error);
    }
  }, [isBreedDataLoading, isBreedDataError, breedData]);

  useEffect(() => {
    fetchData(); // Use the memoized function here
  }, [fetchData]);

  const { catImageUrl, isLoading: isCatImageLoading } = useRandomCatImage();

  if (isLoading) {
    return (
      <section>
        <Headline element="h1" className="loading-text">
          Meeeeeoooloading catz ...
        </Headline>
      </section>
    );
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (!data?.length) {
    return <NotFound />;
  }

  return (
    <section>
      <Headline element="h1" className="welcome-text">
        Breeds
      </Headline>

      <div className="class-flex">
        {data.map((breed: Breed) => (
          <div key={breed.id} className="breed-card card">
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
        ))}
      </div>
    </section>
  );
}

export default BreedsPage;

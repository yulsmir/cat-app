import { useEffect, useState, useMemo } from 'react';
import { Breed } from '../../types/types';
import RandomCatImage from '../../components/RandomCatImage';
import Headline from '../../components/Headline/Headline';
import ErrorPage from '../ErrorPage';
import NotFound from '../NotFound';
import './BreedPage.css';
import '../ErrorPage';

// Function to fetch the data and memoize it -- for learning purposes
async function fetchData() {
  // TODO: TEST error
  // const response = await fetch('https://api.thecatapi.com/v1/breedsssss');

  const response = await fetch('https://api.thecatapi.com/v1/breeds');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
}

async function fetchBreedImages(breedId) {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch breed images');
  }
  const data = await response.json();
  return data;
}

function BreedsPage() {
  // Use useMemo to memoize the data fetching -- for learning purposes
  const memoizedData = useMemo(() => fetchData(), []);

  const [data, setData] = useState<Breed[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    memoizedData
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        console.error(error);
        setIsLoading(false);
      });
  }, [memoizedData]);

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
        BreedsPage
      </Headline>

      <div className="class-flex">
        {data.map((breed: Breed) => (
          <div key={breed.id} className="breed-card">
            <Headline element="h4" className="welcome-text">
              {breed.name}
            </Headline>

            {/* Dynamic data*/}
            {/* <ul>
              {Object.entries(breed).map(([key, value]: [string, string | number | object]) => (
                <li key={key}>
                  <strong>{key}:</strong> {JSON.stringify(value)}
                </li>
              ))}
            </ul> */}
            <div>
              <ul>
                <li>
                  <img
                    src="https://cdn2.thecatapi.com/images/oe.jpg"
                    className="randoom-cat-image"
                  />
                </li>
                <li>
                  <strong>Id:</strong>
                  <span>{breed.id}</span>
                </li>
                <li>
                  <a href={breed.wikipedia_url} target="_blank">
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

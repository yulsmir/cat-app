import React, { useEffect, useState, useMemo } from 'react';
import { Breed } from '../../types/types';
// import BreedCard from '../../components/BreedCard';
import Headline from '../../components/Headline/Headline';
import './BreedPage.css';
import '../ErrorPage';
import ErrorPage from '../ErrorPage';

// Function to fetch the data and memoize it
async function fetchData() {
  // TEST error
  const response = await fetch('https://api.thecatapi.com/v1/breedsssss');

  // const response = await fetch('https://api.thecatapi.com/v1/breeds');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
}

function BreedsPage() {
  // Use useMemo to memoize the data fetching
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
    return <h1>Meeeeeooowing catz ...</h1>;
  }

  if (isError) {
    // return <h1>Puuuurrror...</h1>;
    return <ErrorPage />;
  }

  if (!data?.length) {
    return <h1>No Catz found</h1>;
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

            <ul>
              {Object.entries(breed).map(([key, value]: [string, string | number | object]) => (
                <li key={key}>
                  <strong>{key}:</strong> {JSON.stringify(value)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BreedsPage;

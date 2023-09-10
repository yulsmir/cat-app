import React, { useEffect, useState } from 'react';
import Headline from '../../components/Headline/Headline';

function BreedsPage() {
  const [breeds, setBreeds] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds', {
          headers: {
            'x-api-key': import.meta.env.CAT_API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setBreeds(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchBreeds();
  }, []);

  return (
    <section>
      <Headline element="h3" className="welcome-text">
        BreedsPage
      </Headline>
      <div className="breed-wrapper">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          breeds.map((breed) => <div key={breed.id}>{breed.name}</div>)
        )}
      </div>
    </section>
  );
}

export default BreedsPage;

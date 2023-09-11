import { useEffect, useState } from 'react';
import Headline from '../../components/Headline/Headline';
import './BreedPage.css';

function BreedsPage() {
  const [breeds, setBreeds] = useState<any[]>([]); // Fixed
  const [error] = useState(null);
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
        // setError(error);
        setIsLoading(false);
      }
    }

    fetchBreeds();
  }, []);

  return (
    <section>
      <Headline element="h1" className="welcome-text">
        BreedsPage
      </Headline>
      {/* <div className="breed-wrapper">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          breeds.map((breed) => <div key={breed.id}>{breed.name}</div>)
        )}
      </div> */}

      {/* TODO: put each breed into a card */}
      <div className="breed-wrapper">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          breeds.map((breed) => (
            <div key={breed.id} className="breed-card">
              <Headline element="h4" className="welcome-text">
                {breed.name}
              </Headline>
              <p>{breed.id}</p>

              {/* <ul>
                {Object.entries(breed).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value.toString()}
                  </li>
                ))}
              </ul> */}
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default BreedsPage;

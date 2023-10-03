import { useFetch } from '../../hooks/useFetch';
import { Breed } from '../../types/types';
// import RandomCatImage from '../../components/RandomCatImage/RandomCatImage';
import BreedCard from '../../components/BreedCard';

import Headline from '../../components/Headline/Headline';

import './BreedPage.css';

function BreedsPage() {
  const { data, isLoading, isError } = useFetch<Breed[]>('https://api.thecatapi.com/v1/breeds');

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Damn...</h1>;
  }

  if (!data?.length) {
    return <h1>No Cats</h1>;
  }

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

      <BreedCard></BreedCard>
      <div className="class-flex">
        {data.map((breed: Breed) => (
          // <RandomCatImage showButton={false}>
          <div key={breed.id} className="breed-card">
            <Headline element="h4" className="welcome-text">
              {breed.name}
            </Headline>

            {/* <p>{breed.id}</p>
              <p>{breed.temperament}</p>

              <img src={breed.url} /> */}

            <ul>
              {Object.entries(breed).map(([key, value]: [string, string | number | object]) => (
                <li key={key}>
                  <strong>{key}:</strong> {JSON.stringify(value)}
                </li>
              ))}
              //{' '}
            </ul>
          </div>
          // </RandomCatImage>
        ))}
      </div>
    </section>
  );
}

export default BreedsPage;

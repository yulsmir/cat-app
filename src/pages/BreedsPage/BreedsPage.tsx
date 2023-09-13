import { useFetch } from '../../hooks/useFetch';
import Headline from '../../components/Headline/Headline';
import './BreedPage.css';
import { Breed } from '../../types/types';

function BreedsPage() {
  // const [breeds, setBreeds] = useState<any[]>([]); // Fixed
  // const [error] = useState(null);

  // useEffect(() => {
  //   async function fetchBreeds() {
  //     try {
  //       const response = await fetch('https://api.thecatapi.com/v1/breeds', {
  //         headers: {
  //           'x-api-key': import.meta.env.CAT_API_KEY,
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }

  //       const data = await response.json();
  //       setBreeds(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       // setError(error);
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchBreeds();
  // }, []);

  const { data, isLoading, isError } = useFetch<Breed[]>('https://api.thecatapi.com/v1/bree');

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
      <div className="breed-wrapper">
        {data.map((breed: Breed) => (
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
        ))}
      </div>
    </section>
  );
}

export default BreedsPage;

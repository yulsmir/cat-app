import { useEffect, useState } from 'react';
import './RandomCatImage.css';

function RandomCatImage() {
  const [catImageUrl, setCatImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRandomCatImage() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
          headers: {
            'x-api-key': import.meta.env.CAT_API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        const imageUrl = data[0]?.url || '';
        setCatImageUrl(imageUrl);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }

    fetchRandomCatImage();
  }, []);

  return (
    <picture className="random-cat-image">
      {isLoading ? (
        <p>Loading...</p>
      ) : catImageUrl ? (
        <img src={catImageUrl} alt="Random Cat" />
      ) : (
        <p>No cat image available</p>
      )}
    </picture>
  );
}

export default RandomCatImage;

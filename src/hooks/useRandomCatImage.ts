import { useEffect, useState, useCallback } from 'react';

function useRandomCatImage() {
  const [catImageUrl, setCatImageUrl] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomCatImage = useCallback(async () => {
    setIsLoading(true);

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
  }, []);

  useEffect(() => {
    fetchRandomCatImage();
  }, [fetchRandomCatImage]);

  return { catImageUrl, isLoading, fetchRandomCatImage };
}

export default useRandomCatImage;

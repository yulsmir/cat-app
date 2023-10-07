import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';

function useRandomCatImage() {
  const [catImageUrl, setCatImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { data: catImageData, isLoading: isCatImageDataLoading } = useFetch<{ url: string }>(
    'https://api.thecatapi.com/v1/images/search',
    {
      headers: {
        'x-api-key': import.meta.env.CAT_API_KEY,
      },
    },
  );

  useEffect(() => {
    if (!isCatImageDataLoading && catImageData && catImageData.length > 0) {
      setCatImageUrl(catImageData[0]?.url || '');
      setIsLoading(false);
    }
  }, [isCatImageDataLoading, catImageData]);

  return { catImageUrl, isLoading };
}

export default useRandomCatImage;

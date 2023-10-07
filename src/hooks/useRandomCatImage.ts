import { useEffect, useState } from 'react';

const useRandomCatImage = (breedId?: string) => {
  const [catImageUrl, setCatImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    let apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=1';

    if (breedId) {
      apiUrl += `&breed_ids=${breedId}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCatImageUrl(data[0].url);
        } else {
          setCatImageUrl(null);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [breedId]);

  const fetchRandomCatImage = () => {
    setCatImageUrl(null); // Clear the previous image URL
    setIsLoading(true);

    fetch('https://api.thecatapi.com/v1/images/search?limit=1')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCatImageUrl(data[0].url);
        } else {
          setCatImageUrl(null);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return { catImageUrl, isLoading, fetchRandomCatImage };
};

export default useRandomCatImage;

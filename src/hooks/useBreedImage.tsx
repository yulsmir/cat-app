import { useState, useEffect } from 'react';
import { Breed } from '../types/types';

function useBreedImage(breedId: Breed.id) {
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    const fetchBreedImage = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const imageUrl = data[0]?.url || '';
        setImageURL(imageUrl);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchBreedImage();
  }, [breedId]);

  return { imageURL, isLoading, error };
}

export default useBreedImage;

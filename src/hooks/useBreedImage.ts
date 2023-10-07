// useBreedImage.ts
import { useEffect, useState } from 'react';

interface BreedImageData {
  imageURL: string | null;
  isLoading: boolean;
  error: null | Error;
}

const useBreedImage = (breedId?: string): BreedImageData => {
  const [breedImageData, setBreedImageData] = useState<BreedImageData>({
    imageURL: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    setBreedImageData((prevData) => ({
      ...prevData,
      isLoading: true,
    }));

    if (breedId) {
      fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breedId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setBreedImageData({
              imageURL: data[0].url,
              isLoading: false,
              error: null,
            });
          } else {
            setBreedImageData({
              imageURL: null,
              isLoading: false,
              error: null,
            });
          }
        })
        .catch((error) => {
          setBreedImageData({
            imageURL: null,
            isLoading: false,
            error: error as Error,
          });
        });
    } else {
      // Handle the case when breedId is not provided
      setBreedImageData({
        imageURL: null,
        isLoading: false,
        error: null,
      });
    }
  }, [breedId]);

  return breedImageData;
};

export default useBreedImage;

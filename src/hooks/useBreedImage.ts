import { useFetch } from './useFetch'; // Import the useFetch hook

interface BreedImageData {
  imageURL: string | null;
  isLoading: boolean;
  error: null | Error;
}

const useBreedImage = async (breedId?: string): Promise<BreedImageData> => {
  const {
    data: imageData,
    isLoading,
    isError,
    error,
  } = useFetch<{ url: string }>(
    breedId ? `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breedId}` : '',
    );
  
  // Check if imageData is not null before accessing its properties
  const imageURL = imageData ? imageData.url : null;

  return {
    imageURL,
    isLoading,
    error: isError ? error : null,
  };
};

export default useBreedImage;

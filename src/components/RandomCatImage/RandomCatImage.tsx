import React, { useEffect } from 'react';
import './RandomCatImage.css';
import RandomCatButton from '../RandomCatButton/RandomCatButton';
import ErrorPage from '../../pages/ErrorPage';
import useRandomCatImage from './useRandomCatImage'; // Import the custom hook

interface RandomCatImageProps {
  showButton: boolean;
}

function RandomCatImage({ showButton }: RandomCatImageProps) {
  const { catImageUrl, isLoading, fetchRandomCatImage } = useRandomCatImage(); // Use the custom hook

  const regenerateCatImage = () => {
    fetchRandomCatImage();
  };

  return (
    <>
      <div className="card home">
        {isLoading ? (
          <p>Loading catzzzz...</p>
        ) : catImageUrl ? (
          <img src={catImageUrl} alt="Random Cat" className="random-cat-image" />
        ) : (
          <ErrorPage />
        )}
      </div>
      <div>{showButton && <RandomCatButton onClick={regenerateCatImage} />}</div>
    </>
  );
}

export default RandomCatImage;

import './RandomCatImage.css';
import RandomCatButton from '../RandomCatButton/RandomCatButton';
import ErrorPage from '../../pages/ErrorPage';
import useRandomCatImage from '../../hooks/useRandomCatImage';

interface RandomCatImageProps {
  showButton: boolean;
}

function RandomCatImage({ showButton }: RandomCatImageProps) {
  const { catImageUrl, isLoading, fetchRandomCatImage } = useRandomCatImage();

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

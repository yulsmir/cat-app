import { useEffect, useState, useMemo } from 'react';

import Headline from '../../components/Headline';

import './ImageSearchPage.css';

interface CatImage {
  url: string;
}

const ImageGrid = () => {
  const [images, setImages] = useState<CatImage[]>([]);

  useEffect(() => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=9`;
    const api_key = 'DEMO_API_KEY';

    fetch(url, {
      headers: {
        'x-api-key': api_key,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImages(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // Memoize the images array using useMemo
  const memoizedImages = useMemo(() => images, [images]);

  return (
    <section>
      <Headline element="h3" className="welcome-text">
        Images
      </Headline>
      <div className="class-flex">
        {memoizedImages.map((imageData, index) => (
          <div key={index} className="card">
            <img className="random-cat-image" src={imageData.url} alt={`Cat ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;

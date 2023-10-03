import { useEffect, useState } from 'react';
import './ImageSearchPage.css';

interface CatImage {
  url: string;
  // Add other properties you expect from the API response here
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

  return (
    <section>
      <div className="class-flex">
        {images.map((imageData, index) => (
          <div key={index} className="card">
            <img className="random-cat-image" src={imageData.url} alt={`Cat ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;

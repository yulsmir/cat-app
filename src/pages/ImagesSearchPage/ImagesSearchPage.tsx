import { useEffect, useState } from 'react';
import './ImageSearchPage.css';

const ImageGrid = () => {
  const [images, setImages] = useState([]);

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
    <div className="image-grid">
      {images.map((imageData, index) => (
        <div key={index} className="col col-lg">
          <img src={imageData.url} alt={`Cat ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

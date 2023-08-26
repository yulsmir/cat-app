import CatCard from './catCard';
import Headline from '../headline/headline';

export default function Gallery() {
  // GET DATA FROM CAT API
  // async function fetchRandomCatImages() {
  //   try {
  //     const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
  //     const data = await response.json();
  //     const imageUrls = data.map((cat) => cat.url);
  //     setCatImageUrls(imageUrls);
  //   } catch (error) {
  //     console.error('Error fetching cat images:', error);
  //   }
  // }

  // GENERATE CAT CARDS
  // const generateCatCards = count => {
  //   const catCards = [];
  //   for (let i = 0; i < count; i++) {
  //     catCards.push(<CatCard key={i} imageUrl={catImageUrls[i % catImageUrls.length]} />);
  //   }
  //   return catCards;
  // };

  return (
    <section>
      <Headline className="headline" element="h1">
        Amazing cats
      </Headline>
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
    </section>
  );
}

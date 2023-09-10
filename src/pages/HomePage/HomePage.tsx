import Headline from '../../components/Headline/Headline';
import RandomCatImage from '../../components/RandomCatImage/RandomCatImage';

function HomePage() {
  return (
    <section>
      <Headline element="h2" className="welcome-text">
        Welcome to my CatApp.
      </Headline>
      <Headline element="h3" className="welcome-text">
        Everyday is a Caturday.
      </Headline>
      <RandomCatImage />
    </section>
  );
}

export default HomePage;

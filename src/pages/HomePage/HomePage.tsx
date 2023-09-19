import Headline from '../../components/Headline/Headline';
import RandomCatImage from '../../components/RandomCatImage/RandomCatImage';
import Button from '../../components/Button/Button';

function HomePage() {
  return (
    <section>
      <div>
        <Headline element="h2" className="welcome-text">
          Welcome to my CatApp.
        </Headline>
        <Headline element="h3" className="welcome-text">
          Everyday is a Caturday.
        </Headline>
      </div>

      <RandomCatImage />
      <div>
        <Button>Random cat</Button>
      </div>
    </section>
  );
}

export default HomePage;

import Headline from '../../components/Headline/Headline';
import RandomCatImage from '../../components/RandomCatImage/RandomCatImage';

import './HomePage.css';

function HomePage() {
  return (
    <section>
      <div className="test">
        <Headline element="h2" className="welcome-text">
          Welcome to my CatApp.
        </Headline>
        <Headline element="h3" className="welcome-text">
          Everyday is a Caturday.
        </Headline>
      </div>

      <RandomCatImage showButton={true} />
    </section>
  );
}

export default HomePage;

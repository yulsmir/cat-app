import Headline from '../../components/Headline/Headline';

function HomePage() {
  return (
    <section>
      <Headline element="h2" className="welcome-text">
        Welcome to my CatApp.
      </Headline>
      <Headline element="h3" className="welcome-text">
        Because everyday is a Caturday.
      </Headline>
    </section>
  );
}

export default HomePage;

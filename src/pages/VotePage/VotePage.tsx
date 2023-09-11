import Headline from '../../components/Headline/Headline';
import RandomCatImage from '../../components/RandomCatImage/RandomCatImage';

function VotePage() {
  return (
    <section>
      <Headline element="h4" className="welcome-text">
        Vote for a cat
      </Headline>
      <RandomCatImage />
    </section>
  );
}

export default VotePage;

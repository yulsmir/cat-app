import Headline from '../../components/Headline/Headline';
import RandomCatImage from '../../components/RandomCatImage/RandomCatImage';
import Button from '../../components/Button/Button';
import Counter from '../../components/Counter/Counter';

function VotePage() {
  return (
    <section>
      <Headline element="h4" className="welcome-text">
        Vote for a cat
      </Headline>
      <RandomCatImage />
      <div id="vote-options" className="vote-options">
        <Counter>Vote up</Counter>
        <Counter>Vote down</Counter>
        <Button>History</Button>
      </div>
    </section>
  );
}

export default VotePage;

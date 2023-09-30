import Headline from '../../components/Headline/Headline';
import RandomCatImage from '../../components/RandomCatImage/RandomCatImage';
import Counter from '../../components/Counter/Counter';

function VotePage() {
  return (
    <section>
      <Headline element="h4" className="welcome-text">
        Vote for a cat
      </Headline>
      <RandomCatImage showButton={false} />
      <div id="vote-options" className="vote-options">
        <Counter>Vote up</Counter>
        <Counter>Vote down</Counter>
      </div>
    </section>
  );
}

export default VotePage;

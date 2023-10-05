import Headline from '../../components/Headline/Headline';
import RandomCatImage from '../../components/RandomCatImage/RandomCatImage';
import Counter from '../../components/Counter/Counter';

import './VotePage.css';

function VotePage() {
  return (
    <section>
      <Headline element="h4" className="welcome-text">
        Vote for a cat
      </Headline>
      {/* TODO: fix random cat button - rerender after vote */}
      <RandomCatImage showButton={true} />
      <div id="vote-options" className="vote-options">
        <Counter>Vote up</Counter>
        <Counter>Vote down</Counter>
      </div>
    </section>
  );
}

export default VotePage;

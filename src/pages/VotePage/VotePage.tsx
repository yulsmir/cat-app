import Headline from '../../components/Headline/Headline';
import RandomCatImage from '../../components/RandomCatImage/RandomCatImage';

function VotePage() {
  return (
    <section>
      <Headline element="h4" className="welcome-text">
        Vote for a cat
      </Headline>
      <RandomCatImage />
      <div id="vote-options" className="vote-options">
        <button onClick="vote(1)">Vote Up </button>
        <button onClick="vote(-1)">Vote Down </button>
        <button onClick="showHistoricVotes()">History </button>
      </div>
    </section>
  );
}

export default VotePage;

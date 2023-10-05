import Headline from '../../components/Headline';
import CatAnimation from '../../components/CatAnimation';
import AngryCat from '../../assets/aangry-cat.gif';

import './NotFound.css';

function NotFound() {
  return (
    <section>
      <div className="error-page">
        <Headline element="h2" className="error-text">
          Meeoooowps
        </Headline>
        <p>Catzzzzz not foud </p>
        <CatAnimation src={AngryCat} />
      </div>
    </section>
  );
}

export default NotFound;

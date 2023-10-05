import Headline from '../../components/Headline';
import CatAnimation from '../../components/CatAnimation';
import AngryCat from '../../assets/aangry-cat.gif';

import './ErrorPage.css';

function ErrorPage() {
  return (
    <section>
      <div className="error-page">
        <Headline element="h2" className="error-text">
          Meeoooowps
        </Headline>
        <p>Something went wrong. </p>
        <p>The page you are looking for seems to not be here.</p>
        <CatAnimation src={AngryCat} />
      </div>
    </section>
  );
}

export default ErrorPage;

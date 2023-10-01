import Headline from '../../components/Headline/Headline';
import '../ImagesSearchPage/ImageSearch.css'

function ImagesSearchPage() {
  return (
    <section>
      <Headline element="h3" className="welcome-text">
        Images Search Page
      </Headline>
      <div className='classflex'>
      <div className='card'>
       Cat Cute Images
      </div>
      <div className='card'>
       Cat Cute Images
      </div>
      <div className='card'>
       Cat Cute Images
      </div>
      </div>
    </section>
  );
}

export default ImagesSearchPage;

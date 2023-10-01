import { useState } from 'react';
// import catWalk from '../../assets/cat-walk.gif';
// import catWalk from '../../assets/pixel-cat.gif';
// import catWalk from '../../assets/aangry-cat.gif';
import catWalk from '../../assets/lazy-cat.gif';

import './CatWalk.css';

function CatWalk() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleAnimation = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="cat-animation-container">
      <img
        src={catWalk}
        alt="CatWalk"
        className={`cat-walk ${isFlipped ? 'flipped' : ''}`}
        onAnimationIteration={toggleAnimation}
      />
    </div>
  );
}

export default CatWalk;

import { useState } from 'react';
import catWalk from '../../assets/cat-walk.gif';
import './CatWalk.css'; // Make sure to adjust the import path to your CSS file

function CatWalk() {
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to toggle the animation state
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

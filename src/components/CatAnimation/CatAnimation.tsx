import { useState } from 'react';
import './CatAnimation.css';

interface CatAnimationProps {
  src: string;
}

function CatAnimation({ src }: CatAnimationProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleAnimation = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="cat-animation-container">
      <img
        src={src}
        alt="CatAnimation"
        className={`cat-walk ${isFlipped ? 'flipped' : ''}`}
        onAnimationIteration={toggleAnimation}
      />
    </div>
  );
}

export default CatAnimation;

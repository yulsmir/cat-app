import { ICatCard } from '../../types/catCard.types';
import Headline from '../headline/headline';
import './catCard.css';

interface CatCardItemProps {
  card: ICatCard;
  index: number;
}

export default function CatCardItem({ card, index }: CatCardItemProps) {
  return (
    <div className="card" key={index}>
      <Headline element="h3">{card.title}</Headline>
      <img src="" alt="Random Cat" />
    </div>
  );
}

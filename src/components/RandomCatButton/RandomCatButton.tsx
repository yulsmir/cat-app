import Button from '../../components/Button/Button';
import './RandomCatButton.css';

interface RandomCatButtonProps {
  onClick: () => void;
}

function RandomCatButton({ onClick }: RandomCatButtonProps) {
  return <Button onClick={onClick}>Random Cat</Button>;
}

export default RandomCatButton;

import { useRef } from 'react';
import Button from '../Button';

interface CounterProps {
  children: string;
}

export default function Counter({ children }: CounterProps) {
  const ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert(`You clicked ${children} ${ref.current} times!`);
  }

  return <Button onClick={handleClick}>{children}</Button>;
}

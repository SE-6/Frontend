import { GreetingProps } from '@/types';

const Greetings = ({ name }: GreetingProps) => {
  return (
    <div>
      <h2>Hello, {name.toUpperCase()!} </h2>
    </div>
  );
};

export default Greetings;

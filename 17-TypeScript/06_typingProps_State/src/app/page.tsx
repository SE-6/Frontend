import Greetings from '@/components/Greetings';

export default function Home() {
  return (
    <div>
      {/* <h2>Hello</h2> */}
      <Greetings name='Alice' />
      {/* <Greetings name={10} /> */}
    </div>
  );
}

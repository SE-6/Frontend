import Hello from '../components/Hello';

export function meta() {
  return [
    { title: 'welcome to react router v7' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

// loader() => load data (runs before the component renders)
// action() => handle form, send data more efficient way
// ErrorBoundary() => error screen specific to this route

export default function HelloPage() {
  return <Hello />;
}

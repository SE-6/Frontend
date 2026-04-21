import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the user directory</p>
      <Link to="/about">Learn more about this app</Link>
      <br />
      {/* <a href="/about">take me to about page</a> */}
    </div>
  );
}

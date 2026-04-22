export default function Navbar({ username }) {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Welcome back, {username}</li>
      </ul>
    </nav>
  );
}

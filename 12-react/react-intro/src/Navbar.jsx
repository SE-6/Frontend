import Searchbar from "./Searchbar";

function Navbar({ infoToPassDown }) {
  return (
    <div>
      <h1>I am the navbar</h1>
      <Searchbar infoToPassDown={infoToPassDown} />
    </div>
  );
}

export default Navbar;

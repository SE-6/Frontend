import { NavLink } from "react-router";

export default function Header() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#796FED" : "#4fc3f7",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <header style={{ backgroundColor: "#16213e", padding: "1rem 2rem" }}>
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
        <NavLink to="/users" style={linkStyle}>
          Users
        </NavLink>
      </nav>
    </header>
  );
}

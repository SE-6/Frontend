import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch: ", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading users...</p>;

  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "2rem" }}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            <p style={{ margin: "0.25rem 0" }}>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

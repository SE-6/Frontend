import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch: ", err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Loading user...</p>;
  if (!user) return <p>User not found :(</p>;

  return (
    <div>
      <Link to="/users">Back to users</Link>
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}

import { use } from 'react';

// prettier-ignore
const postsPromise = 
fetch('https://jsonplaceholder.typicode.com/posts')
.then((r) => r.json());

const PostsSuspense = () => {
  const posts = use(postsPromise);

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
};

export default PostsSuspense;

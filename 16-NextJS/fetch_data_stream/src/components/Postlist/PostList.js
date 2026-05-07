'use client';

import { use } from 'react';

const PostList = ({ postsPromise }) => {
  const posts = use(postsPromise);

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <ul>
            <li>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default PostList;

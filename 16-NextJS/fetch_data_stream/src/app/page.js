import PostList from '@/components/Postlist/PostList';
import PostListsSkeleton from '@/components/Postlist/PostListsSkeleton';
import { getPosts } from '@/data/posts';
import { Suspense } from 'react';

export default function Home() {
  const postsPromise = getPosts();

  return (
    <div>
      <h2>HOME</h2>
      <Suspense fallback={<PostListsSkeleton />}>
        <PostList postsPromise={postsPromise} />
      </Suspense>
    </div>
  );
}

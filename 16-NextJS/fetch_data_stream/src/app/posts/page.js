import { PostListsSkeleton, PostList } from '@/components/Postlist';
import { Suspense } from 'react';

export default function Posts() {
  const postsPromise = getPosts();

  return (
    <div>
      <h2>Latest Posts!</h2>
      <Suspense fallback={<PostListsSkeleton />}>
        <PostList postsPromise={postsPromise} />
      </Suspense>
    </div>
  );
}

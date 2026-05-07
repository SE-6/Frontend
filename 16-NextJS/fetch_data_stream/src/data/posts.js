export const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('failed to fetch posts');
  //   console.log(res);
  return res.json();
};

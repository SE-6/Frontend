import { registerUser } from './actions/users';

export default function Home() {
  // async function createPost(formData) {
  //   'use server';
  //   const title = formData.get('title');
  //   console.log('new post:', title);
  // }
  return (
    <div>
      <h2>HOME</h2>
      {/* <form action={createPost}>
        <input name='title' />
        <button type='submit'>Submit</button>
      </form> */}

      <form action={registerUser}>
        <input name='username' />
        <input name='email' />
        <input name='password' />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

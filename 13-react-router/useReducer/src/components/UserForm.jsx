import { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick={handleReset}>Start over</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default UserForm;

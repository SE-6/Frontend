'use client';

import { type ChangeEventHandler, useState } from 'react';

const NameForm = () => {
  const [name, setName] = useState(''); // obv => TS will infer

  // const handleChange = (event) => {
  //   [setName(event.target.value)];
  // };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Name Form</h2>
      <form>
        <label htmlFor='name'>Name: </label>
        <input
          id='name'
          type='text'
          value={name}
          //   onChange={(e) => setName(e.target.value)}
          onChange={handleChange}
        />
      </form>

      {name && <p>Hello, {name}</p>}
    </div>
  );
};

export default NameForm;

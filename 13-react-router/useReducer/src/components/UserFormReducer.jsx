import { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  submitted: false,
};

const reducer = (state, action) => {
  console.log('action:', action.type);

  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    case 'setPhone':
      return { ...state, phone: action.payload };
    case 'submit':
      return { ...state, submitted: true };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const UserFormReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  if (state.submitted) {
    return (
      <div>
        <p>Name: {state.name}</p>
        <p>Email: {state.email}</p>
        <p>Phone: {state.phone}</p>
        <button onClick={() => dispatch({ type: 'reset' })}>Start over</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'submit' });
      }}
    >
      <input
        value={state.name}
        onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
        placeholder='Name'
      />

      <input
        value={state.email}
        onChange={(e) =>
          dispatch({ type: 'setEmail', payload: e.target.value })
        }
        placeholder='Email'
      />

      <input
        value={state.phone}
        onChange={(e) =>
          dispatch({ type: 'setPhone', payload: e.target.value })
        }
        placeholder='Phone'
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default UserFormReducer;

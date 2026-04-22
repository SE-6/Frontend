import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  // let email = "my@email.com";
  const [username, setUsername] = useState("");
  const [bday, setBday] = useState("");
  const [terms, setTerms] = useState(false);

  // const changeEmail = () => {
  //   setEmail("other@mail.com");
  //   console.log(email);
  // };

  const submitForm = (e) => {
    e.preventDefault();
    const hashedPass = "hd23798hd8237h";
    const user = {
      username,
      bday,
      termsAndConditions: terms,
      password: hashedPass,
    };

    console.log(user);

    setUsername("");
    setBday("");
    setTerms(false);
  };

  useEffect(() => {
    console.log("I am fetching");
  }, [terms]);

  return (
    <>
      <Navbar username={username} />
      <h1>React Recap</h1>
      <form onSubmit={submitForm}>
        <label>
          username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          date of birth:{" "}
          <input
            type="date"
            name=""
            value={bday}
            onChange={(e) => setBday(e.target.value)}
          />
        </label>
        <br />
        <label>
          Terms and conditions
          <input
            type="checkbox"
            name=""
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;

import CharacterCard from "./CharacterCard";
import Navbar from "./Navbar";
import "./App.css";
import { useEffect, useState } from "react";
import { RotateLoader } from "react-spinners";

export default function App() {
  const [groupGold, setGroupGold] = useState(100);
  const [groupName, setGroupName] = useState("SE#06");
  const [isRecruiting, setIsRecruiting] = useState(true);
  // const [preferredClass, setPreferredClass] = useState("Mage");
  // const [minLevel, setMinLevel] = useState(1);
  const [newName, setNewName] = useState("");
  const [newClass, setNewClass] = useState("");
  const [newLevel, setNewLevel] = useState("");

  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [seconds, setSeconds] = useState(0);

  const [characters, setCharacters] = useState(() => {
    const saved = localStorage.getItem("characters");
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      {
        id: 1,
        name: "Moritz",
        charClass: "Mage",
        level: 12,
        health: 80,
        mana: 0,
      },
      {
        id: 2,
        name: "Conan",
        charClass: "Mage",
        level: 12,
        health: 90,
        mana: 50,
      },
    ];
  });

  const addGold = () => {
    setGroupGold(groupGold + 50); // when you're done executing this scope, re-render the whole component
    // console.log(groupGold);
  };

  const kickCharacter = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const levelUpCharacter = (id) => {
    setCharacters(
      characters.map((char) =>
        char.id === id ? { ...char, level: char.level + 1 } : char,
      ),
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newCharacter = {
      id: Date.now(),
      name: newName,
      charClass: newClass,
      level: newLevel,
      health: 100,
      mana: newClass === "mage" ? 50 : 0,
    };

    setCharacters([newCharacter, ...characters]);

    setNewName("");
    setNewClass("mage");
    setNewLevel(1);
  };

  // -------------- useEffect PATTERN 1 - No dependency array ----------------

  // useEffect(() => {
  //   console.log("App rendered");
  // });

  // ------------ useEffect PATTERN 2 - With empty dependency array -----------

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []); // Empty array -> execute ONCE on component mount

  // ------------ useEffect PATTERN 3 - Array with dependencies -----------

  // useEffect(() => {
  //   console.log("Gold amount changed! New value: ", groupGold);
  // }, [groupGold, characters.length]);

  // syncing with localStorage
  useEffect(() => {
    localStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch advice: ", error);
        setAdvice(
          "Sometime life just gives you lemons. SO go and make a lemonade",
        );
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {/* <Navbar infoToPassDown={defaultValue} /> */}

      <h1>{groupName}</h1>

      <h3>Page uptime: {seconds}</h3>

      <p style={{ display: "inline-block" }}>Group gold: {groupGold}</p>
      <button onClick={addGold}>Add gold</button>

      <br />
      <br />

      <label>
        Group Name:
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </label>
      {/* <button onClick={() => console.log("what did I type?")}>Log name</button> */}
      {/* <br />
      <br />

      <label>
        Minimum Level:
        <input
          type="number"
          value={minLevel}
          onChange={(e) => setMinLevel(Number(e.target.value))}
          min={1}
          max={99}
        />
      </label>
      <br />
      <br />
      <label>
        Open to beginners:
        <input
          type="checkbox"
          checked={isRecruiting}
          onChange={(e) => setIsRecruiting(e.target.checked)}
        />
      </label>
      <br />
      <br />
      <label>
        Preferred class:
        <select
          value={preferredClass}
          onChange={(e) => setPreferredClass(e.target.value)}
        >
          <option value="mage">Mage</option>
          <option value="warrior">Warrior</option>
        </select>
      </label> */}

      {/* <p>
        Looking for: {preferredClass}, level {minLevel}+
      </p> */}

      {isRecruiting ? <p>Open to new members!</p> : <p>Currently not hiring</p>}
      <br />

      <div>
        <h3>
          {isLoading ? (
            <RotateLoader
              color="#ffffff"
              loading={isLoading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            advice
          )}
        </h3>
      </div>

      <br />

      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>Recruit a new character</legend>
          <label>
            Name:
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Level:
            <input
              type="number"
              min={1}
              max={100}
              value={newLevel}
              onChange={(e) => setNewLevel(Number(e.target.value))}
            />
          </label>
          <br />
          <br />
          <label>
            Class:
            <select
              value={newClass}
              onChange={(e) => setNewClass(e.target.value)}
            >
              <option value="mage">Mage</option>
              <option value="warrior">Warrior</option>
            </select>
          </label>
        </fieldset>
        <button type="submit">Recruit</button>
      </form>

      {characters.map((char) => {
        return (
          <CharacterCard
            key={char.id}
            name={char.name}
            charClass={char.charClass}
            level={char.level}
            health={char.health}
            mana={char.mana}
            onKick={() => kickCharacter(char.id)}
            onLevelUp={() => levelUpCharacter(char.id)}
          />
        );
      })}
    </div>
  );
}

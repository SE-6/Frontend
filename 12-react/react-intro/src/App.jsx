import CharacterCard from "./CharacterCard";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const groupName = "SE#06";
  const memberCount = 7;
  const isRecruiting = false;

  const characters = [
    {
      id: 1,
      name: "Moritz",
      charClass: "Mage",
      level: 12,
      health: 80,
      mana: 50,
    },
    {
      id: 2,
      name: "Leila",
      charClass: "Warrior",
      level: 12,
      health: 100,
      mana: 0,
    },
    {
      id: 3,
      name: "Jochen",
      charClass: "Mage",
      level: 20,
      health: 85,
      mana: 90,
    },
    {
      id: 4,
      name: "Andrew",
      charClass: "Warrior",
      level: 20,
      health: 105,
      mana: 0,
    },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <h1>{groupName}</h1>
      <p>Members: {memberCount}</p>
      {isRecruiting ? <p>Open to new members!</p> : <p>Currently not hiring</p>}

      {characters.map((char) => {
        return (
          <CharacterCard
            key={char.id}
            name={char.name}
            charClass={char.charClass}
            level={char.level}
            health={char.health}
            mana={char.mana}
          />
        );
      })}
    </div>
  );
}

export default App;

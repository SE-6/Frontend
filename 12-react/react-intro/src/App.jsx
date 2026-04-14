import CharacterCard from "./CharacterCard";
import Navbar from "./Navbar";
import "./App.css";

export default function App() {
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
  const defaultValue = "ships";

  return (
    <div>
      <Navbar infoToPassDown={defaultValue} />
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

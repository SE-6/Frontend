function CharacterCard({ name, charClass, health, mana, level }) {
  const healthBarStyle = {
    width: `${health}%`,
    maxWidth: "100%",
    height: "8px",
    backgroundColor: health > 50 ? "#4caf50" : "#f44336",
    borderRadius: "4px",
  };

  // pattern 1: Early return, if there's no name, don't render anything
  if (!name) return null;

  const clickHandler = () => {
    console.log(`Selected: ${name} the ${charClass} (Level ${level})`);
  };

  const handleClick = (event) => {
    console.log(event.target);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h2>{name}</h2>

      {/* pattern 2: short-circuit: only render if condition is true */}
      {health === 0 && "☠️"}
      <span className={`badge badge-${charClass.toLowerCase()}`}>
        {charClass}
      </span>
      <p>Level: {level}</p>
      <p>HP: {health}</p>
      {/* pattern 3: ternary operator */}
      {mana > 0 ? <p>Mana: {mana}</p> : <p>No magic left</p>}
      <div style={healthBarStyle}></div>
    </div>
  );
}

export default CharacterCard;

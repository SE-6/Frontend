function CharacterCard({ name, charClass, health, mana, level }) {
  const healthBarStyle = {
    width: `${health}%`,
    maxWidth: "100%",
    height: "8px",
    backgroundColor: health > 50 ? "#4caf50" : "#f44336",
    borderRadius: "4px",
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <span className={`badge badge-${charClass.toLowerCase()}`}>
        {charClass}
      </span>
      <p>Level: {level}</p>
      <p>HP: {health}</p>
      <p>Mana: {mana}</p>
      <div style={healthBarStyle}></div>
    </div>
  );
}

export default CharacterCard;

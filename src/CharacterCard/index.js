const CharacterCard = (props) => {
  return (
    <div>
      <strong>Character</strong>
      <p>
        <strong>Name:</strong>
        {props.name}
      </p>
      <p>
        <strong>Gender:</strong>
        {props.gender}
      </p>
      <p>
        <strong>Hair Color:</strong>
        {props.hair_color}
      </p>
      <p>
        <strong>Height:</strong>
        {props.height}
      </p>
      <p>
        <strong>Birth Year:</strong>
        {props.birth_year}
      </p>
      -----------------------------
    </div>
  );
};

export default CharacterCard;

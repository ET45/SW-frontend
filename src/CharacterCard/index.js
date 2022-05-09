const CharacterCard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.gender}</p>
      <p>{props.hair_color}</p>
      <p>{props.height}</p>
      <p>{props.birth_year}</p>
    </div>
  );
};

export default CharacterCard;

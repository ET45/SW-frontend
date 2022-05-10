function GenderCard(props) {
  return (
    <div>
      <label htmlFor="gendersearch">Search by gender: </label>
      <input
        id="gendersearch"
        type="text"
        placeholder="Type a gender"
        onChange={props.liftGenderFilter}
      ></input>
    </div>
  );
}

export default GenderCard;

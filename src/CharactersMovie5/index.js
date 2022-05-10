import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "../CharacterCard";
import GenderCard from "../GenderCard";

const compareHeight = (character_a, character_b) => {
  return character_b.height - character_a.height;
};

const compareAge = (character_a, character_b) => {
  return character_b.birth_year - character_a.birth_year;
};

const CharactersMovie5 = () => {
  const [characterList, setCharacterList] = useState([]);
  const [sortBy, setSortBy] = useState("height");
  const [genderFilter, setGenderFilter] = useState([]);

  const changeSorting = (event) => {
    console.log("new sort order:", event.target.value);
    setSortBy(event.target.value);
  };
  const charactersSorted = [...characterList].sort(
    sortBy === "age" ? compareAge : compareHeight
  );
  const liftGenderFilter = (event) => {
    const gender = event.target.value;

    setGenderFilter(gender.toLowerCase());
  };

  const filterByGender = (charactersList, gender) => {
    const result = charactersList.filter((character) =>
      character.gender.toLowerCase().startsWith(gender)
    );
    return result;
  };
  useEffect(() => {
    async function charactersData() {
      const respond = await axios.get("http://localhost:5000/film/5");
      console.log("data", respond.data);
      setCharacterList(respond.data);
    }
    charactersData();
  }, []);

  return (
    <div>
      <GenderCard liftGenderFilter={liftGenderFilter} />
      <p>
        Sort order:{" "}
        <select onChange={changeSorting} value={sortBy}>
          <option value="height">Sort by Height</option>
          <option value="age">Sort by Age</option>
        </select>
      </p>
      <ul>
        {!characterList
          ? "loading"
          : filterByGender(charactersSorted, genderFilter).map((character) => (
              <CharacterCard
                name={character.name}
                gender={character.gender}
                hair_color={character.hair_color}
                height={character.height}
                birth_year={character.birth_year}
              />
            ))}
      </ul>
    </div>
  );
};

export default CharactersMovie5;

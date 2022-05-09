import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "../CharacterCard";

const compareHeight = (character_a, character_b) => {
  return character_b.height - character_a.height;
};

const compareAge = (character_a, character_b) => {
  return character_b.birth_year - character_a.birth_year;
};

const CharactersMovie1 = () => {
  const [characterList, setCharacterList] = useState([]);
  const [sortBy, setSortBy] = useState("height");

  const changeSorting = (event) => {
    console.log("new sort order:", event.target.value);
    setSortBy(event.target.value);
  };
  const charactersSorted = [...characterList].sort(
    sortBy === "age" ? compareAge : compareHeight
  );
  useEffect(() => {
    async function charactersData() {
      const respond = await axios.get("http://localhost:5000/film/1");
      console.log("data", respond.data);
      setCharacterList(respond.data);
    }
    charactersData();
  }, []);

  return (
    <div>
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
          : charactersSorted.map((character) => (
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

export default CharactersMovie1;

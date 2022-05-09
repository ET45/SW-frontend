import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "../CharacterCard";

const CharactersMovie5 = () => {
  const [characterList, setCharacterList] = useState([]);
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
      {!characterList
        ? "loading"
        : characterList
            .sort((a, b) => b.height - a.height)
            .map((character) => (
              <CharacterCard
                name={character.name}
                gender={character.gender}
                hair_color={character.hair_color}
                height={character.height}
                birth_year={character.birth_year}
              />
            ))}
    </div>
  );
};

export default CharactersMovie5;

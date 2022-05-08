import axios from "axios";
import { useState, useEffect } from "react";

const CharactersPage = () => {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    async function charactersData() {
      const respond = await axios.get("http://localhost:5000");
      console.log("data", respond.data);
      setCharacterList(respond.data);
    }
    charactersData();
  }, []);

  return <div>Works?</div>;
};

export default CharactersPage;

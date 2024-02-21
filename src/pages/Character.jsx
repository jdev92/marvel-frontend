import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const { characterId } = useParams();
  const [characterData, setCharacterData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log(characterData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Requête vers le backend pour récupérer la liste des personnages
        const response = await axios.get(
          `http://localhost:3100/character/${characterId}`
        );

        setCharacterData(response.data); // Mettre à jour des données
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [characterId]);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="characterDetails">
          <h2>{characterData.name}</h2>

          <img
            src={`${characterData.thumbnail.path}/portrait_uncanny.${characterData.thumbnail.extension}`}
            alt={characterData.name}
          />
          <p>{characterData.description}</p>
        </div>
      )}
    </div>
  );
};

export default Character;

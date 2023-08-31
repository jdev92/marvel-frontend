import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const [characterId] = useParams();
  const [character, setCharacter] = useState(null);

  console.log(characterId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Requête vers le backend pour récupérer la liste des personnages
        const response = await axios.get(
          `http://localhost:3000/characters/${characterId}`
        );
        setCharacter(response.data.results); // Mettre à jour des données
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [characterId]);
  return (
    <div>
      <article key={character._id}>
        <h2>{character.name}</h2>
        <p>{character.description}</p>

        <img
          src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
          alt={character.name}
        />
      </article>
    </div>
  );
};

export default Character;

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Requête vers le backend pour récupérer la liste des characters
        const response = await axios.get(`http://localhost:3000/characters`);
        // console.log(response.data);
        setData(response.data); // Mettre à jour des données
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search]); // Utiliser une dépendance vide pour exécuter cette requête une seule fois

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="container">
          <main>
            <div className="search">
              <input
                type="text"
                placeholder="Rechercher un character"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
            <div className="card-character-container">
              <h1>characters</h1>
              {data.map((character) => (
                <Link
                  className="card-character"
                  key={character._id}
                  to={`/character/${character._id}`}
                >
                  <h2>{character.name}</h2>
                  <img
                    src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                    alt={character.name}
                  />
                  <p>{character.description}</p>
                </Link>
              ))}
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Characters;

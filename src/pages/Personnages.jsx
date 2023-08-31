import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Personnages = () => {
  const [personnages, setPersonnages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Requête vers le backend pour récupérer la liste des personnages
        const response = await axios.get(`http://localhost:3000/characters`);
        setPersonnages(response.data); // Mettre à jour des données
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search]); // Utiliser une dépendance vide pour exécuter cette requête une seule fois

  return (
    <div className="container">
      <main>
        <div>
          <div className="search">
            <input
              type="text"
              placeholder="Rechercher un personnage"
              value={search}
              onChange={event => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <div className="card-character">
            <h1>Personnages</h1>
            {personnages.map(personnage => (
              <article key={personnage._id}>
                <h2>{personnage.name}</h2>
                <Link to={`/character/${personnage._id}`}>
                  <img
                    src={`${personnage.thumbnail.path}/portrait_uncanny	.${personnage.thumbnail.extension}`}
                    alt={personnage.name}
                  />
                </Link>
                <p>{personnage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Personnages;

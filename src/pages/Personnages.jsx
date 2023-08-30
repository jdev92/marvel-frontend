import { useState, useEffect } from "react";
import axios from "axios";

const Personnages = () => {
  const [personnages, setPersonnages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Requête vers le backend pour récupérer la liste des personnages
        const response = await axios.get("http://localhost:3000/personnages");
        setPersonnages(response.data); // Mettre à jour des données
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []); // Utiliser une dépendance vide pour exécuter cette requête une seule fois

  return (
    <div>
      <h1>Personnages</h1>
      {personnages.map(personnage => (
        <div key={personnage._id}>
          <h2>{personnage.name}</h2>
          <p>{personnage.description}</p>
          <img
            src={`${personnage.thumbnail.path}/portrait_uncanny.${personnage.thumbnail.extension}`}
            alt={personnage.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Personnages;

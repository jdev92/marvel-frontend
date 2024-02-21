import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const limitPerPage = 100;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `http://localhost:3100/characters?skip=${currentPage * limitPerPage}`
        );
        setCharacters(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1 >= 0 ? currentPage - 1 : 0);
  };

  return (
    <div className="body-characters">
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
            <h1>MARVEL CHARACTERS LIST</h1>
            <div className="card-character-container">
              {characters.map((character) => (
                <Link
                  className="card-character"
                  key={character._id}
                  to={`/character/${character._id}`}
                >
                  <h2>{character.name}</h2>
                  <img
                    src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`}
                    alt={character.name}
                  />
                </Link>
              ))}
            </div>
            <div>
              <button onClick={handlePrevPage}>Previous Page</button>
              <button onClick={handleNextPage}>Next Page</button>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Characters;

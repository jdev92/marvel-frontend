import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
        setComics(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Comics</h1>
          {comics.map((comic) => (
            <Link key={comic._id} to={`/comic/${comic._id}`}>
              <div>
                <h2>{comic.title}</h2>
                <p>{comic.description}</p>
                <img
                  src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
                  alt=""
                />
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Comics;

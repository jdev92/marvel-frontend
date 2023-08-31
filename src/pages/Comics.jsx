import { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
        setComics(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Comics</h1>
      {comics.map(comics => (
        <div key={comics._id}>
          <h2>{comics.title} </h2>
          <p>{comics.description} </p>
          <img
            src={`${comics.thumbnail.path}/portrait_uncanny.${comics.thumbnail.extension}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Comics;

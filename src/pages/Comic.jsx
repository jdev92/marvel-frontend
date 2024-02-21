import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comic = () => {
  const { comicId } = useParams();
  const [comicData, setComicData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3100/comic/${comicId}`
        );
        setComicData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [comicId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="comicDetails">
          <h2>{comicData.title}</h2>

          <img
            src={`${comicData.thumbnail.path}/portrait_uncanny.${comicData.thumbnail.extension}`}
            alt={comicData.title}
          />
          <p>{comicData.description}</p>
        </div>
      )}
    </div>
  );
};

export default Comic;

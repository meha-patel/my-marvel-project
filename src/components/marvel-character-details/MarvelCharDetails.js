import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharById } from "../../api/marvel-api";

const MarvelCharDetails = () => {
  const params = useParams();
  const [charDetails, setCharDetails] = useState({});

  useEffect(() => {
    getCharById(params.charId).then((resp) => {
      setCharDetails(resp);
    });
  }, [params.charId]);
  return (
    <div>
      <h2>Marvel Character Details</h2>
      <br />
      <br />
      <p>{charDetails}</p>
    </div>
  );
};

export default MarvelCharDetails;

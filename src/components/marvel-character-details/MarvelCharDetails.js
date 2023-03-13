import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { getCharById } from "../../api/marvel-api";
import CharDescription from "../common/CharDescription";

const MarvelCharDetails = () => {
  const params = useParams();
  const [charDetails, setCharDetails] = useState([]);
  useEffect(() => {
    getCharById(params.charId).then((resp) => {
      let data = resp;
      setCharDetails(data);
    });
  }, [params.charId]);
  console.log("charDetails:", charDetails);
  return (
    <div>
     <CharDescription charDesc={charDetails} />
    </div>
  );
};

export default MarvelCharDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharById } from "../../api/marvel-api";

const MarvelCharDetails = () => {
  const params = useParams();
  const [charDetails, setCharDetails] = useState({});

  useEffect(() => {
    function fetchList() {
      getCharById(params.charId).then((resp) => {
        console.log("resp:", resp);
        // dispatch({ type: "marvel-list", payload: { list: resp } });
        setCharDetails(resp);
      });
    }
    fetchList();
    // setIsLoading(true);
    // GetMarvelList().then((resp) => {
    //   setMarvelList(resp);
    //   setIsLoading(false);
    // });
  }, []);
  return (
    <div>
      <h2>Marvel Character Details</h2>
    </div>
  );
};

export default MarvelCharDetails;

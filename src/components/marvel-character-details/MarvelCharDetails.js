// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CharDescription from "../common/CharDescription";

const MarvelCharDetails = () => {
  const params = useParams();
  const characters = useSelector((state) => state?.marvelList);
  let resp = characters.marvelList.filter((data) => parseInt(params.charId) === parseInt(data.id));
  return (
    <div>
      <CharDescription charDesc={resp} />
    </div>
  );
};

export default MarvelCharDetails;

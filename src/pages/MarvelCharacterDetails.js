import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ExpandableDescriptionCard from "../components/common/ExpandableDescriptionCard";

const MarvelCharacterDetails = () => {
  const params = useParams();
  const characters = useSelector((state) => state?.marvels);
  let character = characters.characterList.filter(
    (data) => parseInt(params.charId) === parseInt(data.id)
  )[0];
  return (
    <div>
      <ExpandableDescriptionCard character={character} />
    </div>
  );
};

export default MarvelCharacterDetails;

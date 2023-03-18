import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ExpandableDescriptionCard from "../components/common/ExpandableDescriptionCard";

const MarvelCharacterDetails = () => {
  const params = useParams();
  const characters = useSelector((state) => state?.marvels);
  let resp = characters.characterList.filter(
    (data) => parseInt(params.charId) === parseInt(data.id)
  );
  return (
    <div>
      <ExpandableDescriptionCard charDesc={resp} />
    </div>
  );
};

export default MarvelCharacterDetails;

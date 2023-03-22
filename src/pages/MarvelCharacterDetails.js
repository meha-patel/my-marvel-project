import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ExpandableDescriptionCard from "../components/common/ExpandableDescriptionCard";
import { auth } from "../Firebase";

const MarvelCharacterDetails = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) navigate("/login");
  }, [user, loading, navigate]);
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

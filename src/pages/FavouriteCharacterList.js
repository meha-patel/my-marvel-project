import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageCardList from "../components/common/ImageCardList";
import { auth } from "../Firebase";

const FavouriteCharacterList = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) navigate("/login");
  }, [user, loading, navigate]);

  const characters = useSelector((state) => state?.marvels);
  let favList = characters.characterList.filter((e) => e.isFavourite === true);

  return (
    <div>
      <ImageCardList
        title={"Favourite Characters List"}
        list={favList}
        isLoading={false}
      />
    </div>
  );
};

export default FavouriteCharacterList;

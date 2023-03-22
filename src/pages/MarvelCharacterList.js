import React, { useEffect, useState } from "react";
import { getList } from "../api/marvel-api";
import { useDispatch, useSelector } from "react-redux";
import { getMarvels } from "../store/actions/marvel-actions";
import ImageCardList from "../components/common/ImageCardList";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const MarvelCharacterList = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) navigate("/login");
  }, [user, loading, navigate]);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const marverList = useSelector((state) => state.marvels);

  useEffect(() => {
    if (marverList.characterList?.length <= 0) {
      setIsLoading(true);
      getList().then((resp) => {
        dispatch(getMarvels(resp));
        setIsLoading(false);
      });
    }
  }, [marverList, dispatch]);

  return (
    <div>
      <ImageCardList
        title={"Marvel Characters List"}
        list={marverList.characterList}
        isLoading={isLoading}
      />
    </div>
  );
};

export default MarvelCharacterList;

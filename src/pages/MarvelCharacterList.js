import * as React from "react";
import {useEffect, useState} from "react";
import {getList} from "../api/marvel-api";
import {useDispatch, useSelector} from "react-redux";
import {getMarvels} from "../store/actions/marvel-actions";
import ImageCard from "../components/common/ImageCard";
import ImageCardList from "../components/common/ImageCardList";

const MarvelCharacterList = () => {
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

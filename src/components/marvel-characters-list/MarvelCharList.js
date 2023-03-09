import * as React from "react";
import { useEffect, useState } from "react";
import { getList } from "../../api/marvel-api";
import { useDispatch, useSelector } from "react-redux";
import { getMarvels } from "../../store/actions/marvel-actions";
import CharImageList from "../common/CharImageList";

const MarvelCharList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const marverlistFromStore = useSelector((state) => state.marvelList);

  useEffect(() => {
    if (marverlistFromStore.marvelList?.length <= 0) {
      setIsLoading(true);
      getList().then((resp) => {
        dispatch(getMarvels(resp));
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <div>
      <CharImageList
        title={"Marvel Characters List"}
        marvelList={marverlistFromStore.marvelList}
        isLoading={isLoading}
      />
    </div>
  );
};

export default MarvelCharList;

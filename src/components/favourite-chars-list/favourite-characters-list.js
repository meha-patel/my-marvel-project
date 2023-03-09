import * as React from "react";
import { useSelector } from "react-redux";
import CharImageList from "../common/CharImageList";

const FavCharsList = () => {
  const characters = useSelector((state) => state?.marvelList);
  let favList = characters.marvelList.filter((e) => e.isFavourite === true);

  return (
    <div>
      <CharImageList
        title={"Favourite Characters List"}
        marvelList={favList}
        isLoading={false}
      />
    </div>
  );
};

export default FavCharsList;

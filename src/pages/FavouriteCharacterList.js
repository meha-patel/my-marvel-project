import * as React from "react";
import {useSelector} from "react-redux";
import ImageCardList from "../components/common/ImageCardList";

const FavouriteCharacterList = () => {
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

import React from "react";

import ProfileStyle from "../Styles/profile.module.scss";
import dogGif2 from "../pictures/dogGif2.gif"

function FavoritePosts() {
  return (
    <>
      <div className={ProfileStyle["Profile-favorite-posts"]}>
        <h2>Coming soon!</h2>
        <img src={dogGif2} alt="Dog gif" />
      </div>
    </>
  );
}

export default FavoritePosts;

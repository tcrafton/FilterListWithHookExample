import React from "react";
import Book from "./Book";

const BookFavoriteButton = ({ isFavorite, onFavoriteToggele }) => {
  return (
    <div
      className={isFavorite ? "heartredbutton" : "heartdarkbutton"}
      onClick={onFavoriteToggele}
    ></div>
  );
};

export default BookFavoriteButton;

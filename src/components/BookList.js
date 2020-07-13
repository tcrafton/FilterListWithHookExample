import React, { useState } from "react";
import Book from "./Book";
import SearchBar from "./SearchBar";

import BookDB from "../bookDB";

const BookList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container-fluid">
      <div className="row">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <div className="row">
        {BookDB.filter((rec) => {
          const targetString = `${rec.title}`.toLocaleLowerCase();
          return searchQuery.length === 0
            ? true
            : targetString.includes(searchQuery.toLocaleLowerCase());
        }).map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;

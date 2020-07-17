import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import SearchBar from "./SearchBar";

const BookList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);

  const toggleBookFavorite = (bookRec) => {
    return {
      ...bookRec,
      isFavorite: !bookRec.isFavorite,
    };
  };

  const onFavoriteToggleHandler = (bookRec) => {
    const toggledBookRec = toggleBookFavorite(bookRec);
    const bookIndex = books.map((book) => book.id).indexOf(bookRec.id);

    setBooks([
      ...books.slice(0, bookIndex),
      toggledBookRec,
      ...books.slice(bookIndex + 1),
    ]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <div className="row">
        {books
          .filter((rec) => {
            const targetString = `${rec.title}`.toLocaleLowerCase();
            return searchQuery.length === 0
              ? true
              : targetString.includes(searchQuery.toLocaleLowerCase());
          })
          .map((book) => (
            <Book
              key={book.id}
              {...book}
              onFavoriteToggle={() => onFavoriteToggleHandler(book)}
            />
          ))}
      </div>
    </div>
  );
};

export default BookList;

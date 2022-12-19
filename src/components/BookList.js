import React, { useContext } from "react";

import { BooksContext } from "../context/contextBooks";

import "../styles/index.css";

import BookItem from "./BookItem";

const BookList = () => {
  const { numberOfBooks } = useContext(BooksContext);

  return (
    <div className="book-list">
      {numberOfBooks.map((book) => (
        <div key={book.id}>
          <BookItem book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;

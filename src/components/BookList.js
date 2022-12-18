import React from "react";

import "../styles/index.css";

import BookItem from "./BookItem";

const BookList = ({ numberOfBooks }) => {
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

import React from "react";

import "../styles/index.css";

import BookItem from "./BookItem";

const BookList = ({ numberOfBooks, deleteBookById }) => {
  return (
    <div className="book-list">
      {numberOfBooks.map((book) => (
        <div key={book.id}>
          <BookItem deleteBookById={deleteBookById} book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;

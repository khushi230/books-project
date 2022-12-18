import React, { useState } from "react";

import BookList from "./BookList";
import CreateBookForm from "./CreateBookForm";

const Books = () => {
  const [numberOfBooks, setNumberOfBooks] = useState([]);

  const createBook = (title) => {
    const bookToBeAdded = {
      title: title,
      id: Math.random() * 9999,
    };
    const updatedNumberOfBooks = [bookToBeAdded, ...numberOfBooks];
    setNumberOfBooks(updatedNumberOfBooks);
  };

  const deleteBookById = (bookId) => {
    const updatedNumberOfBooks = numberOfBooks.filter(
      (book) => bookId !== book.id
    );
    setNumberOfBooks(updatedNumberOfBooks);
  };

  const editBookById = (bookId, changedTitle) => {
    const updatedNumberOfBooks = [...numberOfBooks];
    updatedNumberOfBooks.forEach((book) => {
      if (book.id === bookId) {
        book.title = changedTitle;
      }
    });
  };

  return (
    <div>
      <BookList
        editBookById={editBookById}
        deleteBookById={deleteBookById}
        numberOfBooks={numberOfBooks}
      />
      <CreateBookForm createBook={createBook} />
    </div>
  );
};

export default Books;

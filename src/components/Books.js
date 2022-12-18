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

  return (
    <div>
      <BookList deleteBookById={deleteBookById} numberOfBooks={numberOfBooks} />
      <CreateBookForm createBook={createBook} />
    </div>
  );
};

export default Books;

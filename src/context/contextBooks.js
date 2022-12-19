import React, { createContext, useState } from "react";

const BooksContext = createContext();

const Provider = ({ children }) => {
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
  const valueToShare = {
    createBook,
    deleteBookById,
    editBookById,
    numberOfBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider, BooksContext };

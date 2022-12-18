import React from "react";

import "../styles/index.css";

const BookItem = ({ book, deleteBookById }) => {
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  return (
    <div className="book-show">
      <img alt="Books" src={`https://picsum.photos/seed//${book.id}300/200`} />
      {book.title}
      <div className="actions">
        <button className="edit"></button>
        <button onClick={handleDeleteClick} className="delete"></button>
      </div>
    </div>
  );
};

export default BookItem;

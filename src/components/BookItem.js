import React, { useState, useContext } from "react";

import { BooksContext } from "../context/contextBooks";

import "../styles/index.css";

const BookItem = ({ book }) => {
  const { deleteBookById, editBookById } = useContext(BooksContext);

  const [showEditForm, setShowEditForm] = useState(false);
  const [changedTitle, setChangedTitle] = useState(book.title);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleChange = (event) => {
    setChangedTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, changedTitle);
    setShowEditForm(false);
  };

  return (
    <div className="book-show">
      <img alt="Books" src={`https://picsum.photos/seed//${book.id}300/200`} />

      {showEditForm ? (
        <form onSubmit={handleSubmit} className="book-edit">
          <label>Title</label>
          <input
            value={changedTitle}
            onChange={handleChange}
            className="input"
            type="text"
          />
          <button type="submit" className="button is-primary">
            Save
          </button>
        </form>
      ) : (
        <>{book.title}</>
      )}
      <div className="actions">
        <button onClick={handleEditClick} className="edit"></button>
        <button onClick={handleDeleteClick} className="delete"></button>
      </div>
    </div>
  );
};

export default BookItem;

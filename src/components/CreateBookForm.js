import React, { useState, useContext } from "react";

import { BooksContext } from "../context/contextBooks";

import "../styles/index.css";

const CreateBookForm = () => {
  const { createBook } = useContext(BooksContext);

  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a book!</h3>
        <input
          value={title}
          className="input"
          onChange={handleChange}
          type="text"
        />
        <button type="submit" className="button">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBookForm;

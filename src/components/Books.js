import React from "react";

import BookList from "./BookList";
import CreateBookForm from "./CreateBookForm";

const Books = () => {
  return (
    <div>
      <BookList />
      <CreateBookForm />
    </div>
  );
};

export default Books;

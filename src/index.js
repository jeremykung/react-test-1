import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";
import EventExample from "./EventExample";

const BookList = () => {
  return (
    <>
      <h1>Book List</h1>
      <section className="booklist">
        {/* <EventExample /> */}
        {books.map((book, index) => {
          console.log("book:", book);
          console.log("index:", index);
          return <Book book={book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

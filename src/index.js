import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const title =
    "The Model Thinker: What You Need to Know to Make Data Work for You";
  const author = "Scott E. Page";
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1538512393i/39088592.jpg" />
      <h2>{title}</h2>
      <p>{author}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

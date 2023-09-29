import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    id: 1,
    title: "The Model Thinker: What You Need to Know to Make Data Work for You",
    author: "Scott E. Page",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1538512393i/39088592.jpg",
  },
  {
    id: 2,
    title: "Think Small: The Surprisingly Simple Ways to Reach Big Goals",
    author: "Owain Service, Rory Gallagher",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490880748i/34735779.jpg",
  },
  {
    id: 3,
    title:
      "The Things You Can See Only When You Slow Down: How to Be Calm in a Busy World",
    author: "Haemin Sunim, Yeongcheol Lee",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579340833i/30780006.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  function handleButtonClick() {
    console.log("button clicked!");
  }
  function handleFormSubmission(event) {
    event.preventDefault();
    console.log("form submitted");
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Form</h2>
        <input
          type="text"
          name="example"
          onChange={(event) =>
            console.log("handle form input", event.target.value)
          }
          style={{ margin: "1rem 0" }}
        />
        <button onClick={handleButtonClick} type="button">
          click
        </button>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { book, children } = props;
  console.log("props", props);
  function logTitle() {
    console.log(book.title);
  }
  return (
    <article className="book">
      <img src={book.img} />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button onClick={logTitle}>display title</button>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

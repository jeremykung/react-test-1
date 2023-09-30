const Book = (props) => {
  const { book, number, children } = props;
  console.log("book number:", number);
  console.log("props", props);
  return (
    <article className="book">
      <img src={book.img} />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <span className="number">{`#${number + 1}`}</span>
      {children}
    </article>
  );
};

export default Book;

import React, { useState } from "react";
import "./Library.css";

function Library() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const addBook = () => {
    if (!title || !author) return;
    setBooks([...books, { id: Date.now(), title, author }]);
    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
  };

  const filteredBooks = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <div className="top-box">
        <input
          placeholder="Search books..."
          onChange={e => setSearch(e.target.value)}
        />

        <div className="row">
          <input
            placeholder="Book Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <input
            placeholder="Author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />

          <button className="add-btn" onClick={addBook}>
            Add Book
          </button>
        </div>
      </div>

      {filteredBooks.map(book => (
        <div className="book-card" key={book.id}>
          <div>
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeBook(book.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Library;

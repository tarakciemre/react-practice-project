import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css'
const books = [
  {
    id: 1,
    img: 
      'https://kbimages1-a.akamaihd.net/52c1eab8-f621-4f33-86e2-92f568001482/353/569/90/False/man-s-search-for-meaning.jpg',
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
  },
  {
    id: 2,
    img: 
      'https://kbimages1-a.akamaihd.net/c9472126-7f96-402d-ba57-5ba4c0f4b238/353/569/90/False/nineteen-eighty-four-1984-george.jpg',
    title: "1984",
    author: "George Orwell",
  },
  {
    id: 3,
    img: 
      'https://kbimages1-a.akamaihd.net/c9472126-7f96-402d-ba57-5ba4c0f4b238/353/569/90/False/nineteen-eighty-four-1984-george.jpg',
    title: "Book Title",
    author: "Emre Tarakcı",
  },
];

// since this has a capital function name, React knows this is a component
function Booklist() {
  return  (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const {img, title, author, children} = props;
  return (
    <article className='book'>
      <img src={img} alt="" width="100" height="100"></img> 
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
}

ReactDom.render(<Booklist />, document.getElementById('root'));
import React from 'react'

//css
import  './book.css';

export default function Book() {
  return (
    <section className='book'>
      <BookList />
      <BookList />
      <BookList />
      <BookList />
      <BookList />
      <BookList />
    </section>
  )
}

const BookList = () => {
  return(
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
}
const Image = () => <img src="https://images-eu.ssl-images-amazon.com/
images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg" alt="bookImage"/>

const Title = () => <h1><a href=" ">The Alchemist</a></h1>

const Author = () => <h2>Paulo Coelho</h2>
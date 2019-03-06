import React from 'react';
import './semantic-dist/semantic.css'
import {getBooks} from './api/get-books'
//import Seed from './seed'

class BookList extends React.Component {
  state = {books:[]}

  componentDidMount(){
    getBooks((books)=>{
      console.log(books)
      this.setState({books:books.book_list})
    })
  }
  handleBookUpVote = (bookId)=>{
      console.log(bookId + " upvoted ")
      const updatedBooks = this.state.books.map((book)=>{
            if (book.id === bookId){
              return Object.assign({},book,{votes:book.votes + 1})
            }
            else {
              return book;
            }  
      })
      this.setState({books:updatedBooks})
  };
  render() {
    const books = this.state.books.sort((a,b)=>(
        b.votes - a.votes
    ));
    const BookComponent = books.map((book)=>(        
      <Book 
        bookImageUrl={book.BookImageUrl}
        id={book._id}
        title={book.title}
        author={book.author.name}
        description={book.summary}
        votes={book.votes}
        onVote={this.handleBookUpVote}
        />))
    return (
      <div className='ui unstackable items'>
          {BookComponent}
      </div>
    );
  }
}

class Book extends React.Component {
  handleUpVote = ()=>{
    this.props.onVote(this.props.id)   
  }

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img className='ui small image' src={this.props.bookImageUrl}/>
        </div>
        <div className="middle aligned content">
          <a className="header">{this.props.title}</a>
          <a onClick={this.handleUpVote}>
            <i className='large caret up icon' />
          </a>
          {this.props.votes}
          <div className="Meta">
            <a>{this.props.author}</a>
          </div>
          <div className="description">
            <p>{this.props.description}</p> 
          </div>
        </div>
      </div>
    );
  }
}



export default BookList;

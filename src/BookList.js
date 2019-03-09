import React from 'react';
import './semantic-dist/semantic.css'

class BookList extends React.Component {

  handleBookUpVote = (bookId)=>{
      this.props.handleVote(bookId)
  };
  render() {
    const books = this.props.books.sort((a,b)=>(
        b.votes - a.votes
    ));
    const BookComponent = books.map((book)=>(        
      <Book key = {book._id}
        bookImageUrl="images/book-covers/my-book.jpg"
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
          <p className="header">{this.props.title}</p>
          <a onClick={this.handleUpVote}>
            <i className='large caret up icon' />
          </a>
          {this.props.votes}
          <div className="Meta">
            <a href="/authors">{this.props.author}</a>
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

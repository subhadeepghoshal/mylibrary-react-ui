import React from 'react';
import './semantic-dist/semantic.css'
import BookList from './BookList'
import BookForm from './BookForm'
import {getAuthors} from './api/get-authors'
import {addBook} from './api/add-book'
import {getBooks} from './api/get-books'
import {deleteBook} from './api/delete-book'


class BookListPage extends React.Component {
    state = {books:[],authors:[]}

    componentDidMount(){
      getBooks((books)=>{
        console.log(books)
        this.setState({books:books.book_list})
      })

      getAuthors((authors)=>{
        console.log(authors)
        this.setState({authors:authors.author_list})
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
    
    createBook = (book) => {
        console.log(book)
        addBook(book);
        this.setState({
          books: this.state.books.concat(book),
        });
    };

    deleteBook = (book) => {
        console.log(book)
        deleteBook(book.id);
        var array = [...this.state.books]; // make a separate copy of the array
        var index = array.indexOf(book.id)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({books: array});
        }   
    };

    render(){
        return (
            <div className = "ui three column centered grid">
                <TogglableBookForm 
                    isOpen="False"
                    createBook={this.createBook}
                    authors={this.state.authors}
                />
                <BookList 
                    books={this.state.books}
                    handleVote={this.handleBookUpVote}
                    deleteBook ={this.deleteBook}
                />
            </div>
        );
    }
}

class TogglableBookForm extends React.Component {
    state = {
        isOpen: false,
    };
    componentDidMount(){
    }

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };


    handleFormClose = () => {
        this.setState({ isOpen: false });
    };
    
    handleCreateFormSubmit = (book) => {
        this.props.createBook(book);
        this.handleFormClose();
    };

    addBook = (book) => {
        this.props.createBook(book)
    };   

    render(){
        if (this.state.isOpen){
            return ( <BookForm
                onFormSubmit={this.handleCreateFormSubmit}
                onFormClose={this.handleFormClose}
                authors={this.props.authors} 
                book={{}}
                createBook ={this.addBook}
                />)
        } else {
            return (<div className='ui basic content center aligned segment'>
                <button className='ui basic button icon' onClick={this.handleFormOpen}>
                    <i className='plus icon' />
                </button>
            </div> )
        }
    }
}

export default BookListPage
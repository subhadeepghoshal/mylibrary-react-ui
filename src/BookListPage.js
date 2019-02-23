import React, { Component } from 'react';
import './semantic-dist/semantic.css'
import BookList from './BookList'
import BookForm from './BookForm'

class BookListPage extends React.Component {
    render(){
        return (
            <div className = "ui three column centered grid">
                <TogglableBookForm isOpen="false"/>
                <BookList/>
            </div>
        );
    }
}

class TogglableBookForm extends React.Component {
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };


    handleFormClose = () => {
        this.setState({ isOpen: false });
    };

    render(){
        if (this.state.isOpen){
            return ( <BookForm
                onFormSubmit={this.handleFormSubmit}
                onFormClose={this.handleFormClose}
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
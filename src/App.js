import React from 'react';
import './App.css';
import './semantic-dist/semantic.css'
import BookListPage from './BookListPage'

class App extends React.Component {
  render() {
    return (
      <div className="main ui text container">
          <h1 className="ui dividing centered header">My Books</h1>
          <BookListPage />
      </div>
    );
  }
}

export default App;

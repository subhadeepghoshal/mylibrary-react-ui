import React from 'react';
import './semantic-dist/semantic.css'


class BookForm extends React.Component {
    state = {
      title: this.props.book.title || '',
      author: this.props.book.author || this.props.authors[0],
      summary: this.props.book.summary||'',
      genre:this.props.book.genre
    };
    
    handleTitleChange = (e) => {
      this.setState({ title: e.target.value });
    };
    handleAuthorChange = (e) => {
      console.log(e.target.value)
      this.setState({ authorId: e.target.value });
    };
    handleDescChange = (e) => {
      this.setState({ summary: e.target.value });
    };

    handleSubmit = () => {
      this.props.onFormSubmit({
        title: this.state.title,
        author: this.state.authorId||this.state.author.id,
        summary: this.state.summary,
        genre:"5c8392d21f15f24f917bd751",
        isbn:"999",
        votes:0
      });
    };

    render() {
      const authorLOV = this.props.authors.map((author)=>(
        <option key={author.id} value={author.id}>{author.name}</option>
      ))
      const submitText = this.props.title ? 'Update' : 'Create';
      return (
        <div className='ui centered card'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <label>Title</label>
                <input type='text'
                       value={this.state.title}
                       onChange={this.handleTitleChange}
                />

              </div>
              <div className='field'>
                <label>Author</label>
                <select value={this.state.author} 
                        onChange={this.handleAuthorChange}>
                  {authorLOV}
                </select>
              </div>
              <div className='field'>
                <label>Description</label>
                <input type='text' 
                       value={this.state.summary} 
                       onChange={this.handleDescChange}
                />
              </div>
              <div className='ui two bottom attached buttons'>
                <button className='ui basic blue button'
                        onClick={this.handleSubmit} 
                >
                  {submitText}
                </button>
                <button className='ui basic red button' onClick={this.props.onFormClose}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default BookForm
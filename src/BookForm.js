import React, { Component } from 'react';
import './semantic-dist/semantic.css'

class BookForm extends React.Component {
    render() {
      const submitText = this.props.title ? 'Update' : 'Create';
      return (
        <div className='ui centered card'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <label>Title</label>
                <input type='text' defaultValue={this.props.title} />
              </div>
              <div className='field'>
                <label>Author</label>
                <input type='text' defaultValue={this.props.author} />
              </div>
              <div className='field'>
                <label>Description</label>
                <input type='text' defaultValue={this.props.description} />
              </div>
              <div className='ui two bottom attached buttons'>
                <button className='ui basic blue button'>
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
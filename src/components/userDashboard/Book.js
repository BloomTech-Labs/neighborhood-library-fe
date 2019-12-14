import React from 'react';
import Axios from 'axios';
// require('dotenv').config({ path: '../../' });

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null
    }
  }

  componentWillMount = async () => {
    await Axios
      .get(`https://www.googleapis.com/books/v1/volumes/${this.props.book.google_book_id}`)
      .then(res => {
        console.log(res.data)
        this.setState({ info: res.data })
      })
      .catch(err => console.log(err.body));
  }

  render() {
    if (this.state.info == null) {
      return (
        <p>Loading book...</p>
      )
    } else {
      return (
        <div className='bookCard'>
          <img
            className='coverArt'
            alt='Cover Art'
            src={this.state.info.volumeInfo.imageLinks !== undefined ? this.state.info.volumeInfo.imageLinks.thumbnail : ''}
          />
          <h2 className='bookTitle'>{this.state.info.volumeInfo.title}</h2>
          <h4 className='author'>{this.state.info.volumeInfo.authors ? this.state.info.volumeInfo.authors[0] : 'N/A' }</h4>
          <p className='bookSummary'>{this.state.info.volumeInfo.publishedDate.split('-')[0]}</p>
          <a href={this.props.toLink}>Learn More</a>
        </div>
      )
    }
  }
}

export default Book;
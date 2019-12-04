import React, { Component } from 'react'
import './books.css'
import Search from './SearchComponent.js'
import axios from 'axios'
import BookList from './BookList.js'
class Books extends Component {
  constructor(props) {
    super(props);
      this.state = {
        books: [],
        searchInput: ''
      }

  }
  handleInput = e => {
    e.preventDefault()
    // console.log(`You searched for ${this.state.searchInput}`)
    this.setState({
      searchInput: e.target.value
    })
  }

  handleSearch = e => {
    e.preventDefault()
    // console.log(this.state.searchInput)
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`)
      .then(data => {
        console.log(data)
        if(data.data === undefined || data.data.totalItems === 0) {
          alert('No books found')
          return
        } else{
            this.setState({
              books: [...data.data.items]
            })
        }
      })
      .catch(err => console.log(err))
  }
  addBookToVivlio = () => {
    console.log("we'll see")
  }
  render() {
    return (
      <div>
        <Search
          handleInput={this.handleInput} handleSearch={this.handleSearch}
          searchInput={this.searchInput}/>
        <BookList books={this.state.books} addBookToVivlio={this.addBookToVivlio}/>
      </div>
    )
  }
}

export default Books


// https://www.googleapis.com/books/v1/volumes?q=search+terms

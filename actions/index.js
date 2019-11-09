import axios from 'axios';

//action type declarations for googleBooksAPI call
export const START_BOOK_FETCH = 'START_BOOK_FETCH';
export const BOOK_FETCH_SUCCESS = 'BOOK_FETCH_SUCCESS';
export const BOOK_FETCH_FAILURE = 'BOOK_FETCH_FAILURE';
//action type declarations for posting book to users collection
export const START_BOOK_COLLECTION_POST = 'START_BOOK_COLLECTION_POST';
export const BOOK_COLLECTION_POST_SUCCESS = 'BOOK_COLLECTION_POST_SUCCESS';
export const BOOK_COLLECTION_POST_FAILURE = 'BOOK_COLLECTION_POST_FAILURE';
//action type declarations for posting to users wishlist
export const START_BOOK_WISHLIST_POST = 'START_BOOK_WISHLIST_POST';
export const BOOK_WISHLIST_POST_SUCCESS = 'BOOK_WISHLIST_POST_SUCCESS';
export const BOOK_WISHLIST_POST_FAILURE = 'BOOK_WISHLIST_POST_FAILURE';
//action type for making book available
export const START_MAKE_AVAILABLE_PUT = 'START_MAKE_AVAILABLE_PUT';
export const MAKE_AVAILABLE_PUT_SUCCESS = 'MAKE_AVAILABLE_PUT_SUCCESS';
export const MAKE_AVAILABLE_PUT_FAILURE = 'MAKE_AVAILABLE_PUT_FAILURE';
//action type for making book unavailable
export const START_MAKE_UNAVAILABLE_PUT = 'START_MAKE_UNAVAILABLE_PUT';
export const MAKE_UNAVAILABLE_PUT_SUCCESS = 'MAKE_UNAVAILABLE_PUT_SUCCESS';
export const MAKE_UNAVAILABLE_PUT_FAILURE = 'MAKE_UNAVAILABLE_PUT_FAILURE';

//action async thunk for googleBooksAPI fetch
export const fetchBook = book => dispatch => {
    dispatch(START_BOOK_FETCH);
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    .then(res => {
        dispatch({
            type: BOOK_FETCH_SUCCESS,
            payload: res.data.something //define something as per the res object backend sends to be the payload to send to reducer
        })
    })
    .catch(err => {
        dispatch({
            type: BOOK_FETCH_FAILURE,
            payload: err.message
        })
    })
}
//async thunk for post to users book collection
export const postBookToColletion = (book, userId) => dispatch => {
    dispatch(START_BOOK_COLLECTION_POST);
    axios.post(`addEndPointHere/:${userId}`, book) //add proper backend endpoint url
    .then(res => {
        dispatch({
            type: BOOK_COLLECTION_POST_SUCCESS,
            payload: res.data.something //define something as per the res object backend sends into payload to pass to reducer to update state 
        })
    })
    .catch(err => {
        dispatch({
            type: BOOK_COLLECTION_POST_FAILURE,
            payload: err.message
        })
    })
}
//async thunk for posting to users wishlist
export const postBookToWishlist = (book, userId)  => dispatch => {
    dispatch(START_BOOK_WISHLIST_POST);
    axios.post(`addEndPointHere/:${userId}`, book) //add proper backend endpoint url
    .then(res => {
        dispatch({
            type: BOOK_WISHLIST_POST_SUCCESS,
            payload: res.data.something //define something as per the res object backend sends into payload to pass to reducer to update state 
        })
    })
    .catch(err => {
        dispatch({
            type: BOOK_WISHLIST_POST_FAILURE,
            payload: err.message
        })
    })
}


export const makeBookAvailable = (book, userId, bookId)  => dispatch => {//inside of the book being passed into the function where the action is being called the isavailable will need to be set true here
    dispatch(START_MAKE_AVAILABLE_PUT);
    axios.put(`addEndPointHere/:${userId}/:${bookId}`, book) //add proper backend endpoint url
    .then(res => {
        dispatch({
            type: MAKE_AVAILABLE_PUT_SUCCESS,
            payload: res.data.something //define something as per the res object backend sends into payload to pass to reducer to update state 
        })
    })
    .catch(err => {
        dispatch({
            type: MAKE_AVAILABLE_PUT_FAILURE,
            payload: err.message
        })
    })
}

export const makeBookUnAvailable = (book, userId, bookId)  => dispatch => {//inside of the book being passed into the function where the action is being called the isavailable will need to be set false here
    dispatch(START_MAKE_UNAVAILABLE_PUT);
    axios.put(`addEndPointHere/:${userId}/${bookId}`, book) //add proper backend endpoint url
    .then(res => {
        dispatch({
            type: MAKE_UNAVAILABLE_PUT_SUCCESS,
            payload: res.data.something //define something as per the res object backend sends into payload to pass to reducer to update state 
        })
    })
    .catch(err => {
        dispatch({
            type: MAKE_UNAVAILABLE_PUT_FAILURE,
            payload: err.message
        })
    })
}


//Actions that still need to be done:
//login/reg/logout





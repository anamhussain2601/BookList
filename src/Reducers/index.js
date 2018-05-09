import { combineReducers } from 'redux';
import BooksReducer from './reducer_book';
import BookList from '../containers/book-list';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook : ActiveBook

});

export default rootReducer;

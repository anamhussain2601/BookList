import { combinReducers} from 'redux';
import BooksReducer from './reducer_book';
import BookList from '../containers/book-list';

const rootReducer = combineReducers({
    books: BooksReducer
});

export default   rootReducer;
import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import filtersReducer from "./filtersReducer"

const rootReducer = combineReducers({
    filters: filtersReducer,
    books: booksReducer
})

export default rootReducer
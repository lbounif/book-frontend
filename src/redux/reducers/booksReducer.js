const initialState = {
    books: [],
    error: "", //if no books
    /* Modal */
    visible: false,
    newBook : {
        title: "",
        author: "",
        description: "",
        rating: 0
    }
}
const bookReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET_BOOKS": 
            return {...state, books: action.payload }
        case "UPDATE_VISIBLE":
            return {...state, visible: action.payload}
        case "UPDATE_NEW_BOOK":
            return {...state, newBook: action.payload}
        case "ADD_NEW_BOOK":
            return {...state, books: [...state.books, action.payload]}
        case "UPDATE_ERR":
            return {...state, error: action.payload}
        default:
            return state
    }
}

export default bookReducer

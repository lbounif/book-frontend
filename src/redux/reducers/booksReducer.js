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
        case "SET_BOOKS": {
            return {...state, books: action.payload }
        }
        default:
            return state
    }
}

export default bookReducer

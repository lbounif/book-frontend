import "./books.css"
import BookCard from '../BookCard'
import AddBook from "../AddBook"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios'

const Books = ({styles}) => {
    const dispatch = useDispatch()
    const { books } = useSelector(state => state.books)
    const { title, author } = useSelector(state => state.filters)

    useEffect(() => {
        //Get books from database by calling the API
        const fetchBooks = async () => {
            try {
                //API call
                const response = await axios.get("http://localhost:10010/books")
                console.log("response.data: ", response.data)
                if(!response || response.status !== 200){
                    return dispatch({type: "SET_BOOKS", payload: [] })
                }
                return dispatch({type: "SET_BOOKS", payload: response.data.data })
            } catch (err) {
                console.log("error: ", err)
            }
        }
        fetchBooks()
    }, [dispatch])
    return (
        <div style={{...styles}}>
            <div className="add-book-container">
                <AddBook />
            </div>
            <div className="books-container">
                {/* title: props of BookCard
                book.title: property of book model ( API ) */}
                {
                    !books || books.length === 0 ? (
                        <div> No Data To Display</div>
                    ): (
                        <>
                    { books
                        .filter(
                            elm => 
                            elm.title.toLowerCase().indexOf(title.toLowerCase()) !== -1)
                        .filter(
                            elm => 
                            elm.author.toLowerCase().indexOf(author.toLowerCase()) !== -1)
                        .map((book, index) => (
                            <BookCard 
                                key={index}
                                title={book.title}
                                author={book.author}
                                rating={book.rating}
                                voters={book.nbVoters}
                                description={book.description}
                                img={book.img}/>
                        ))}
                    </>
                    )
                }
            </div>
        </div>
    )
}

export default Books
import "./addBook.css"
import { Button, Modal, Input, Rate } from "antd"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

const AddBook = () => {
    const dispatch = useDispatch()
    const { visible, newBook} = useSelector(state=> state.books)
    const postBookToDB = async (newBook) => {
        try {
            const response = await axios.post("http://localhost:10010/books", newBook)
            if(!response || response.status !== 201) {
                return dispatch({type: "UPDATE_ERR", payload: "FAILED TO ADD"})
            }
            console.log("In add book ", response.data.data)
            dispatch({type: "ADD_NEW_BOOK", payload: response.data.data })

        } catch(err) {
            console.log("err: ", err)
            return dispatch({type: "UPDATE_ERR", payload: "FAILED TO ADD"})
        }
    }
    return (
        <div>
            <Button
                size="large"
                onClick={()=> dispatch({ type: "UPDATE_VISIBLE", payload: true })}
                >
                Add New Book
            </Button>
            <Modal
                title="Add New Book"
                visible={visible}
                onCancel={()=> dispatch({ type: "UPDATE_VISIBLE", payload: false })}
                onOk={() => {
                    postBookToDB(newBook)
                    dispatch({ type: "UPDATE_VISIBLE", payload: false })
                }}
                >
                <Input 
                    style={{ margin: 10}}
                    placeholder="Book Title"
                    size="large"
                    onChange={(event) => 
                        dispatch({
                            type: "UPDATE_NEW_BOOK",
                            payload: {...newBook, title: event.target.value }
                        }) }
                    value={newBook.title}
                    />
                <Input 
                    style={{ margin: 10}}
                    placeholder="Book Author"
                    size="large"
                    onChange={(event) => 
                        dispatch({
                            type: "UPDATE_NEW_BOOK",
                            payload: {...newBook, author: event.target.value}
                        })}
                    value={newBook.author}
                    />
                <Input 
                    style={{ margin: 10}}
                    placeholder="Book Description"
                    size="large"
                    onChange={(event) =>
                        dispatch({
                            type: "UPDATE_NEW_BOOK",
                            payload: {...newBook, description: event.target.value}
                        }) }
                    value={newBook.description}
                    />
                <Rate 
                    style={{ margin: 10}}
                     onChange={(value) => 
                        dispatch({
                            type: "UPDATE_NEW_BOOK",
                            payload: {...newBook, rating: value}
                        }) }
                     value={newBook.rating}
                    />
            </Modal>
        </div>
    )
}

export default AddBook
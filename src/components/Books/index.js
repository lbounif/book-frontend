import "./books.css"
import BookCard from '../BookCard'
import AddBook from "../AddBook"

const Books = ({styles}) => {
    const Books = [{
        title: "book1",
        author: "author 1",
        rating: 5,
        voters: 200,
        description: "book description 1",
        img: "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png"
    },
    {
        title: "book1",
        author: "author 1",
        rating: 5,
        voters: 200,
        description: "book description 1",
        img: "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png"
    },
    {
        title: "book1",
        author: "author 1",
        rating: 5,
        voters: 200,
        description: "book description 1",
        img: "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png"
    },
    {
        title: "book1",
        author: "author 1",
        rating: 5,
        voters: 200,
        description: "book description 1",
        img: "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png"
    }]
    return (
        <div style={{...styles}}>
            <div className="add-book-container">
                <AddBook />
            </div>
            <div className="books-container">
                {
                    Books.map((book, index) => (
                        <BookCard 
                            key={index}
                            title={book.title}
                            author={book.author}
                            rating={book.rating}
                            voters={book.voters}
                            description={book.description}
                            img={book.img}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Books
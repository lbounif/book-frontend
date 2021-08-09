import './App.css';
import Header from './components/Header'
// import Filters from './components/Filters'
// import Books from './components/Books'
import BookCard from './components/BookCard';

import img from './assets/books.jpeg'

function App() {
  return (
    <div className="App">
     <Header title="BOOKS"/>
     <div className="content">
        <BookCard
          img={img}
          title="book title"
          author="Sara"
          rating={4}
          voters={30}
          description="book description" />
        {/* <Filters styles={{ flex: 1, backgroundColor: "black"}}/>
        <Books styles={{ flex: 2}}/> */}
     </div>
    </div>
  );
}

export default App;

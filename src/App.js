import './App.css';
import "antd/dist/antd.css"
import Header from './components/Header'
import Filters from './components/Filters'
import Books from './components/Books'

function App() {
  return (
    <div className="App">
     <Header title="BOOKS"/>
     <div className="content">
        <Filters styles={{ flex: 1}}/>
        <Books styles={{ flex: 2 }}/>
     </div>
    </div>
  );
}

export default App;

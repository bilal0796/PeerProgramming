import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './Components/WarningSign';
import Mybadge from './Components/MyBadge';
import SingleBook from './Components/SingleBook';
import booksdata from './Data/SciFi.json'
import BookList from './Components/Booklist';

function App() {
  return (<>
   <div className='container'>
   <WarningSign inputString='Peerprogramming'/> 
   <Mybadge string2='strive' color='danger' />
   <SingleBook book={booksdata[4]} />
   <BookList books={booksdata} />
   </div>
  </>)
}

export default App;

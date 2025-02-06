import './CSS/App.css';
import Home from './pages/Home';
import Favourite from './pages/Favourites';
import { Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  return (
  <div>
    <NavBar/>
  <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favourites' element={<Favourite/>}/>
    </Routes>
  </main>
  </div>
  )
}

export default App

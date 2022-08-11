import './App.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { UserProvider } from './contexts/UserContext';
import Logout from './components/Logout/Logout';
import Create from './components/Create/Create';
import AllMovies from './components/AllMovies/AllMovies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import MovieEdit from './components/MovieEdit/MovieEdit';

function App() {
  return (
    <div>
      <UserProvider>
        <Header />

        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/create' element={<Create />} />
          <Route path='/catalog' element={<AllMovies/>} />
          <Route path='/catalog/:movieId' element={<MovieDetails/>} />
          <Route path='/catalog/:movieId/edit' element={<MovieEdit />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;

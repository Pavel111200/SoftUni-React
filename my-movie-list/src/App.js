import './App.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { UserProvider } from './contexts/UserContext';
import Logout from './components/Logout/Logout';
import Create from './components/Create/Create';

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
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;

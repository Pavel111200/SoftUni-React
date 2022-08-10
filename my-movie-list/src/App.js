import './App.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header />

      <Routes >
      <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;

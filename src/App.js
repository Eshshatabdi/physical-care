import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut';
import Header from './Pages/Header/Header';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
      </Routes>

    </div>
  );
}

export default App;

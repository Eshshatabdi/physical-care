import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut';
import Header from './Pages/Header/Header';
import Register from './Pages/Login/Register/Register'
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={

          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }>


        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;

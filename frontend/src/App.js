
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import PrivateComponents from './Components/PrivateComponents';
import Login from './Components/Login';
import Addproduct from './Components/Addproduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponents/>}>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/add' element={<Addproduct/>}></Route>
        <Route path='/update/:id' element={<UpdateProduct/>}></Route>
        <Route path='/logout' element={<h1> logout Components </h1>}></Route>
        <Route path='/profile' element={<h1>profile Components</h1>}></Route>
        </Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

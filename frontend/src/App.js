
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import PrivateComponents from './Components/PrivateComponents';
import Login from './Components/Login';
import CreateEmployee from './Components/CreateEmployee';
import EmployeeList from './Components/EmployeeList';
import UpdateEmployee from './Components/UpdateEmployee';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponents/>}>
        <Route path='/' element={<EmployeeList/>}></Route>
        <Route path='/add' element={<CreateEmployee/>}></Route>
        <Route path='/update/:id' element={<UpdateEmployee/>}></Route>
        <Route path='/logout' element={<h1> logout Components </h1>}></Route>
      
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

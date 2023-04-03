import Nav from './components/Nav';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductLIst';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Nav/>
      <Routes>

        <Route element={<PrivateComponent/>} >
        <Route path='/' element={<ProductList/>} />
        <Route path='/add' element={<AddProduct/>} />
        <Route path='/update/:id' element={<UpdateProduct/>} />
        <Route path='/logout' element={<h1>Logout component</h1>} />
        <Route path='/profile' element={<h1> Profile component</h1>} />
        </Route>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </BrowserRouter>
      <Footer/>  
     
  
    </div>
  );
}

export default App;

import './App.css'
import { Routes, Route } from 'react-router-dom';
import Assessments from './components/Assessments/Assessments';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import Fac from './components/Fac/Fac';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Offers from './components/Offers/Offers';
import Perfil from './components/Perfil/Perfil';
import Products from './components/Products/Products';
import Signup from './components/Signup/Signup';


function App() {

  return (
    <Routes>
      <Route element= { <Menu />}>
        <Route path='/' element= { <HomePage /> } />
        <Route path='/login' element= { <Login /> } />
        <Route path='/signup' element= { <Signup /> } />
        <Route path='/perfil' element= { <Perfil /> } />
        <Route path='/cart' element=  {<Cart /> } />
        <Route path='/products' element= { <Products /> } />
        <Route path='/categories' element= { <Categories /> } />
        <Route path='/offers' element= { <Offers /> } />
        <Route path='/fac' element= { <Fac /> } />
        <Route path='/assessments' element= { <Assessments /> } />


      </Route>
    </Routes>
  )
}

export default App

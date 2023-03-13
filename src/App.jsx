import React from 'react'
import {HashRouter, Routes, Route, Link} from 'react-router-dom'
import './Styles/App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import AdminPage from './Components/AdminPage'
import CarDetails from './Components/carDetails'
import OrderPage from './Components/OrderPage'

export default function App() {
  return (
      <>
        <HashRouter>
           <nav className='navbar'>
            <h1 className='nav-title'><Link className='link-to-home' to="/#"><span style={{color:'rgb(248, 175, 2)'}}>auto</span>motor</Link></h1>
            <ul>
              <li><a href="/#">Home</a></li>
              <li><a href="/#/about">About us</a></li>
              <li><a href="/#/contact">Contact</a></li>
            </ul>
        </nav>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path='/contact' exact element={<Contact/>}/>
            <Route path="/addCar" exact element={<AdminPage/>}/>
            <Route path="/carDetails" exact element={<CarDetails/>}/>
            <Route path="/OrderPage" exact element={<OrderPage/>}/>
          </Routes>
        </HashRouter>
        </>
  )
}

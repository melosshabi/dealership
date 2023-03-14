import React from 'react'
import {HashRouter, Routes, Route, Link} from 'react-router-dom'
import './Styles/App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import AdminPage from './Components/AdminPage'
import CarDetails from './Components/carDetails'
import TestDrive from './Components/TestDrive'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'

export default function App() {
  return (
      <>
        <HashRouter>
           <nav className='navbar'>
            <h1 className='nav-title'><Link className='link-to-home' to="/#"><span style={{color:'rgb(248, 175, 2)'}}>auto</span>motor</Link></h1>
            <ul>
              <li><a className="navigation-links" href="/#">Home</a></li>
              <li><a className="navigation-links" href="/#/about">About us</a></li>
              <li><a className="navigation-links" href="/#/contact">Contact</a></li>
              {!localStorage.getItem('name') && <li><Link to="/signIn" className='sign-in-link'>Sign In</Link></li>}
              {localStorage.getItem('name') && <label>{localStorage.getItem('name')}</label>}
            </ul>
            
        </nav>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path='/contact' exact element={<Contact/>}/>
            <Route path="/addCar" exact element={<AdminPage/>}/>
            <Route path="/carDetails" exact element={<CarDetails/>}/>
            <Route path="/reqTestDrive" exact element={<TestDrive/>}/>
            <Route path="/signIn" exact element={<SignIn/>}/>
            <Route path="/signUp" exact element={<SignUp/>}/>
          </Routes>
        </HashRouter>
        </>
  )
}

import React, { useState } from 'react'
import {HashRouter, Routes, Route, Link} from 'react-router-dom'
import './Styles/App.css'
// Komponentet
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import AddCar from './Components/AddCar'
import CarDetails from './Components/carDetails'
import TestDrive from './Components/TestDrive'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import UsersMessagesReader from './Components/UsersMessagesReader'
import TestDriveRequests from './Components/TestDriveRequests'
import UpdateStock from './Components/UpdateStock'
// Ikonat
import signOutIcon from './images/sign-out-icon.png'
import caret from './images/caret.svg'
// Funksionet e firebase-it
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'
// Librari per cookies
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export default function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
  const [userId, setUserID] = useState(localStorage.getItem('userID'))
  
  async function logOut(){
    await signOut(auth)
    .then(()=> {
      localStorage.clear()
      cookies.remove('auth-token')
      window.location.pathname = "/"
    })
  }

  function toggleMoreOptions(){
    const moreOptionsDiv = document.getElementsByClassName('more-options')[0]
    const caret = document.getElementsByClassName('caret-icon')[0]
    moreOptionsDiv.classList.toggle('active-options')
    caret.classList.toggle('caret-active')
  }
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
              <div id="name-more-options-wrapper">{localStorage.getItem('name') && <label className='name'>{localStorage.getItem('name')} <div className="more-options"><Link to="/usersMessages" onClick={toggleMoreOptions}>User Messages</Link><Link to="/testDriveRequests" onClick={toggleMoreOptions}>Test Drive Requests</Link><Link to="/addCar" onClick={toggleMoreOptions}>Add Car</Link><Link to="/updateStock" onClick={toggleMoreOptions}>Update Cars Stock</Link></div></label>} {isAuth && userId === 'HA3XPxDZG8Y5YKZt1VTmgU6bf4a2' &&  <img className="caret-icon" src={caret} alt="Caret" onClick={toggleMoreOptions}/> }</div>
              {isAuth && <button className="sign-out-btn" onClick={logOut}><img src={signOutIcon} alt="Sign out button"/></button>}
            </ul>
            
        </nav>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path='/contact' exact element={<Contact/>}/>
            <Route path="/addCar" exact element={<AddCar/>}/>
            <Route path="/carDetails" exact element={<CarDetails/>}/>
            <Route path="/reqTestDrive" exact element={<TestDrive/>}/>
            <Route path="/signIn" exact element={<SignIn/>}/>
            <Route path="/signUp" exact element={<SignUp/>}/>
            <Route path="/usersMessages" exact element={<UsersMessagesReader/>}/>
            <Route path="/testDriveRequests" exact element={<TestDriveRequests/>}/>
            <Route path="/updateStock" exact element={<UpdateStock/>}/> 
          </Routes>
        </HashRouter>
        </>
  )
}

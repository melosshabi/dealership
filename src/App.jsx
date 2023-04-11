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
import xIcon from './images/x-icon.svg'
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
      window.location.reload()
    })
  }

  // targetMoreOptionsMenu refers to either the 'More Options' menu of the nav bar or the menu of the sidebar
  function toggleMoreOptions(target, targetMoreOptionsMenu){
    console.log(targetMoreOptionsMenu)
    if(targetMoreOptionsMenu === 'nav'){
      const moreOptionsDiv = document.getElementsByClassName('more-options')[0]
      const caret = document.getElementsByClassName('caret-icon')[0]
      moreOptionsDiv.classList.toggle('active-options')
      caret.classList.toggle('caret-active')
    }else if(targetMoreOptionsMenu === 'side'){
      const moreOptionsDiv = document.getElementsByClassName('sidebar-more-options')[0]
      const a = [...document.querySelectorAll('.sidebar-more-options a')]

      moreOptionsDiv.classList.toggle("active-sidebar-more-options")

      if(a.includes(target)){
        document.querySelector('.sidebar').classList.toggle('active-sidebar')
      }
    }
  }

  function toggleSidebar(){
    const sidebar = document.getElementsByClassName('sidebar')[0]
    sidebar.classList.toggle('active-sidebar')
  }
  return (
      <>
        <HashRouter>
           <nav className='navbar'>
            <h1 className='nav-title'><Link className='link-to-home' to="/#"><span style={{color:'rgb(248, 175, 2)'}}>auto</span>motor</Link></h1>
            <ul className='navbar-ul'>
              <li><Link className="navigation-links" to="/">Home</Link></li>
              <li><Link className="navigation-links" to="/about">About us</Link></li>
              <li><Link className="navigation-links" to="/contact">Contact</Link></li>
              {!localStorage.getItem('name') && <li><Link to="/signIn" className='sign-in-link'>Sign In</Link></li>}
              <div id="name-more-options-wrapper">
                {localStorage.getItem('name') && 
                  <label className='name'>
                    {localStorage.getItem('name')} 
                    <div className="more-options">
                      <Link to="/usersMessages" onClick={e => toggleMoreOptions(e.target, 'nav')}>User Messages</Link>
                      <Link to="/testDriveRequests" onClick={e => toggleMoreOptions(e.target, 'nav')}>Test Drive Requests</Link>
                      <Link to="/addCar" onClick={e => toggleMoreOptions(e.target, 'nav')}>Add Car</Link>
                      <Link to="/updateStock" onClick={e => toggleMoreOptions(e.target, 'nav')}>Update Cars Stock</Link>
                    </div>
                  </label>} 

              {isAuth && userId === 'HA3XPxDZG8Y5YKZt1VTmgU6bf4a2' &&  <img className="caret-icon" src={caret} alt="Caret" onClick={e => toggleMoreOptions(e.target, 'nav')}/> }</div>
              {isAuth && <button className="sign-out-btn" onClick={logOut}><img src={signOutIcon} alt="Sign out button"/></button>}
            </ul>

            <div className="hamburger-btn" onClick={toggleSidebar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
        <div className="sidebar">
              <button className="close-sidebar-btn" onClick={toggleSidebar}><img src={xIcon} alt="X icon"/></button>
              <ul className='sidebar-ul'>
                <li><Link onClick={toggleSidebar} to='/'>Home</Link></li>
                <li><Link onClick={toggleSidebar} to='/about'>About us</Link></li>
                <li><Link onClick={toggleSidebar} to='/contact'>Contact</Link></li>
              </ul>
              <div className="sign-in-sidebar-div">
                {!localStorage.getItem('name') && <Link to="/signIn" onClick={toggleSidebar} className='sign-in-link'>Sign In</Link>}
                <div id="sidebar-name-more-options-wrapper">{localStorage.getItem('name') && <label className='name'>{localStorage.getItem('name')} 
                <div className="sidebar-more-options">
                  <Link to="/usersMessages" onClick={e => toggleMoreOptions(e.target, 'side')}>User Messages</Link>
                  <Link to="/testDriveRequests" onClick={e => toggleMoreOptions(e.target, 'side')}>Test Drive Requests</Link>
                  <Link to="/addCar" onClick={e => toggleMoreOptions(e.target, 'side')}>Add Car</Link>
                  <Link to="/updateStock" onClick={e => toggleMoreOptions(e.target, 'side')}>Update Cars Stock</Link>
                </div>

                  </label>} {isAuth && userId === 'HA3XPxDZG8Y5YKZt1VTmgU6bf4a2' &&  <button className="sidebar-more-options-btn" onClick={e => toggleMoreOptions(e.target, 'side')}>···</button> }</div>

                {isAuth && <button className="sign-out-btn" onClick={logOut}><img src={signOutIcon} alt="Sign out button"/></button>}
              </div>
            </div>
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

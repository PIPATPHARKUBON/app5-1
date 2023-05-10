import React from 'react'
import { BrowserRouter, NavLink,Routes,Route,Navigate} from 'react-router-dom'
import './navLink.css'
import Home from './home'
import Products from './products'
import Error from './error'
import {userContext} from './context'
import About from './About'
import Contact from './contact'


export default function Route1() {
    let activeClassName ="active_menu"
    let inActiveClassName ="menu"
    let user = React.useContext(userContext)
  return (
   <BrowserRouter>
   <nav className='nav'>
    <NavLink to="/" className={({isActive}) => isActive ? activeClassName:inActiveClassName}>Home</NavLink> -&nbsp;
    <NavLink to="/About" className={({isActive}) => isActive ? activeClassName:inActiveClassName}>About</NavLink> -&nbsp;
    <NavLink to="/products" className={({isActive}) => isActive ? activeClassName:inActiveClassName}>Product</NavLink>-&nbsp;
    <NavLink to="/Contact" className={({isActive}) => isActive ? activeClassName:inActiveClassName}>Contact</NavLink> -&nbsp;
    <NavLink to="/dashboard" className={({isActive}) => isActive ? activeClassName:inActiveClassName}>Dashboard</NavLink>-&nbsp;
    [{user}]

   </nav>
   <div style={{margin:'20'}}>
    <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/About" element = {<About />} />
        <Route path="/products" element = {<Products />} />
        <Route path="/Contact" element = {<Contact />} />
        <Route path="/dashboard" element = {<Navigate to="/" />} />
        <Route path="*" element = {<Error to="/" />} />
    </Routes>
   </div>
   </BrowserRouter>
  )
}

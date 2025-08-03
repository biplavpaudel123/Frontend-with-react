import React from 'react'
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <>
    <ul>
        <li>
            <NavLink to={'/'} className={({isActive})=>`${isActive?'underline':''}`}>Home</NavLink>
            <NavLink to={'/about'} className={({isActive})=>`${isActive?'underline':''}`}>About</NavLink>
            <NavLink to={'/contact'} className={({isActive})=>`${isActive? 'underline':''}`}>Contact</NavLink>
        </li>
    </ul>
    </>
  )
}

export default Header
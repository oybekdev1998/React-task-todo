import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <nav className='navbar navbar-dark navbar-expand-lg bg-success'>

    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to={'/'} exact="true" >Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/todo'} >Todo</Link>
      </li> 
    </ul>
  </nav>
  )
}

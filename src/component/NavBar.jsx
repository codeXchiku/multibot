import React from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <header className="flex justify-center" >
    <nav>
        <ul className="flex space-x-3">
            <li><NavLink to='/' className="inline-block text-green-700 text-2xl font-bold ">Home</NavLink></li>
            <li><NavLink to='/Setting' className="inline-block text-white text-2xl font-bold">Setting</NavLink></li>
        </ul>
    </nav>
    </header>
    </>
  )
}

export default NavBar
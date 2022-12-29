import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="heading">
            <h1 className='theSiren' ><span className='the' style={{color:'red'}}>The</span> <span style={{color:'blue',fontSize:'40px'}}>Siren</span></h1>
            <div className='navDiv'>
                <NavLink to='/' className='linkD'><li> Home </li></NavLink>
                <NavLink to='/bollywood' className='linkD'><li> Bollywood </li></NavLink>
                <NavLink to='/technology'className='linkD' ><li> Technology </li></NavLink>
                <NavLink to='/hollywood' className='linkD'> <li> Hollywood </li></NavLink>
                <NavLink to='/fitness' className='linkD'><li> Fitness </li></NavLink>
                <NavLink to='/food' className='linkD'><li> Food </li></NavLink>
            </div>
        </div>
    </>
  )
}

export default Navbar;
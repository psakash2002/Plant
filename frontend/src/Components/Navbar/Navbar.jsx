import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { LuLogIn } from "react-icons/lu";
import { Link } from 'react-router-dom';
import '../../App.css';
const Navbar = () => {
  return (
    <nav className='bg-red-400 flex justify-between p-3 px-10'>
        <div className=''>Logo</div>
        <div className='nav-items'>
            <a href='#'>Home</a>
        </div>
        <div className='flex gap-2 items-center'>
            <input type='text' name='search' placeholder='Search' className='px-8 rounded-md' />
            <BiSearchAlt size={20}/>
        </div>
        <div className='nav-items'>
            <a href='#'>About</a>
        </div>
        <div>
            <Link to='/login'><button className='flex gap-1 items-center bg-green-400 text-white border-2 border-white px-2 rounded-md hover:scale-110 hover:bg-green-500'>Login<LuLogIn size={20}/></button></Link>
        </div>
    </nav>
  )
}

export default Navbar
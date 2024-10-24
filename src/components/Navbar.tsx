import React from 'react'
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className= 'text-xl font-medium'>Aqsa's Portoflio</div>
            <ul className='gap-10 lg:gap-16 hidde md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#projects'>Projects</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact Us</a></li>
            </ul>
            <IoIosMenu className='md:hidden' size={30} /> 
        </div>
    </div>
  )
}

export default Navbar
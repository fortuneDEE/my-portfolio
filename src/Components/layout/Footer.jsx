import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' h-full w-full text-white bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
   
        <div className='py-4 flex items-center justify-between'>
            <h1>
              CHIKA_CODES~
            </h1>
    
            <div >
            <ul >
                <li>Quick Links</li>
                <NavLink to="/" >
                <li >Portfolio</li>
                </NavLink>
                <NavLink to="/about" >
                <li>About Me</li>
                </NavLink>
            
                <NavLink to="/contact">
                <li >Contact Me</li>
                </NavLink>
            </ul>
            </div>
      </div>
    </div>
  )
}

export default Footer

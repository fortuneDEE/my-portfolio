import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiPhone} from 'react-icons/fi'
import { AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='py-4 h-full w-full items-center bg-[#f5f5f5] px-10 md:px-20 lg:px-40 dark:bg-gray-800 dark:text-[#f5f5f5]'>
        <div className='py-4 flex justify-between '>
            <div>
              <h1 className='text-xl'>
                CHIKA_CODES~
              </h1>
              {/* <p>My approach to development is grounded in the Agile methodology,</p> */}
            </div>
            <div >
            <ul className='no-underline'>
                <li className='pb-3'>Quick Links</li>
                <NavLink to="/" >
                <li className='font-thin text-sm pb-2 border-gray-400 no-underline hover:underline decoration-teal-600 underline-offset-8 decoration-2'>Portfolio</li>
                </NavLink>
                <NavLink to="/about" >
                <li className='font-thin text-sm pb-2 border-gray-400 no-underline hover:underline decoration-teal-600 underline-offset-8 decoration-2'>About Me</li>
                </NavLink>
                <NavLink to="/contact">
                <li className='font-thin text-sm pb-2 border-gray-400 no-underline hover:underline decoration-teal-600 underline-offset-8 decoration-2'>Contact Me</li>
                </NavLink>
            </ul>
            </div>
             <div className='contact'>
            <ul className='no-underline'>
                <li className='pb-3'>Social</li>
                
                <NavLink to="/ellfortune3@gmail.com" className='flex gap-2'>
                  <AiOutlineMail/>
                <li className='font-thin text-sm pb-2 border-gray-400 no-underline hover:underline active:underline decoration-teal-600 underline-offset-8 decoration-2'>ellfortune3@gmail.com</li>
                </NavLink>
                <NavLink to="/contact" className='flex gap-2'>
                  <FiPhone/>
                <li className='font-thin text-sm pb-2 border-gray-400 no-underline hover:underline decoration-teal-600 underline-offset-8 decoration-2'>09033418109</li>
                </NavLink>
            </ul>
            </div>

      </div>
      <p className="py-2 text-center mt-8 font-thin text-xs">
          &copy; 2023. Fortune Ellah. All Rights Reserved.{' '}
      </p>
    </div>
  )
}

export default Footer

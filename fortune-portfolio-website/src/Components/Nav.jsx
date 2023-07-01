import { BsFillMoonStarsFill} from 'react-icons/bs'
import { useState } from 'react';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
    <div className=' min-h-fit bg-white px-10 md:px-20 lg:px-40  dark:bg-gray-900'>
          <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons dark:text-white'>CHIKA_CODES~</h1>
              <ul className='flex items-center'>
                  <li className='cursor-pointer text-md mr-10 dark:text-white'><a href='/' className='hover:bg-teal-600 '>Home</a></li>
                  <a href='/'hidden><li className='cursor-pointer text-md mr-10 dark:text-white'>About</li></a>
                  <li className='cursor-pointer text-md mr-10 dark:text-white'>Services</li>
                  <li className='cursor-pointer text-md mr-10 dark:text-white'>Projects</li>
                  <li className='cursor-pointer text-md mr-10 dark:text-white'>Blog</li>
                  <li className='cursor-pointer text-md mr-20 dark:text-white'>Contact</li>

                  <li>
                      <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
                  </li>
                
                  
                  <a href='#' className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'><li>Resume</li></a>
              </ul>
          </nav>
        </div>
    </div>
  )
}

export default NavBar
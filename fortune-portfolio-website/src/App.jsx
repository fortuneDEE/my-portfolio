// import NavBar from "./Components/Nav";
import Main from "./Components/Hero";
import Services from "./Components/Services";
import PortFolio from "./Components/PortFolio";
import { BsFillMoonStarsFill} from 'react-icons/bs'
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className={darkMode ? 'dark' : ""}>
       <div className=' min-h-fit bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
          <nav className='py-10 flex justify-between'>
              <h1 className='text-xl font-burtons dark:text-white'>CHIKA_CODES~</h1>
              <ul className='flex items-center'>
              <a href="/" className="hover:decoration-teal-600"><li className='cursor-pointer text-md mr-10 dark:text-white'>Home</li></a>
                  <li className='cursor-pointer text-md mr-10 dark:text-white'>About</li>
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
   
      {/* <NavBar/> */}
      <Main/>
      <Services/>
      <PortFolio/>
    </div>
    </>
  )
}

export default App

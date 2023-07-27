import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub,} from 'react-icons/ai';
import Fortune from '../assets/images/Fortune.png'
const Main = () => {
  return (
    <div className='text-center p-10 md:flex md:flex-row md:justify-between md:px-15 lg:px-20 lg:pt-40 dark:bg-gray-900'>
        <div className=''>
            <h2 className='text-5xl py-2 font-medium md:text-4xl lg:text-6xl dark:text-white'>Hi 👋 <br/>
            <span className='text-teal-600'>
                Fortune Ellah
            </span> 
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl lg:text-4xl dark:text-white'>
                Frontend Developer
            </h3>
            
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
                    <a href="https://twitter.com/fortune_ellah" target='_blank' rel="noreferrer"><AiFillTwitterCircle/></a>
                    <a href="https://github.com/fortuneDEE" target='_blank' rel="noreferrer"><AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/fortune-ellah/" target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
            </div>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:mt-0 lg:flex lg:mr-0'>
            <img src={Fortune} alt='fortune ellah' className='w-64 mx-auto'/>
        </div>
    </div>
  )
}

export default Main
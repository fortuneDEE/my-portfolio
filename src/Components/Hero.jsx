import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BsArrowUpRight} from 'react-icons/bs'
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
            <h3 className='text-2xl py-2 mb-6 md:text-3xl lg:text-4xl dark:text-white'>
                Frontend Developer
            </h3>
            <div className='mb-4'>
            <a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 mx-6 rounded-md '>
                See my works
            </a>
            {/* <BsArrowUpRight className='text-center absolute top-0 left-20 right-20'/> */}
            </div>
            <div className='text-2xl text-teal-600 flex justify-center gap-10 py-6 text-gray-600 '>
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
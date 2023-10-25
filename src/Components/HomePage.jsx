import { useEffect } from 'react';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {BsArrowUpRight} from 'react-icons/bs'
import { useTypewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Fortune from '../assets/images/Fortune.png'
const Main = () => {
     useEffect(() => {
        AOS.init();
      }, [])

    const [name] = useTypewriter({
        typeSpeed: 70,
        words: ['Fortune Ellah'],
        loop: 2,
        delaySpeed: 3000
    })
    const [hi] = useTypewriter({
        typeSpeed: 50,
        words: ['Hi'],
        loop: 1,
        delaySpeed: 1000
    })
  return (
    <div className='text-center p-10 md:flex md:justify-evenly md:px-15 lg:px-20 lg:pt-40 dark:bg-gray-900'>
        <div className=''>
            <h2 className='text-5xl py-2 font-medium md:text-4xl lg:text-6xl dark:text-white'>{hi} 👋 <br/>
            <span className='text-teal-600'>
                {name}
            </span> 
            </h2>
            <h3 className='text-2xl py-2 mb-6 md:text-3xl lg:text-4xl dark:text-white'>
                Frontend Developer
            </h3>
            <div className='mb-4' data-aos="fade-down">
            <a href='/service' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 mx-6 rounded-md '>
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
        <div data-aos="zoom-in-up" className='relative bg-gradient-to-b mx-auto from-teal-500 rounded-full w-80 h-80 mt-20 md:mx-0 md:mt-0 lg:flex lg:mr-0'>
            <img src={Fortune} alt='fortune ellah' className='w-64 mx-auto'/>
        </div>
    </div>
  )
}

export default Main
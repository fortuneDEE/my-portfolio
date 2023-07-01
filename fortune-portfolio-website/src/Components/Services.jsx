import Code from '../assets/images/code.jpg';
import Consult from '../assets/images/consulting.jpg';
import Design from '../assets/images/design.jpg';

const Services = () => {
  return (
    <div className='text-center p-10 dark:bg-gray-900'>
        <h3 className='text-3xl py-1 text-teal-600 lg:pt-60'>Services I offer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>
            what i offer in my freelance <span className=' text-teal-500'>career</span> i worked for <span className=' text-teal-500'>startups</span>
        </p>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>
            what i offer in my freelance <span className=' text-teal-500'>career</span> i worked for <span className=' text-teal-500'>startups</span>
        </p>
        <div className='gap-20 justify-center lg:flex dark:text-white'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Code} alt='' className='w-1/2 h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                    Coding
                </h3>
                <p className='py-2'>create code for you</p>
                <h4 className='py-4 text-teal-600'>Designs i used</h4>
                <p className='py-1 text-teal-800'>React</p>
                <p className='py-1 text-teal-800'>TypeScript</p>
                <p className='py-1 text-teal-800'>TailwindCSS</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Consult} alt='' className='w-1/2 h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                    Coding
                </h3>
                <p className='py-2'>create code for you</p>
                <h4 className='py-4 text-teal-600'>Designs i used</h4>
                <p className='py-1 text-teal-800'>React</p>
                <p className='py-1 text-teal-800'>TypeScript</p>
                <p className='py-1 text-teal-800'>TailwindCSS</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Design} alt='' className='w-1/2 h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                    Coding
                </h3>
                <p className='py-2'>create code for you</p>
                <h4 className='py-4 text-teal-600'>Designs i used</h4>
                <p className='py-1 text-teal-800'>React</p>
                <p className='py-1 text-teal-800'>TypeScript</p>
                <p className='py-1 text-teal-800'>TailwindCSS</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default Services
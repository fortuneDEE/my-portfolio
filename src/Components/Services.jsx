import Code from '../assets/images/code.png';
import Consult from '../assets/images/consult.png';
import Design from '../assets/images/design.png';
import Learn from '../assets/images/learn.png';

const Services = () => {
  return (
    <div className='text-center p-10 dark:bg-gray-900'>
        
        <div className='gap-20 justify-center  lg:grid lg:grid-cols-2  dark:text-white'>

            <div className='text-center shadow-lg p-10  rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Code} alt='' className='w-full h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                Web Redesign
                </h3>
                <p className='py-2 text-justify'></p>
                <a href='/phasecurve.com' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 mx-6 rounded-md '>
                    View live website
                </a>
            </div>

            <div className='text-center shadow-lg p-10  rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Design} alt='' className='w-full h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                Web Redesign for an Accounting website 
                </h3>
                <p className='py-2 text-justify'></p>
                <a href='/phasecurve.com' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 mx-6 rounded-md '>
                    View live website
                </a>
            </div>

            <div className='text-center shadow-lg p-10  rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Consult} alt='' className='w-full h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                Website Design for Creatives
                </h3>
                <p className='py-2 text-justify'></p>
                <a href='/phasecurve.com' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 mx-6 rounded-md '>
                    View live website
                </a>
            </div>

            <div className='text-center shadow-lg p-10 flex-1 rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Learn} alt='' className='w-full h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                Advice webapp built with react
                </h3>
                <p className='py-2 text-justify'></p>
                <a href='/phasecurve.com' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 mx-6 rounded-md '>
                    View live website
                </a>
            </div>

            
        </div>
        
    </div>
  )
}

export default Services
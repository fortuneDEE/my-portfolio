import Design from '../assets/images/design.jpg'

const PortFolio = () => {
  return (
    <div className='px-10'>
        <h3 className='text-3xl py-1'>Portfolio</h3>
        <p className='text-md py-5 leading-8 text-gray-800'>
            what i offer in my freelance <span className=' text-teal-500'>career</span> i worked for <span className=' text-teal-500'>startups</span>
        </p>
        <p className='text-md py-5 leading-8 text-gray-800'>
            what i offer in my freelance <span className=' text-teal-500'>career</span> i worked for <span className=' text-teal-500'>startups</span>
        </p>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
                <img src={Design} alt="" className='rounded-lg object-cover'/>
            </div>
            <div className='basis-1/3 flex-1'>
                <img src={Design} alt=""/>
            </div>
            <div className='basis-1/3 flex-1'>
                <img src={Design} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default PortFolio
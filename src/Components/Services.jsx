import Code from '../assets/images/code.jpg';
import Consult from '../assets/images/consulting.jpg';
import Design from '../assets/images/design.jpg';

const Services = () => {
  return (
    <div className='text-center p-10 dark:bg-gray-900'>
        <h3 className='text-3xl py-1 text-teal-600 lg:pt-60'>About Me</h3>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>
        Hello! I'm Fortune Ellah, a passionate and creative Frontend Developer with two years of hands-on experience in crafting delightful web experiences. My journey in the world of web development started with a fascination for the ever-evolving digital landscape, and since then, I've been on an exciting mission to bring ideas to life through HTML, CSS, JavaScript, and modern frameworks like React and TailwindCSS. <span className=' text-teal-500'>career</span> As a frontend developer, I thrive on turning designs into clean, intuitive, and user-friendly interfaces. With a keen eye for detail and a passion for responsive design practices, I take pride in ensuring that every website I create provides an exceptional user experience across various devices and screen sizes.
         <span className=' text-teal-500'>My approach to development is grounded in the Agile methodology, where collaboration, adaptability, and iterative improvements play a pivotal role in delivering top-notch web solutions. I value effective communication with team members and stakeholders, as it fosters a creative and productive work environment.</span>
        </p>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>
        I am a strong advocate for code quality and maintainability. By leveraging my expertise in React and TailwindCSS, I build scalable and modular components, making future enhancements and updates a seamless process. <span className=' text-teal-500'>In my journey as a frontend developer, I have amassed a portfolio of diverse projects, ranging from dynamic web applications to interactive landing pages. Each project has honed my skills, deepened my understanding of industry best practices, and nurtured my love for the art of web development.</span> When I'm not immersed in coding, you can find me exploring the latest trends and emerging technologies in the frontend development realm. I believe in lifelong learning, and I am always eager to stay updated with the latest advancements in the ever-evolving world of web technologies.

            <span className=' text-teal-500'>I am excited about the endless possibilities that lie ahead, and I'm looking forward to collaborating with passionate individuals and innovative teams to build the next generation of exceptional web experiences.</span>
        </p>
        <div className='gap-20 justify-center lg:flex dark:text-white'>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Code} alt='' className='w-1/2 h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                Web Development and Design
                </h3>
                <p className='py-2'>From concept to implementation, I specialize in crafting visually stunning and highly functional websites that align perfectly with your brand and business goals. By combining HTML, CSS, and JavaScript, I create seamless and interactive user interfaces that captivate visitors and keep them engaged.</p>
                <h4 className='py-4 text-teal-600'>Designs i used</h4>
                <p className='py-1 text-teal-800'>React</p>
                <p className='py-1 text-teal-800'>TypeScript</p>
                <p className='py-1 text-teal-800'>TailwindCSS</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Consult} alt='' className='w-1/2 h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                React Development
                </h3>
                <p className='py-2'>Harnessing the power of React, I build dynamic and scalable web applications that offer smooth interactivity and robust performance. My expertise in React allows me to create feature-rich and data-driven applications tailored to your specific needs.</p>
                <h4 className='py-4 text-teal-600'>Designs i used</h4>
                <p className='py-1 text-teal-800'>React</p>
                <p className='py-1 text-teal-800'>TypeScript</p>
                <p className='py-1 text-teal-800'>TailwindCSS</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Design} alt='' className='w-1/2 h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                Responsive Design
                </h3>
                <p className='py-2'>In today's mobile-centric world, I prioritize responsive design practices to ensure that your website looks stunning and functions flawlessly across various devices, including smartphones, tablets, and desktops.</p>
                <h4 className='py-4 text-teal-600'>Designs i used</h4>
                <p className='py-1 text-teal-800'>React</p>
                <p className='py-1 text-teal-800'>TypeScript</p>
                <p className='py-1 text-teal-800'>TailwindCSS</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Design} alt='' className='w-1/2 h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                Code Optimization and Performance
                </h3>
                <p className='py-2'>I believe in the importance of writing clean and optimized code. I ensure that your website not only looks impressive but also performs optimally, providing an exceptional user experience.</p>
                <h4 className='py-4 text-teal-600'>Designs i used</h4>
                <p className='py-1 text-teal-800'>React</p>
                <p className='py-1 text-teal-800'>TypeScript</p>
                <p className='py-1 text-teal-800'>TailwindCSS</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 lg:h-full dark:bg-teal-600'>
                <img src={Design} alt='' className='w-1/2 h-1/2 mx-auto'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                Continuous Learning and Growth
                </h3>
                <p className='py-2'>As a passionate learner, I continually seek out opportunities to expand my skillset and stay ahead of industry trends. By investing in my personal and professional growth, I strive to deliver cutting-edge solutions that exceed expectations.</p>
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
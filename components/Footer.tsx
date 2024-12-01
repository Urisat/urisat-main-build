import React from 'react'
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const date=new Date().getFullYear();
  return (
    <footer className='h-[20%] justify-center items-center'>
      <div className='relative top-0 left-0 overflow-hidden w-full'>
      {/* <svg data-name="Couche 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> 
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-primary-700 bg-gradient-to-r from-primary-300 to-black-1 text-clip"></path> 
    </svg> */}
     <svg data-name="Couche 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> 
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative fill-primary-500"></path> 
    </svg>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center -mt-[90px]  p-20'>
            <div className='flex flex-col mt-5'>
                    <h2 className='text-3xl text-primary-600 mt-0'>Footer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores, corporis recusandae, unde, id voluptates </p>
            </div>
            <div className='flex flex-col'>
                   <ul>
                    <li className='list-none uppercase font-semibold py-4 text-primary-600'>Company</li>
                    <li className='list-none'>Development</li>
                    <li className='list-none'>Website guideline & ideas</li>
                    <li className='list-none'>Photograpy</li>
                    <li className='list-none'>Security</li>
                   </ul>
            </div>
            <div className='flex flex-col'>
                   <ul>
                    <li className='list-none uppercase font-semibold py-4 text-primary-600'>Important Links</li>
                    <li className='list-none'>Development</li>
                    <li className='list-none'>Website guideline & ideas</li>
                    <li className='list-none'>Photograpy</li>
                    <li className='list-none'>Security</li>
                   </ul>
            </div>
            <div className='flex flex-col'>
                   <ul>
                    <li className='list-none uppercase font-semibold py-4 text-primary-600'>Contact</li>
                    
                    <li className='list-none'>Email: urisatinfo@urisat.dev</li>
                    <li className='list-none'>Phone: +243 993 7856 111</li>
                    <li className='list-none'>Photograpy</li>
                   </ul>
                   <div className='flex space-x-4'>
                <a className='text-white hover:text-primary-300 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                    <FaGithub/>
                </a>
                <a className='text-white hover:text-primary-300 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                    <FaLinkedin/>
                </a>
                <a className='text-white hover:text-primary-300 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                    <FaTwitter/>
                </a>
                <a className='text-white hover:text-primary-300 transition-all duration-150 ease-in-out transform hover:scale-150' href="">
                    <FaGoogle/>
                </a>
            </div>
            </div>
        </div>
        <div className='mt-20'>
            <div className='h-full flex items-center justify-center mb-5'>
                <form action="" className='w-96 relative'>
                    <input type="email" placeholder='urisat@urisat.dev' className='w-full text-gray-800 p-4 h-12 rounded-full focus:outline-none focus:border border-primary-300' />
                    <button className='bg-primary-700 text-center px-8 py-2 rounded-full text-primary-50 absolute top-0 right-0'>Submit</button>
                </form>
            </div>
        </div>
      </div>
     
      <div className='text-center'>&copy; Copy right urisat.dev {date}</div>
    </footer>
  )
}

export default Footer

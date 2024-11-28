import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'


const Header = () => {
  return (
    <header className='py-4 w-full  text-white bg-black-1/10'>
          <div className='container  mx-auto  flex justify-between items-center'>
              {/* logo */}
              <Link href='/' className='animate-bounce'>
                  <h1 className="text-4xl font-semibold">
                UriSat <span className="text-primary-700">*</span>
          </h1>
              </Link>
              {/* Desktop Nav */}
              <div className='hidden xl:flex text-white justify-center items-center gap-8 '>
          <Nav />
          <Button  className='bg-primary-700 hover:bg-primary-700/20 text-lg p-2 px-3 border-x-2 border-primary-700 rounded-full'>Explore More</Button>
                 </div>
          </div>
   </header>

  )
}

export default Header
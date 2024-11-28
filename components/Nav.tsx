'use client'
import { links } from '@/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'



const Nav = () => {
    const pathname = usePathname();
  return (
      <div className='flex gap-8 text-primary'>
          {links.map((link,index) => {
              return (
                  <Link key={index} href={link.id} className={`${link.path===pathname && "text-accent text-lg border-b-2 border-accent capitalize font-medium hover:text-accent/20 hover:text-lg transition-all "} hover:text-md rounded-t-md border-b-1 border-t-1  hover:text-accent/50 hover:border-t-2 hover:border-b-2  m-2 border-accent`}>
                    {link.name}
                  </Link>
              );
          })}
              
    </div>
  )
}

export default Nav
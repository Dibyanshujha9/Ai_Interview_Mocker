"use client";

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

const Header = () => {

const path = usePathname();

useEffect(() => {
  console.log(path);
}, []);

  return (
<div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
    <Image src={'/logo.svg'} alt="logo" width={65} height={150} />

<ul className='hidden md:flex gap-6'>
    <li className= {`transition-transform transform text-lg hover:scale-115 hover:text-blue-600  duration-200 cursor-pointer ${path=='/dashboard'&&'text-primary font-bold'}`}>Dashboard</li>
        <li className= {`transition-transform transform text-lg hover:scale-115 hover:text-blue-600  duration-200 cursor-pointer ${path=='/dashboard/questions'&&'text-primary font-bold'}`}>Questions</li>
    <li className= {`transition-transform transform text-lg hover:scale-115 hover:text-blue-600  duration-200 cursor-pointer ${path=='/dashboard/upgrade'&&'text-primary font-bold'}` }>Upgrade</li>
    <li className= {`transition-transform transform text-lg hover:scale-115 hover:text-blue-600  duration-200 cursor-pointer ${path=='/dashboard/how'&&'text-primary font-bold'}`}>How it Works?</li>
</ul>

<UserButton />
</div>
)
}

export default Header
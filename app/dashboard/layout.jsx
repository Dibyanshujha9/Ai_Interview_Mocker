import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import Header from './_components/Header'

const layout = ({children}) => {
  return (
<div>
  <Header />
  <div className='mx-5 md:mx-20 lg:mx-36'>
    {children}
  </div>
</div>
)
}

export default layout
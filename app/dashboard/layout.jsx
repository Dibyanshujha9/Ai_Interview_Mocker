import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import Header from './_components/Header'

const layout = ({children}) => {
  return (
<>
<Header />
{children}
</>
)
}

export default layout
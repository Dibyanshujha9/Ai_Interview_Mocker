import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardLayout = () => {
  return (
    <div >
        <h3>Welcome ! 
          <UserButton />
        </h3>
    </div>
  )
}

export default DashboardLayout
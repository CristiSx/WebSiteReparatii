import React from 'react'
import NavBar from '../UI/HomePage/NavBar'
import General from '../UI/HomePage/General'
const home = () => {
  return (
   <>
   <div className='flex bg-[#F9FAFB] flex-col h-screen'>
        <NavBar />
        <General />
        
   </div>
   </>
  )
}

export default home
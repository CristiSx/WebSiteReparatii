import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className="flex flex-line justify-around bg-[#FFFFFF] text-black p-4">
        <h1 className="text-2xl">WebSiteName&L</h1>
        <nav className='flex  ' >
            <ul className="flex space-x-4">
                <li className='mr-8'><a href="/">Home</a></li>
                <li className='mr-8'><a href="/about">About</a></li>
                <li className='mr-8'><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>

    </>
  )
}

export default NavBar
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center h-12'>
        <h1 className='text-2xl'>
            Laxman
        </h1>
        <div className="flex justify-around items-center gap-8">
            <a href="#about" className="p-3 transition-all duration-300 ease-in-out hover:bg-black hover:rounded hover:text-white">About</a>
            <a href="#projects" className="p-3 hover:bg-gray-300 rounded text-black">Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="p-3 bg-[tomato] hover:bg-red-500 rounded text-white">Resume</a>
        </div>
    </div>
  )
}

export default Header
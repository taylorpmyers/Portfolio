import React, { useState } from "react"
import { a } from 'gatsby'
import Socials from './Socials'

function Navbar({ siteTitle }) {

  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav className="flex items-center justify-center sticky top-0 z-50 flex-wrap bg-blue-800 py-3 mb-10 sm:mb-20">
      <div className="flex flex-wrap w-full sm:max-w-3xl">
        <div className="flex items-center text-white">
          <span className="font-semibold text-2xl hover:text-purple-300 text-white tracking-widest ml-4"><a className="font-serif" href="#home">Taylor Myers</a></span>
        </div>
        <div className="ml-auto block sm:hidden">
          <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center mr-2 px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className={`${isExpanded ? `block` : `hidden`} w-full sm:block flex-wrap sm:w-auto sm:m-auto`}>
          <a href="#home" className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-purple-300 ml-4">Home</a>
          <a href="#projects" className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-purple-300 ml-4">Projects</a>
          <a href="#contact" className="block mt-4 sm:inline-block sm:mt-0 text-white hover:text-purple-300 ml-4">Contact</a>
        </div>
        <div style={{ width: "194px" }} className={`${isExpanded ? `block` : `hidden`} sm:block mt-2 flex sm:items-center w-full sm:w-auto `}>
          <Socials />
        </div>
      </div>
    </nav>
  )
}


export default Navbar
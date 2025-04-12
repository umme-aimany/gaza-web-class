import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-800">Voices of Gaza</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-red-600 font-medium">Home</Link>
          <Link to="/stories" className="text-gray-700 hover:text-red-800 font-medium">Stories</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-800 font-medium">About</Link>
          <Link to="/donate" className="text-white bg-red-800 px-4 py-2 rounded hover:bg-red-700 transition">Donate</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

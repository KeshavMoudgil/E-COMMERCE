import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="w-full bg-white shadow-md fixed top-0 left-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              E-COMMERCE
            </Link>
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
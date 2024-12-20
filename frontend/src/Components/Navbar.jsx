import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-violet-900 text-white shadow-2xl shadow-stone-500 w-screen p-3'>
          <div className=" container w-full m-auto flex justify-between gap-8">
              <div className="navbar-logo">
                  <h1 className='text-2xl font-bold'>Todo-List</h1>
              </div>
              <ul className="nav flex gap-11 text-xl cursor-pointer">
                  <li className="hover:font-bold">Home</li>
                  <li className="hover:font-bold">Todo</li>
                  <li className="hover:font-bold">About</li>
              </ul>
        </div>
    </div>
  )
}

export default Navbar

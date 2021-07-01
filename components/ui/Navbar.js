import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className=' flex flex-wrap items-center  px-3 py-5 bg-transparent mb-2'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full  flex  lg:w-auto'>
            <a
              className='font-logo inline-block pt-5 px-8 whitespace-nowrap text-white text-5xl'
              href='#'
            >
              JobDesk
            </a>
          </div>

          <ul className='flex flex-col lg:flex-row list-none'>
            <li className='nav-item'>
              <a
                className='px-10 pt-10 flex items-center text-2xl text-white hover:opacity-75'
                href='#'
              >
                <span>Home</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='px-10 pt-10 flex items-center text-2xl text-white hover:opacity-75'
                href='#'
              >
                <span>Jobs</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='px-10 pt-10 flex items-center text-2xl text-white hover:opacity-75'
                href='#'
              >
                <span>Salary Prediction</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

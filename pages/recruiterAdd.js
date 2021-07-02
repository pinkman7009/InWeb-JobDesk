import React, { useState, useEffect } from 'react'
import Navbar from '../components/ui/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import addImage from '../public/addButton.svg'

const recruiterAdd = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='bg-gradient-to-b from-blue-900  to-cyan-400 min-h-screen w-screen pb-6'>
      <Navbar />
      <div className='container px-10'>
        <a
          className='h-12 w-1/6 rounded-lg flex items-center justify-center text-white bg-primary px-15 float-right'
          onClick={() => setShowModal(true)}
        >
          <Image width={30} height={30} src={addImage} alt='add' /> Add New Job
        </a>
      </div>
      <br />
      <br />
      <div className='container px-10'>
        <hr className='mt-5 mb-5 flex items-center justify-center' />
        <p className='h-12 w-1/6 p-5 flex items-center justify-center border border-white-600 text-white rounded-lg float-middle mx-auto'>
          Your Posted Jobs
        </p>
      </div>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto  mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='flex items-start justify-between p-3 border-b border-solid border-blueGray-300 rounded-t'>
                  <h3 className='text-2xl font-semibold flex items-center justify-center mx-auto'>
                    Job Form
                  </h3>
                </div>
                <div className='relative p-6 flex-auto'>
                  <form action=''>
                    <div className='w-full mt-3'>
                      <label className='text-primary'>Company Name</label>
                      <input
                        type='text'
                        placeholder='Company Name'
                        className='w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg'
                      />
                    </div>
                    <div className='w-full mt-3'>
                      <label className='text-primary'>Role Type</label>
                      <input
                        type='text'
                        placeholder='Frontend Developer'
                        className='w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg'
                      />
                    </div>
                    <div className='w-full mt-3'>
                      <label className='text-primary'>Job Type</label>
                      <input
                        type='text'
                        placeholder='Full Time / Part Time / Internship'
                        className='w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg'
                      />
                    </div>
                    <div className='w-full mt-3'>
                      <label className='text-primary'>Location</label>
                      <input
                        type='text'
                        placeholder='Kolkata'
                        className='w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg'
                      />
                    </div>
                    <div className='w-full mt-3'>
                      <label className='text-primary'>Job Description</label>
                      <textarea
                        row='8'
                        cols='50'
                        placeholder='Frontend JavaScript engineers to work on new technology stack including ReactJS, Redux. Write web application code following best practices of accessibility ...'
                        className='w-full focus:outline-none focus:bg-white h-3/5 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg'
                      />
                    </div>
                  </form>
                </div>
                <div className='flex items-center justify-end p-6 mt-0'>
                  <button
                    className='text-red background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className='bg-primary text-white active:bg-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </div>
  )
}

export default recruiterAdd

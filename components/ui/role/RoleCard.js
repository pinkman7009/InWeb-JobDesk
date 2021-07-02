import React from 'react'

const RoleCard = () => {
  return (
    <div className='grid grid-cols-3 mt-12 grid gap-6 sm:w-full lg:w-4/5 2xl:w-4/5 mx-auto h-auto'>
      <div className='bg-white h-auto rounded-lg p-3 text-primary flex flex-col'>
        <div>
          <h2 className='text-2xl font-bold'>Full Stack Web devloper</h2>
        </div>
        <div className='w-full mt-3 border-b-2 border-primary'></div>

        <div className='mt-3'>
          <div className='text-2xl'>Soumik chaudhuri</div>

          <div className='flex mt-3'>
            <div className='rounded-2xl w-1/4 bg-blue-300 text-white  text-sm p-1 font-bold flex mr-3 items-center justify-center '>
              Full Time
            </div>
          </div>
        </div>

        <div className='flex mt-3'>
          <p className='font-bold mr-3'>Email</p>
          <p>soumik.chaudhuri2000@gmail.com</p>
        </div>

        <div className='flex mt-3'>
          <p className='font-bold mr-3'>Phone No.</p>
          <p>9876543210</p>
        </div>

        <div className='flex mt-3'>
          <p className='font-bold mr-3'>Age</p>
          <p>19</p>
        </div>

        <div className='mt-3'>
          <p className='font-bold mr-3'>Bio</p>
          <p className='mt-3'>
            {' '}
            Statistical Analysis Minimum Experience : 2 years hands on
            experience in developing Tableau dashboards Education : Bachelor's /
            Master's degree in statistics / economics ...
          </p>
        </div>

        <div className='flex w-full my-auto '>
          <a
            href={'#'}
            type='submit'
            target='__blank'
            className='h-14 w-2/5 rounded-lg mt-12 mx-auto flex items-center justify-center text-white bg-primary'
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default RoleCard

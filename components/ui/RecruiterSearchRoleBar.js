import React from 'react'
import magnify from '../../public/recruiterMagnify.svg'
import Image from 'next/image'

const RecuriterSearchRoleBar = ({
  roleSearch,
  setRoleSearch,
  handleSearchClick,
}) => {
  return (
    <div className='h-16 w-3/5 bg-white mx-auto rounded-lg flex items-center justify-between'>
      <div className='w-3/5 h-full flex items-center'>
        <Image width={25} height={25} src={magnify} alt='magnify' />
        <input
          type='text'
          className='h-full w-full focus:outline-none ml-3 text-blue text-lg'
          value={roleSearch}
          onChange={(e) => setRoleSearch(e.target.value)}
          placeholder='Search Role'
        />
      </div>
      <button
        className='h-16 w-1/6 rounded-r-lg flex items-center justify-center text-white bg-primary'
        onClick={handleSearchClick}
      >
        <Image width={30} height={30} src={magnify} alt='magnify' />
      </button>
    </div>
  )
}

export default RecuriterSearchRoleBar

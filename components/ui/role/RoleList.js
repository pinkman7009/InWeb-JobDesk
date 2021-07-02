import React from 'react'
import RoleCard from './RoleCard'

const RoleList = ({ roles }) => {
  return (
    <div className='grid grid-cols-3 mt-12 grid gap-6 sm:w-full lg:w-4/5 2xl:w-4/5 mx-auto h-auto'>
      {roles.length === 0 ? (
        <p className='mx-auto text-xl text-white'>No results found</p>
      ) : (
        roles?.map((role) => <RoleCard key={role.id} role={role} />)
      )}
    </div>
  )
}

export default RoleList

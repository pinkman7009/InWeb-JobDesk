import React, { useState, useEffect } from 'react'
import Navbar from '../components/ui/Navbar'
import RecuriterSearchRoleBar from '../components/ui/RecruiterSearchRoleBar'
import RoleList from '../components/ui/role/RoleList'
import Loader from '../components/ui/Loader'
import RoleCard from '../components/ui/role/RoleCard'

const recruiterHome = () => {
  return (
    <div className='bg-gradient-to-b from-blue-900  to-cyan-400 min-h-screen w-screen pb-6'>
      <Navbar />

      <RecuriterSearchRoleBar />

      {/* <RoleCard /> */}

      {/* {loading === true ? (
        <Loader loading={true} />
      ) : (
        roles && <RoleList roles={role} />
      )} */}
    </div>
  )
}

export default recruiterHome

import React from 'react'
import Salary from '../components/ui/Salary'
import salaryImg from '../public/salary.png'
import Navbar from '../components/ui/Navbar'
import Image from 'next/image'

const salary = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-blue-900  to-cyan-400 h-screen w-screen'>
        <Navbar />
        <div className='w-4/5 h-4/5 mx-auto flex justify-center items-center'>
          <div className='w-1/4 h-full bg-darkblue rounded-l-lg p-5 flex justify-center items-center'>
            <Image height={200} width={250} src={salaryImg} alt='salaryImg' />
          </div>
          <div className='w-3/4 h-full'>
            <Salary />
          </div>
        </div>
      </div>
    </>
  )
}

export default salary

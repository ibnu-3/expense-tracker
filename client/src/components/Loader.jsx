import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center h-screen '>
        <div className='w-12 h-12 border-b-2 border-blue-600 rounded-full animate-spin'></div>
    </div>
  )
}

export default Loader
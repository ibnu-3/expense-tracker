import React from 'react'
import { MdCancel } from 'react-icons/md'

const IncomeModal = ({handleModel}) => {
  return (
    <div className='flex items-center justify-center inset-0 z-50 h-screen fixed bg-black/60'>
        <div className='flex flex-col w-[60%] bg-white p-4 rounded-md'>
            <div className='flex justify-between items-center '>
                <h1 className='text-xl font-bold'>Add Income</h1>
                <MdCancel  onClick={handleModel} className='cursor-pointer' size={25}/>
            </div>
            <div className='mt-4'>
                <label htmlFor="Source" className='block mb-2'>Income Source:</label>
                <input type="text" placeholder='Finance, salary, etc.' className='px-4 py-2 rounded-md border bg-slate-200 w-full' />
            </div>
            <div className='mt-4'>
                <label htmlFor="Amount" className='block mb-2'>Income Amount:</label>
                <input type="number"  className='px-4 py-2 rounded-md border bg-slate-200 w-full' />
            </div>
            <div className='mt-4'>
                <label htmlFor="Date" className='block mb-2'>Income Date:</label>
                <input type="date" className='px-4 py-2  w-full cursor-pointer rounded-md border bg-slate-200' />
            </div>
            <button className=' px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-800 text-slate-50 my-3 w-36'>Add Income</button>
        </div>
    </div>
  )
}

export default IncomeModal
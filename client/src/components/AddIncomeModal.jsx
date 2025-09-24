import React, { useState } from 'react'

const AddIncomeModal = () => {
    const [source,setSource]=useState('')
    const [amount,setAmount]=useState(0)
    const [date,setDate]=useState('')
  return (
    <div className='fixed inset-0 flex items-cneter justify-center h-screen '>
        <div className='p-2 '>
            <form >
                <div className='mb-4'>
                    <label htmlFor="Source" className='block mb-2'>Source</label>
                    <input type="text" placeholder='Freelance, Salary ...' className='px-4 py-2 rounded-md bg-slate-300 'value={source} onChange={(e)=>setSource(e.target.value)} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="Amount" className='block mb-2'>Amount</label>
                    <input type="number" placeholder='' className='px-4 py-2 rounded-md bg-slate-300 'value={amount} onChange={(e)=>setAmount(e.target.value)} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="Date" className='block mb-2'>Date</label>
                    <input type="date" placeholder='' className='px-4 py-2 rounded-md bg-slate-300 'value={date} onChange={(e)=>setDate(e.target.value)} />
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddIncomeModal
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import useExpenseTracker from '../context/useExpenseTracker'

const AddIncomeModal = ({open, onClose}) => {
    const [source,setSource]=useState('')
    const [amount,setAmount]=useState(0)
    const [date,setDate]=useState('')
    const {addIncome}=useExpenseTracker();

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            await addIncome(source,amount,date)
            onClose()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='fixed inset-0 flex items-center justify-center  bg-slate-800/50 backdrop-blur-sm'>
        <div className='p-4 rounded-md bg-white w-[60%] relative'>
            <div className='absolute  text-3xl text-slate-800 rounded-md -right-5 bg-slate-100 -top-5 ' onClick={onClose}>
                <MdClose/>
            </div>
            <form onSubmit={handleSubmit}>
                <h1 className='text-center  text-2xl  py-4'>Add New Income</h1>
                <div className='mb-4'>
                    <label htmlFor="Source" className='block mb-2'>Source</label>
                    <input type="text" placeholder='Freelance, Salary ...' className='px-4 py-2 w-full rounded-md bg-slate-300 'value={source} onChange={(e)=>setSource(e.target.value)} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="Amount" className='block mb-2'>Amount</label>
                    <input type="number" placeholder='' className='px-4 py-2 w-full rounded-md bg-slate-300 'value={amount} onChange={(e)=>setAmount(e.target.value)} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="Date" className='block mb-2'>Date</label>
                    <input type="date" placeholder='' className='px-4 py-2 w-full rounded-md bg-slate-300 'value={date} onChange={(e)=>setDate(e.target.value)} />
                </div>
                <button className='px-5 py-2 rounded-md bg-purple-600 text-slate-200 w-full mt-4' type='submit'>Add Income</button>
            </form>
        </div>
    </div>
  )
}

export default AddIncomeModal
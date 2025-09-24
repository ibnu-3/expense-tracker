import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import useExpenseTracker from '../context/useExpenseTracker'
import { MdAdd, MdDelete, MdOutlinePayment, MdPlusOne, MdTrendingUp } from 'react-icons/md'
import AddIncomeModal from '../components/AddIncomeModal'
import moment from 'moment'
import Loader from '../components/Loader'
const Income = () => {
  const {incomes ,deleteIncome} =useExpenseTracker()
  const [open, setOpen]=useState(false)
      const [error,setError]=useState('')
      const [loading,setLoading]=useState(false)
const handleOpen=()=>{
  setOpen(!open)
}
  return (
    <DashboardLayout activeMenu={'Income'}>
      <div className="mt-4 bg-white p-2 rounded-md">
        <div className='flex items-center justify-between py-4'>
          <h1 className='py-2 font-bold'>Incomes</h1>
          <button onClick={handleOpen} className='px-2 py-1  rounded-md bg-purple-600 text-slate-50 hover:bg-purple-700 flex items-center justify-between text-sm'>Add Income</button>
        </div>
       {open &&  <AddIncomeModal open ={open} onClose={()=>setOpen(false)}/>}
        {loading ? (<Loader />):(
          <div>
          {incomes.length === 0 ? (
<p>No Incomes added yet.</p>
          ):(
            <ul className='space-y-5'>
          {incomes.map((item, index)=>(
            <li key={`income${index}`} className='flex items-center justify-between'>
              
              <div className='flex items-center'>
                 <div className='bg-green-600 text-slate-100 rounded-full p-1.5'>
                <MdOutlinePayment/>
              </div>
              <div>
                <h1 className='font-bold pl-2 '>{item.source}</h1>
                <p className='text-slate-500 text-xs px-2 leading-3'>{moment(item.date).format('MMM D, YYYY')}</p>
              </div>
              </div>
              
             <div className='flex items-center gap-3'>
               <button className='px-3 py-1.5 bg-green-50 text-green-600 rounded-md flex items-center gap-2  max-sm:
               text-sm '>+${item.amount}<MdTrendingUp/></button>  
              <MdDelete className='text-red-600 cursor-pointer ' onClick={()=>deleteIncome(item._id)}/>  </div>        

            </li>
          ))}
        </ul>
          )}
        </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default Income
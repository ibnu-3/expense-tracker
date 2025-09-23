import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import DashboardLayout from '../components/DashboardLayout'
import axiosInstance from '../utils/axiosInstance'
import { MdAllInclusive } from 'react-icons/md'

const Dashboard = () => {
  const [incomes,setIncomes] =useState([])
  const [expenses,setExpenses] =useState([])

  useEffect(()=>{
    const fetchData =async () => {
      try {
        const incomeResponse = await axiosInstance.get('/api/incomes')
        const expenseResponse = await axiosInstance.get('/api/expenses')
        setIncomes(incomeResponse.data)
        setExpenses(expenseResponse.data)
        
      } catch (error) {
        console.log(error.message || 'failed to fetch data')
      }
    };
    fetchData();
  },[]);
  const totalIncome = incomes.reduce((acc, transaction)=> {
    return acc + transaction.amount
  },0)
  const totalExpense = expenses.reduce((acc,trans)=> acc + trans.amount, 0)
  console.log(totalIncome);
  console.log({ te:totalExpense});
  const totalBalance =totalIncome - totalExpense;
  return (
    <DashboardLayout activeMenu={'Dashboard'}>
       <div>
        <div className='p-2 rounded-md bg-white flex-1 flex items-center'>
          <div className='p-1.5 rounded-full bg-purple-500 '>
            <MdAllInclusive />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold'>Total Balance</h1>
          <p className='text-slate-500'>$ {totalBalance.toFixed(2)}</p>
    
          </div>

        </div>
       </div>
    </DashboardLayout>
  )
}

export default Dashboard
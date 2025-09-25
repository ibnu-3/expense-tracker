import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import useExpenseTracker from '../context/useExpenseTracker'
import ExpenseBarChart from '../components/Expense/ExpenseBarChart'
import ExpenseCard from '../components/Expense/ExpenseCard'

const Expense = () => {
  const {last60DaysExpenses, expenses}=useExpenseTracker()
  return (
    <DashboardLayout activeMenu={'Expense'}>
      <div className="mt-4 mx-auto p-3">
        <div className="h-[450px] bg-white w-full p-3 rounded-md">
          <h1 className='font-bold text-xl '>Last 60 days Expense Overview</h1>
          <ExpenseBarChart expenseData={last60DaysExpenses}/>          
        </div>
       {expenses.length ===0 ? (
        <p className='text-slate-500 p-3'>No expenses is found!</p>
       ):(
         <ExpenseCard expenses={expenses}/>
       )}
      </div>
    </DashboardLayout>
  )
}

export default Expense
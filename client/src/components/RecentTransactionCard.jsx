import React from 'react'
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import moment from 'moment'
import { MdOutlinePayment } from "react-icons/md";
const RecentTransactionCard = ({item}) => {
  return (
    <div className='p-3 mx-auto flex items-center justify-between '>
        <div className='flex gap-3 px-3'>
            <div className='bg-slate-200 w-14 h-14 rounded-full flex items-center justify-center'>
                <MdOutlinePayment />
            </div>
            <div className='flex flex-col '>
                <h1 className='capitalize'>{item.type === 'income'? item.source : item.category}</h1>
                <h1 className='text-slate-500 text-xs'>{moment(item.date).format('YYYY-MM-DD')}</h1>
            </div>
        </div>
        <div className={`flex items-center gap-3 px-3 py-1 rounded-md ${item.type === 'income'? 'bg-green-50 text-green-600':'text-red-600 bg-red-50'}`}>{item.type ==='income' ? '+':'-'}${item.amount}{item.type ==='income' ?  <FaArrowTrendUp/> :<FaArrowTrendDown />  } </div>

    </div>
  )
}

export default RecentTransactionCard
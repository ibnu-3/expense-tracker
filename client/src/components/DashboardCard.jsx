import React from 'react'

const DashboardCard = ({icon, amount, label,color}) => {
  return (
    <div className='flex gap-6 bg-white rounded-2xl shadow-md p-6 hover:bg-slate-100'>
        <div className={`${color} text-white rounded-full w-10 h-10 flex items-center justify-center  `}>
        {icon}
        </div>
        <div >
            <h1 className='block text-slate-500 '>{label}</h1>
            <p>${amount}</p>
        </div>
    </div>
  )
}

export default DashboardCard
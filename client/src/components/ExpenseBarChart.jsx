import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ExpenseBarChart = ({data}) => {
//     const data=[
//         {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//     ]
  return (
    <div className='h-[400px] w-full '>
<ResponsiveContainer width="100%" height="90%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={data.category} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={data.amount} fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
             </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default ExpenseBarChart
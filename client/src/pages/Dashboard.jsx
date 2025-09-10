import { MdAccountBalanceWallet } from "react-icons/md";
import DashboardLayout from '../layouts/DashboardLayout'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <DashboardLayout activeMenu='Dashboard'>
     <div>
      <MdAccountBalanceWallet size={25} className=""/>
      <div className="flex flex-col gap-3">
        <p className="text-slate-500">total balance</p>
        <p className="text-slate-700 font-extrabold ">$2345</p>
      </div>
     </div>
    </DashboardLayout>
  )
}

export default Dashboard
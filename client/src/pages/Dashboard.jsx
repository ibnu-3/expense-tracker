import { MdAccountBalanceWallet } from "react-icons/md";
import DashboardLayout from "../layouts/DashboardLayout";
import { data, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  const [data, setData]=useState({})
  useEffect(()=>{
    const fetchDashboardData =async () => {
      try {
        const response = await axiosInstance.get('/dashboard')
        console.log(response.data)
        setData(response.data);
      
      } catch (error) {
        // setError(error.response?.data?.message)
        console.log(error.response?.data?.message)
      }
    }
    fetchDashboardData()
  },[])

  return (
    <DashboardLayout activeMenu="Dashboard">
  
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
          <DashboardCard  icon={<MdAccountBalanceWallet />} amount={data.totalBalance} label='Total Balance' color='bg-purple-500'/>
          <DashboardCard  icon={<MdAccountBalanceWallet />} amount={data.totalIncome} label='Total Income' color='bg-orange-500'/>
          <DashboardCard  icon={<MdAccountBalanceWallet />} amount={data.totalExpense} label='Total Expense' color='bg-yellow-500'/>
        
      </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

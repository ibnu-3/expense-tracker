import { MdAccountBalanceWallet } from "react-icons/md";
import DashboardLayout from "../layouts/DashboardLayout";
import { data, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

const Dashboard = () => {
  const [datae, setDatae]=useState({})
  useEffect(()=>{
    const fetchDashboardData =async () => {
      try {
        const response = await axiosInstance.get('/dashboard')
        console.log(response.data)
        const data =response.data;
      } catch (error) {
        // setError(error.response?.data?.message)
        console.log(error.response?.data?.message)
      }
    }
    fetchDashboardData()
  },[])
  console.log(data.totalIncome)
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="block lg:flex space-y-5 items-center justify-between gap-5 my-6  rounded-md ">
        <div className="flex gap-5 p-3 bg-white rounded-md">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-600">
            <MdAccountBalanceWallet size={30} className="" />
          </div>
          <div className="flex flex-col ">
            <p className="text-slate-500">total balance</p>
            <p className="text-slate-700 font-bold leading-6 text-xl ">$2345</p>
          </div>
        </div>
        <div className="flex gap-5 p-3 bg-white rounded-md flex-grow ">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-600">
            <MdAccountBalanceWallet size={30} className="" />
          </div>
          <div className="flex flex-col ">
            <p className="text-slate-500">total balance</p>
            <p className="text-slate-700 font-bold leading-6 text-xl ">$2345</p>
          </div>
        </div>
        <div className="flex gap-5 p-3 bg-white rounded-md ">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-600">
            <MdAccountBalanceWallet size={30} className="" />
          </div>
          <div className="flex flex-col ">
            <p className="text-slate-500">total balance</p>
            <p className="text-slate-700 font-bold leading-6 text-xl ">$2345</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

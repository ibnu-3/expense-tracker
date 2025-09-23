import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DashboardLayout from "../components/DashboardLayout";
import axiosInstance from "../utils/axiosInstance";
import {
  MdAllInclusive,
  MdOutlinePayment,
  MdOutlinePayments,
} from "react-icons/md";
import BarChart from "../components/BarChart";

const Dashboard = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const incomeResponse = await axiosInstance.get("/api/incomes");
        const expenseResponse = await axiosInstance.get("/api/expenses");
        setIncomes(incomeResponse.data);
        setExpenses(expenseResponse.data);
      } catch (error) {
        console.log(error.message || "failed to fetch data");
      }
    };
    fetchData();
  }, []);
  const totalIncome = incomes.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
  const totalExpense = expenses.reduce((acc, trans) => acc + trans.amount, 0);

  const totalBalance = totalIncome - totalExpense;
  return (
    <DashboardLayout activeMenu={"Dashboard"}>
      <div className="">
        <div className="flex flex-wrap items-center gap-6 ">
          <div className="p-2  rounded-md bg-white flex-1 flex items-center gap-3">
            <div className="p-2.5  rounded-full bg-purple-500 ">
              <MdAllInclusive size={30} />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-slate-500 ">Total Balance</h1>
              <p className="font-semibold ">${totalBalance}</p>
            </div>
          </div>
          <div className="p-2  rounded-md bg-white flex-1 flex items-center gap-3">
            <div className="p-2.5  rounded-full bg-teal-500 ">
              <MdOutlinePayment size={30} />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-slate-500 ">Total Income</h1>
              <p className="font-semibold ">${totalIncome}</p>
            </div>
          </div>
          <div className="p-2  rounded-md bg-white flex-1 flex items-center gap-3">
            <div className="p-2.5  rounded-full bg-pink-500 ">
              <MdOutlinePayments size={30} />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-slate-500 ">Total Expense</h1>
              <p className="font-semibold ">${totalExpense}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-md bg-white p-2 max-w-96 ">
          <h1 className="font-bold text-center  ">Total Overview</h1>
          <BarChart totalExpense={totalExpense} totalIncome={totalIncome} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import useExpenseTracker from "../context/useExpenseTracker";
import {
  MdAdd,
  MdDelete,
  MdEdit,
  MdOutlinePayment,
  MdPlusOne,
  MdTrendingUp,
} from "react-icons/md";
import AddIncomeModal from "../components/AddIncomeModal";
import moment from "moment";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import IncomeCard from "../components/IncomeCard";
import IncomeBarChart from "../components/Income/IncomeBarChart";
const Income = () => {
  const { incomes,last30DaysIncomes } = useExpenseTracker();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <DashboardLayout activeMenu={"Income"}>
      <div className=" px-3 sm:px-8  rounded-md max-w-3xl sm:mx-auto ">
        <div className="flex items-center justify-between py-4">
          <h1 className="py-2 font-bold"></h1>
          <button
            onClick={handleOpen}
            className="px-2 py-1  rounded-md bg-purple-600 text-slate-50 hover:bg-purple-700 flex items-center justify-between text-sm"
          >
            Add Income
          </button>
        </div>
        {open && <AddIncomeModal open={open} onClose={() => setOpen(false)} />}
          
        {loading ? (
          <Loader />
        ) : (
          <>
          <div className="my-4 h-[450px]  w-full bg-white p-2 rounded-md z-20">
            <h1 className="font-bld px-3">Last 30 Days Income</h1>
            <IncomeBarChart incomeData={last30DaysIncomes}/>           

          </div>
          <div className="bg-white rounded-md p-4">
            <h1 className="py-6 px-3 text-xl  font-bold ">All Incomes</h1>
            {incomes.length === 0 ? (
              <p>No Incomes added yet.</p>
            ) : (
              <ul className="space-y-5">
                {incomes.map((item, index) => (
                  <IncomeCard key={index} item={item} />
                ))}
              </ul>
            )}
          </div></>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Income;

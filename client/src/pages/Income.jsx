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
const Income = () => {
  const { incomes, deleteIncome } = useExpenseTracker();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <DashboardLayout activeMenu={"Income"}>
      <div className="mt-4 bg-white px-6 sm:px-8 py-4 rounded-md max-w-3xl mx-auto">
        <div className="flex items-center justify-between py-4">
          <h1 className="py-2 font-bold">Incomes</h1>
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
          <div>
            {incomes.length === 0 ? (
              <p>No Incomes added yet.</p>
            ) : (
              <ul className="space-y-5">
                {incomes.map((item, index) => (
                  <IncomeCard key={index} item={item} />
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Income;

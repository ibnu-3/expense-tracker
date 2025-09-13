import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import axiosInstance from "../utils/axios";

const IncomeModal = ({isOpen, onClose, onIncomeAdded}) => {
  const [amount, setAmount] = useState(0);
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
     setError('');
    setLoading(true);
    if (!amount || !source || !date) {
      console.log("All fields are required");
      return;
    }
    try {
          const response = await axiosInstance.post("/incomes", { amount: parseFloat(amount),source,date});
          if(response.data === 200){
            onIncomeAdded(response.data);
            console.log(response.data)
            onClose()
          }
        } catch (error) {
            console.log(error.response?.data?.message)
        }
  };  
  return (
    <div className="flex items-center justify-center inset-0 z-50 h-screen fixed bg-black/60">
      <div className="flex flex-col w-[60%] bg-white p-4 rounded-md">
        <div className="flex justify-between items-center ">
          <h1 className="text-xl font-bold">Add Income</h1>
          <MdCancel
            onClick={handleModel}
            className="cursor-pointer"
            size={25}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="Source" className="block mb-2">
              Income Source:
            </label>
            <input
              type="text"
              placeholder="Finance, salary, etc."
              value={source}
              onChange={(e)=>setSource(e.target.value)}
              className="px-4 py-2 rounded-md border bg-slate-200 w-full"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="Amount" className="block mb-2">
              Income Amount:
            </label>
            <input
              type="number"
               value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              className="px-4 py-2 rounded-md border bg-slate-200 w-full"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="Date" className="block mb-2">
              Income Date:
            </label>
            <input
              type="date"
               value={date}
              onChange={(e)=>setDate(e.target.value)}
              className="px-4 py-2  w-full cursor-pointer rounded-md border bg-slate-200"
            />
          </div>
        </form>
        <button
          type="submit"
          onClick={handleModel}
          className=" px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-800 text-slate-50 my-3 w-36"
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default IncomeModal;

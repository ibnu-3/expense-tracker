import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import axiosInstance from "../utils/axios";
import IncomeCard from "../components/IncomeCard";
import Loader from "../components/Loader";
import IncomeModal from "../modals/IncomeModal";
import { useNavigate } from "react-router-dom";

const Income = () => {  
  const [incomes, setIncomes]=useState([])
  const [loading, setLoading]=useState(false)
  const [open, setOpen]=useState(false)
  const navigate = useNavigate()
  const handleModel=()=>{
    setOpen(!open)
  }
  useEffect(()=>{
   const fetchIncomes = async () => {
     try {
      setLoading(true)
      const response = await axiosInstance.get('/incomes')
      console.log(response.data)
      setIncomes(response.data)
    } catch (error) {
      console.log(error.response?.data?.message)
    }finally{
      setLoading(false)
    }
   };
   fetchIncomes()
  },[])
  const addIncome = async (incomeData) => {
    setIncomes([...incomes, incomeData])
    setOpen(false)
  }
  
  return (
    <DashboardLayout activeMenu={"Income"}>
     {open &&  <IncomeModal  isOpen={open} onClose={()=>setOpen(false)} onIncomeAdded={addIncome} />}
      <div className="flex items-center justify-between my-5 rounded-md p-5 mx-auto bg-white gap-4">
        <div>
          <h1 className="block font-semibold">Income OverView</h1>
          <p className="text-slate-500 text-sm">
            Track your earning over time and analyze your income trends.
          </p>
        </div>
        <div>
          <button onClick={handleModel} className="hidden sm:flex px-3 py-1 font-bold text-sm items-center  rounded-md border bg-purple-50  text-purple-600 hover:text-purple-700 hover:bg-purple-100">
         + Add Income
        </button>
          <button className=" px-3 py-1 font-bold text-xl sm:hidden rounded-md border bg-purple-50  text-purple-600 hover:text-purple-700 hover:bg-purple-100">
         + 
        </button>
       
        </div>
      </div>
      <div className="my-5 mx-auto bg-white rounded-md ">
        <div className="flex items-center justify-between p-3">
          <h1 className="font-medium text-xl ">Incomes Sources</h1>
         
        </div>
       {loading ?( <>
       <p className="text-center py-4 text-slate-500 ">Income loading please wait...</p>
       <Loader/>
       </>):(
        <>
         {incomes.length === 0 ? (
          <p className="text-slate-500 p-6 italic text-sm">
            No incomes added yet.
          </p>
        ) : (
          <>
            {incomes.map((item, index) => (
              <ul className="" key={index}>
                <li>
                  <IncomeCard item={item} />
                </li>
              </ul>
            ))}
          </>
        )}</>
       )}
      </div>
    </DashboardLayout>
  );
};

export default Income;

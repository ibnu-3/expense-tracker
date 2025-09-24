import { useEffect, useState } from "react"
import { AppContext } from "./useExpenseTracker"
import axiosInstance from "../utils/axiosInstance";

export const AppProvider =({children})=>{
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [last60DaysExpenses, setLast60DaysExpenses] = useState([]);
  const [last30DaysIncomes, setLast30DaysIncomes] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const incomeResponse = await axiosInstance.get("/api/incomes");
        const expenseResponse = await axiosInstance.get("/api/expenses");
        const last60DaysExpenseResponse = await axiosInstance.get(
          "/api/expenses/last60DaysExpense"
        );
        const last30DaysIncomeResponse = await axiosInstance.get(
          "/api/incomes/last30DaysIncome"
        );
        setIncomes(incomeResponse.data);
        setLast30DaysIncomes(last30DaysIncomeResponse.data);
         setExpenses(expenseResponse.data);
        setLast60DaysExpenses(last60DaysExpenseResponse.data);
      } catch (error) {
        console.log(error.message || "failed to fetch data");
      }
    };
    fetchData();
  }, []);

    const value={incomes, expenses,last30DaysIncomes, last60DaysExpenses}
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
import DashboardLayout from "../components/DashboardLayout";

import {
  MdAllInclusive,
  MdOutline3gMobiledata,
  MdOutlinePayment,
  MdOutlinePayments,
  MdTrendingDown,
} from "react-icons/md";

import useExpenseTracker from "../context/useExpenseTracker";
import { BarChart } from "recharts";
import ExpenseBarChart from "../components/Expense/ExpenseBarChart";

const Dashboard = () => {
  const { incomes, expenses, last60DaysExpenses } = useExpenseTracker();
  const totalIncome = incomes.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
  const totalExpense = expenses.reduce((acc, trans) => acc + trans.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  return (
    <DashboardLayout activeMenu={"Dashboard"}>
      <div className="flex flex-col gap-6 max-sm:mt-6 ">
        <div className="flex  flex-wrap items-center gap-6 ">
          <div className="p-2 flex-1 rounded-md bg-white  flex items-center gap-3">
            <div className="p-2.5  rounded-full bg-purple-500 ">
              <MdAllInclusive size={30} />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-slate-500 ">Total Balance</h1>
              <p className="font-semibold ">${totalBalance}</p>
            </div>
          </div>
          <div className="p-2 flex-1 rounded-md bg-white  flex items-center gap-3">
            <div className="p-2.5  rounded-full bg-teal-500 ">
              <MdOutlinePayment size={30} />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-slate-500 ">Total Income</h1>
              <p className="font-semibold ">${totalIncome}</p>
            </div>
          </div>
          <div className="p-2 flex-1  rounded-md bg-white  flex items-center gap-3">
            <div className="p-2.5  rounded-full bg-pink-500 ">
              <MdOutlinePayments size={30} />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-slate-500 ">Total Expense</h1>
              <p className="font-semibold ">${totalExpense}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          <div className="mt-4 flex-1 rounded-md bg-white p-2  ">
            <h1 className="font-bold text-center  ">Total Overview</h1>
            <BarChart totalExpense={totalExpense} totalIncome={totalIncome} />
          </div>
          <div className="mt-4  flex-1 bg-white p-2 rounded-md">
            <h1 className="font-bold text-lg py-4">Recent Expenses</h1>
            {last60DaysExpenses.length === 0 ? (
              <p>No expenses for now</p>
            ) : (
              <ul className="space-y-5">
                {last60DaysExpenses.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex gap-2 items-center font-bold">
                      <div className="p-2.5 bg-red-500/70 rounded-md ">
                        <MdOutline3gMobiledata className="" />
                      </div>
                      <p>{item.category}</p>
                    </div>{" "}
                    <div className="px-4 py-2 flex items-center gap-2 rounded-md bg-red-100 text-red-600">
                      -${item.amount} <MdTrendingDown />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="h-[450px] bg-white w-full p-3 rounded-md">
            <h1 className="font-bold text-xl ">
              Last 60 days Expense Overview
            </h1>
            <ExpenseBarChart expenseData={last60DaysExpenses} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

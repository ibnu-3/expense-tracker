import {
  MdAccountBalanceWallet,
  MdArrowCircleLeft,
  MdArrowCircleRight,
} from "react-icons/md";
import DashboardLayout from "../layouts/DashboardLayout";
import { data, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { isFragment } from "react-is";
import DashboardCard from "../components/DashboardCard";
import RecentTransactionCard from "../components/RecentTransactionCard";
import Loader from "../components/Loader";
import ExpenseCard from "../components/ExpenseCard";
import IncomeCard from "../components/IncomeCard";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  const [last30DaysExpenses, setLast30DaysExpenses] = useState([]);
  const [last60DaysIncomes, setLast60DaysIncomes] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/dashboard");
        
        setDatas(response?.data?.recentTransactions);
        setData(response?.data);
        setLast30DaysExpenses(response?.data?.last30DaysExpenses.transactions);
        setLast60DaysIncomes(response?.data?.last30DaysIncomes.transactions);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  
  return (
    <DashboardLayout activeMenu="Dashboard">
      {loading ? (( <>
       <p className="text-center pt-24 text-slate-500 ">Data loading please wait...</p>
       <Loader/>
       </>)):(<>
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <DashboardCard
            icon={<MdAccountBalanceWallet />}
            amount={data.totalBalance}
            label="Total Balance"
            color="bg-purple-500"
          />
          <DashboardCard
            icon={<MdAccountBalanceWallet />}
            amount={data.totalIncome}
            label="Total Income"
            color="bg-orange-500"
          />
          <DashboardCard
            icon={<MdAccountBalanceWallet />}
            amount={data.totalExpense}
            label="Total Expense"
            color="bg-yellow-500"
          />
        </div>
      </div>
      <div className="my-5 mx-auto bg-white rounded-md ">
        <div className="flex items-center justify-between p-3">
          <h1 className="font-medium text-xl ">Recent Transactions</h1>
          <Link
            to={"/expense"}
            className="px-3 py-1.5 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 rounded-md text-sm "
          >
            See all <MdArrowCircleRight size={20} />
          </Link>
        </div>
        {datas.map((item, index) => (
          <ul className="" key={index}>
            <li>
              <RecentTransactionCard item={item} />
            </li>
          </ul>
        ))}
      </div>
      <div className="my-5 mx-auto bg-white rounded-md ">
        <div className="flex items-center justify-between p-3">
          <h1 className="font-medium text-xl ">Recent Incomes</h1>
          <Link
            to={"/income"}
            className="px-3 py-1.5 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 rounded-md text-sm "
          >
            See all <MdArrowCircleRight size={20} />
          </Link>
        </div>
        {last60DaysIncomes.length === 0 ? (
          <p className="text-slate-500 p-6 italic text-sm">
            No incomes added in the last 60 days
          </p>
        ) : (
          <>
            {last60DaysIncomes.map((item, index) => (
              <ul className="" key={index}>
                <li>
                  <IncomeCard item={item} />
                </li>
              </ul>
            ))}
          </>
        )}
      </div>
      <div className="my-5 mx-auto bg-white rounded-md ">
        <div className="flex items-center justify-between p-3">
          <h1 className="font-medium text-xl ">Recent Expenses</h1>
          <Link
            to={"/expense"}
            className="px-3 py-1.5 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 rounded-md text-sm "
          >
            See all <MdArrowCircleRight size={20} />
          </Link>
        </div>
        {last30DaysExpenses.map((item, index) => (
          <ul className="" key={index}>
            <li>
              <ExpenseCard item={item} />
            </li>
          </ul>
        ))}
      </div>
      <div className="my-5 mx-auto">
        <p>hello</p>
        <ResponsiveContainer className={'bg-white'} width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={last30DaysExpenses}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='category' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey='amount'
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
           
          </BarChart>
        </ResponsiveContainer>
      </div></>)}
    </DashboardLayout>
  );
};

export default Dashboard;

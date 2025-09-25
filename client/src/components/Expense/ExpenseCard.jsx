import moment from "moment";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import useExpenseTracker from "../../context/useExpenseTracker";

const ExpenseCard = ({expenses}) => {
  
  return (
    <div className="w-full bg-white rounded-md ">
      <table className="w-full p-3">
        <thead>
          <tr className=" ">
            <th className="px-4 py-2 border ">Category</th>
            <th className="px-4 py-2 border ">Date</th>
            <th className="px-4 py-2 border ">Amount (in $)</th>
            <th className="px-4 py-2 border ">Actions</th>
          </tr>
        </thead>
        {expenses.map((expense) => (
          <tbody key={expense._id}>
            <tr className=" ">
              <td className="px-4 py-2 border">{expense.category}</td>
              <td className="px-4 py-2 border">
                {moment(expense.date).format("YYYY-MM-DD")}
              </td>
              <td className="px-4 py-2 border">{expense.amount}</td>
              <td className="px-4 py-2 border flex items-center gap-2">
                <MdEdit className="text-blue-600" />{" "}
                <MdDelete className="text-red-600" />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ExpenseCard;

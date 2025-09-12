import DashboardLayout from "../layouts/DashboardLayout";

const Income = () => {
  return (
    <DashboardLayout activeMenu={"Income"}>
      <div className="flex items-center justify-between my-5 rounded-md p-5 mx-auto bg-white gap-4">
        <div>
          <h1 className="block font-semibold">Income OverView</h1>
          <p className="text-slate-500 text-sm">
            Track your earning over time and analyze your income trends.
          </p>
        </div>
        <div>
          <button className="hidden sm:flex px-3 py-1 font-bold text-sm  rounded-md border bg-purple-50  text-purple-600 hover:text-purple-700 hover:bg-purple-100">
         + Add Income
        </button>
          <button className=" px-3 py-1 font-bold text-xl sm:hidden rounded-md border bg-purple-50  text-purple-600 hover:text-purple-700 hover:bg-purple-100">
         + 
        </button>
       
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Income;

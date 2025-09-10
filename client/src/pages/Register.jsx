import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import Loader from "../components/Loader";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    await register({ name, email, password });
    setLoading(false);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[40%] bg-white p-3 rounded-md">
        <h1 className="text-xl font-bold text-center py-6">
          Create an Account
        </h1>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col  my-2">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 rounded border  focus:border-blue-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col  my-2">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="px-4 py-2 rounded border  focus:border-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col  my-3">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-2 rounded border  focus:border-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="px-4 py-2 bg-teal-700 text-white rounded-md w-full hover:bg-teal-500 my-4">
            Register
          </button>
          <p className="text-sm text-slate-500">
            Already have an account?{" "}
            <Link className="text-sky-500 ml-3" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

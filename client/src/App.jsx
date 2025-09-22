import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./components/PrivateRoutes";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route
          path="/income"
          element={
            <PrivateRoutes>
              <Income />
            </PrivateRoutes>
          }
        />
        <Route
          path="/expense"
          element={
            <PrivateRoutes>
              <Expense />
            </PrivateRoutes>
          }
        />
      </Routes></AuthProvider>
    </BrowserRouter>
  );
};

export default App;

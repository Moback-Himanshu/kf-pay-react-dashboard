import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import  Login  from "../screens/login/login"
import Layout from '../layout/mainLayout';
import Dashboard from "../screens/dashboard";

const RoutesList = () => {

  return (
    <Router>
      <Layout>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes></Layout>
    </Router>
  );
};
export default RoutesList;

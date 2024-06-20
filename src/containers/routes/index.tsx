import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import  Login  from "../screens/Login/login"

const RoutesList = () => {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </Router>
  );
};
export default RoutesList;

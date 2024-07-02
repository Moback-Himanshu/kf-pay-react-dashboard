import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../screens/login/login";
import MainLayout from "../layout/mainLayout";
import Dashboard from "../screens/dashboard";
import AuthLayout from "../layout/authLayout";
import { useSelector } from "react-redux";

const RoutesList = () => {
  const user = useSelector((state: any) => state.authentication);
  const userInfo = useSelector((state: any) => state.userInfo.userInfo);
  const isUserAuthenticated = user.isisUserAuthenticated;
  // console.log(user);
  // console.log(userInfo);
  // console.log('isUserAuthenticated--', isUserAuthenticated);
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      {/* {!isUserAuthenticated ? 
       <AuthLayout>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthLayout> :
      <MainLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </MainLayout>} */}
      {/* <MainLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </MainLayout> */}
    </Router>
  );
};
export default RoutesList;

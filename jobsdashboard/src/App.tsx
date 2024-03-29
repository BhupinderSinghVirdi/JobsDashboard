import React, { useState } from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ReadAcc from "./components/Account/ReadAccount";
import Login from "./components/LoginComponent";
import ViewJobsApplied from "./components/Jobs/ViewJobsApplied";
import ViewJobsDetails from "./components/Jobs/ViewJobDetails";
import ViewJobsListing from "./components/Jobs/JobsListing";
import EditAcc from "./components/Account/EditAccount";
import CreateAcc from "./components/Account/CreateAccount";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import NotFound from './components/NotFound';
import AdminLogin from "./components/Admin/AdminLogin";
import AdminJobsListView from "./components/Admin/AdminJobsListView";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
	<div className='bg-gray-100 h-full'>
    <AuthContextProvider>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ViewJobsListing />} />
        <Route path="/jobs" element={<ViewJobsListing />} />
        <Route path="/jobs-applied" element={<ViewJobsApplied />} />
        <Route path="/jobs-details/:id" element={<ViewJobsDetails />} />
        <Route path="/login" element={<Login />} />
        {/* <PrivateRoute exact path="/login" component={Login}/> */}
        <Route path="/linkedin" element={<LinkedInCallback />} />
        <Route path="/signUp" element={<CreateAcc  />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/adminjobslist" element={<AdminJobsListView />} />
        <Route path="/AccountDetails" element={<EditAcc email="blah blah" name="Demo User" phoneNumber={989282929}/>} />
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
    </AuthContextProvider>
	</div>
  );
}

export default App;

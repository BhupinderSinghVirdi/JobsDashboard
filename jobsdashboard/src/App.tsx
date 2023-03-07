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

function App() {
  return (
	<div className='bg-gray-100 h-full'>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ViewJobsListing />} />
        <Route path="/jobs" element={<ViewJobsListing />} />
        <Route path="/jobs-applied" element={<ViewJobsApplied />} />
        <Route path="/jobs-details/:id" element={<ViewJobsDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AccountDetails" element={<EditAcc email="blah blah" name="Demo User" phoneNumber={989282929}/>} />
      </Routes>
    </Router>
	</div>
  );
}

export default App;

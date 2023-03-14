import React, { useState } from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ReadAcc from "./components/Account/ReadAccount";
import Login from "./components/LoginComponent";
import ViewJobsApplied from "./components/Jobs/ViewJobsApplied";
import EditAcc from "./components/Account/EditAccount";
import { LinkedInCallback } from "react-linkedin-login-oauth2";

function App() {
  return (
	<div className='bg-gray-100 h-screen'>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<p>This is Home Page.</p>} />
        <Route path="/jobs" element={<p>This is the Jobs page.</p>} />
        <Route path="/jobs-applied" element={<ViewJobsApplied />} />
        <Route path="/login" element={<Login />} />
        <Route path="/linkedin" element={<LinkedInCallback />} />
        <Route path="/AccountDetails" element={<EditAcc email="blah blah" name="Demo User" phoneNumber={989282929}/>} />
      </Routes>
    </Router>
	</div>
  );
}

export default App;

import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ViewJobsApplied from './components/Jobs/ViewJobsApplied';

import './App.css';

function App() {
  return (
		<div className='bg-gray-100 h-screen'>
			<Router>
				<Navigation/>
				<Routes>
					<Route path="/" element={<p>This is Home Page.</p>} />
					<Route path="/jobs" element=
					{<p>This is the Jobs page.</p>}
					/>
					<Route path="/jobs-applied" element=
					{<ViewJobsApplied/>}
					/>
					<Route path="/login" element=
					{<p>This is the Login page.</p>}
					/>
				</Routes>
			</Router>
		</div>
  );
}

export default App;

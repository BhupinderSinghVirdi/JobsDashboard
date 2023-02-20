
import React, { useState, useEffect } from 'react';
import JobsAppliedView from '../../ui/JobsAppliedView'
import axios from 'axios';

type JobsAppliedType = {
    _id: string
    user_id: string;
    jobs_applied: [{
        _id: string;
        date_applied:Date;
    }[]];
};

const ViewJobsApplied = () => {
	const [jobs_applied, setJobsApplied] = useState<JobsAppliedType[]>([]);

	const sendGetRequest = async () => {
    	try {
			const response = await axios.get(
				'http://localhost:3001/api/jobsapplied'
			);
			setJobsApplied(response.data);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

  	useEffect(() => {
		sendGetRequest();
  	}, []);

	return (
		<div className='place-content-center'>
			<button className='ml-3 rounded bg-purple-800 text-white py-2 px-4'>Apply To Jobs</button>
			{
				jobs_applied.length > 0 ? 
				jobs_applied.map((jobs_applied) => (
					<JobsAppliedView user_id={jobs_applied.user_id} jobs_applied={jobs_applied.jobs_applied} key={jobs_applied._id} />
				)) : <h1 className='noJobs text-center'>Start applying to view your job applications here!!!</h1>
			}

		</div>
	);
};

export default ViewJobsApplied;
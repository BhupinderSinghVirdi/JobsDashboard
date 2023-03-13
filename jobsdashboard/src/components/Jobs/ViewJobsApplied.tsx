import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobsAppliedView from '../../ui/JobsAppliedView'
import axios from 'axios';

type JobsAppliedType = {
    _id: string
    user_id: string;
    jobs_applied: [{
        _id: string;
        position: string;
        company: string;
        date_applied: Date;
        status: string;
        archive: boolean;
    }];
};

const ViewJobsApplied = () => {
	const [jobs_applied, setJobsApplied] = useState<JobsAppliedType[]>([]);
	const [displayArchived, setDisplayArchived] = useState<boolean>(false);

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

	const handleArchive = async (user_id: string, job_id: string) => {
		try {
			const response = await axios.patch(
				`http://localhost:3001/api/jobsapplied/${user_id}/${job_id}`,
				{ archive: true }
			);
			console.log(response);
			sendGetRequest();
		} catch (err) {
			console.log(err);
		}
	}

  	useEffect(() => {
		sendGetRequest();
  	}, []);

	return (
		<div className='place-content-center'>
			<div className='ml-3 my-5'>
				<Link to="/jobs" className=" rounded bg-indigo-500 text-white py-2 px-4 ">Apply To Jobs</Link>{" "}
				<button
					onClick={() => setDisplayArchived(!displayArchived)}
					className={`${ displayArchived ? 'bg-green-500': 'bg-red-500'} text-white py-2 px-4 rounded`}
				>{ displayArchived ? "Show Active Jobs" : "Show Archived Jobs" }</button>
			</div>
			{
				jobs_applied.length > 0 ? 
				jobs_applied.map((jobs_applied) => (
					<JobsAppliedView 
						key={jobs_applied._id}
						user_id={jobs_applied.user_id} 
						jobs_applied={jobs_applied.jobs_applied}
						displayArchived={displayArchived}
						handleArchive={handleArchive} 
					/>
				)) : <h1 className='noJobs text-center'>Start applying to view your job applications here!!!</h1>
			}

		</div>
	);
};

export default ViewJobsApplied;
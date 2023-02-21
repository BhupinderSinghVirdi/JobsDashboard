import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import JobDetailsView from '../../ui/JobDetailsView'
import axios from 'axios';

type JobsProps = {
   id:string
};

const ViewJobsDetails = () => {
	let { id } = useParams();
    const [job_details, setJobsDetails] = useState<JobsProps[]>([]);

    const sendGetRequest = async () => {
    	try {
			const response = await axios.get(
				'http://localhost:3001/api/jobs/'+id
			);
			setJobsDetails(response.data);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

    useEffect(() => {
		sendGetRequest();
  	}, []);

	return (
		<div>
		{
			job_details.length > 0 ? 
			job_details.map((job_details,i) => (
				<JobDetailsView job_details={job_details} key={i} />
			)) : <h1 className='noJobs text-center'>We currently have no jobs to display!!!</h1>
		}
		</div>
	);

}

export default ViewJobsDetails;
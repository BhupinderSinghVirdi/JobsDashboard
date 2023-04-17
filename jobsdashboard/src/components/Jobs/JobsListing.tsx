
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobListView from '../../ui/JobListView'
import JobsCategoryView from '../../ui/JobsCategoryView'
import axios from 'axios';

type JobItem = {
	_id: string
	slug: string
	id: string
	epoch: number
	date: string
	company: string
	company_logo: string
	position: string
	tags: string[]
	logo: string
	description: string
	location: string
	salary_min: number
	salary_max: number
	url: string
	apply_url: string
}

const JobsListing = () => {
	const [jobs_listing, setJobsListing] = useState<JobItem[]>([]);

	function convertToNumber(str: string): number {
		return Number(str);
	}

	const sendGetRequest = async () => {
    	try {
			const response = await axios.get(
				'https://jobs-dashboard-api.onrender.com/api/jobs'
			);
			setJobsListing(response.data);
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
			<div className="job_listing_area">
				<div className="container mx-auto sm:px-4">
				<JobsCategoryView />		
					<div className="job_lists">
						<div className="flex flex-wrap">
							{

								Object.keys(jobs_listing).map(key => (
									<JobListView
										_id = {jobs_listing[convertToNumber(key)]._id}
										slug = {jobs_listing[convertToNumber(key)].slug}
										id = {jobs_listing[convertToNumber(key)].id}
										epoch = {jobs_listing[convertToNumber(key)].epoch}
										date = {jobs_listing[convertToNumber(key)].date}
										company = {jobs_listing[convertToNumber(key)].company}
										company_logo = {jobs_listing[convertToNumber(key)].company_logo}
										position = {jobs_listing[convertToNumber(key)].position}
										tags = {jobs_listing[convertToNumber(key)].tags}
										logo = {jobs_listing[convertToNumber(key)].logo}
										description = {jobs_listing[convertToNumber(key)].description}
										location = {jobs_listing[convertToNumber(key)].location}
										salary_min = {jobs_listing[convertToNumber(key)].salary_min}
										salary_max = {jobs_listing[convertToNumber(key)].salary_max}
										url = {jobs_listing[convertToNumber(key)].url}
										apply_url = {jobs_listing[convertToNumber(key)].apply_url}
										/>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobsListing;
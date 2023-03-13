import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive } from '@fortawesome/free-solid-svg-icons';

type JobAppliedType = {
	_id: string;
	position: string;
	company: string;
	date_applied: Date;
	status: string;
	archive: boolean;
};

type JobsAppliedViewProps = {
	user_id: string;
	jobs_applied: JobAppliedType[];
	displayArchived: boolean;
	handleArchive: (user_id: string, job_id: string) => void;
};

const JobsAppliedView = ({
	user_id,
	jobs_applied,
	displayArchived,
	handleArchive,
}: JobsAppliedViewProps) => {
	return (
		<>
			<h2 className='mt-5 text-center'>Jobs Applied</h2>
			{jobs_applied.length > 0 ? (
				<table className='mt-5 w-full text-md bg-white shadow-md rounded mb-4'>
					<thead className='border-b'>
						<tr>
							<th className='text-left p-3 px-5'>Job Title</th>
							<th className='text-left p-3 px-5'>Company Name</th>
							<th className='text-left p-3 px-5'>Date Applied</th>
							<th className='text-left p-3 px-5'>Status</th>
							<th className='text-left p-3 px-5'>Archive</th>
						</tr>
					</thead>
					<tbody>
						{jobs_applied.map((job) => (
							(displayArchived || !job.archive) && <tr key={job._id}>
								<td className='border-grey-light border hover:bg-gray-100 p-3 px-5'>
									{job.position}
								</td>
								<td className='border-grey-light border hover:bg-gray-100 p-3 px-5'>
									{job.company}
								</td>
								<td className='border-grey-light border hover:bg-gray-100 p-3 px-5'>
									{new Date(job.date_applied).toLocaleDateString()}
								</td>
								<td className='border-grey-light border hover:bg-gray-100 p-3 px-5'>
									{job.status}
								</td>
								<td className='border-grey-light border hover:bg-gray-100 p-3 px-5'>
								{!job.archive && <button
										onClick={() => handleArchive(user_id, job._id)}
										className={`${
											'bg-red-500'
										} text-white py-2 px-4 rounded`}
									>
										<FontAwesomeIcon icon={faArchive} />
									</button>}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p className='text-center'>No jobs applied yet!</p>
			)}
		</>
	);
};

export default JobsAppliedView;
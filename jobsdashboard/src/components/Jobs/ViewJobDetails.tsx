
import React from 'react';
import JobDetailsView from '../../ui/JobDetailsView';
import JobDetailsContextProvider, { JobDetailsContext } from '../../context/Jobs/JobDetailsContext';
import axios from 'axios';

const ViewJobsDetails = () => {
    const handleSubmit = async (formData : FormData) => {
        try {
            const response = await axios.post('https://jobs-dashboard-api.onrender.com/api/jobsapplied', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <JobDetailsContextProvider>
            <JobDetailsContext.Consumer>
                {({ jobDetails, getJobDetails }) =>
                    jobDetails ? (
                        <JobDetailsView job_details={jobDetails} handleSubmit={handleSubmit} />
                    ) : (
                        <h1 className="noJobs text-center text-base h-screen">
                            We're sorry, but the job you were looking for is no longer available on
                            TeraSearch. However, we have many other exciting opportunities waiting
                            for you. Please browse our current listings and apply for the jobs that
                            interest you. We wish you the best of luck in your job search, and thank
                            you for using TeraSearch.
                        </h1>
                    )
                }
            </JobDetailsContext.Consumer>
        </JobDetailsContextProvider>
    );
};

export default ViewJobsDetails;
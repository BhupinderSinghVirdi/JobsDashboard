import React from 'react';

import JobDetailsHeader from '../components/Jobs/JobDetailsHeader';
import JobDetailsDescription from '../components/Jobs/JobDetailsDescription';
import JobDetailsSummary from '../components/Jobs/JobDetailsSummary';
import JobApplicationForm from '../components/Jobs/JobApplicationForm';

type JobsDetailsType = {
  _id: string
  date: string;
  company:string;
  company_logo:string;
  position:string;
  logo:string;
  description:string;
  location:string;
  salary_min:number;
  salary_max:number;
};

type JobsDetailsViewProps = {
  job_details: JobsDetailsType;
  handleSubmit: (formData : FormData) => void;
};

const JobsDetailsView = ({ job_details,handleSubmit } : JobsDetailsViewProps) => {
    return (
      <div className='flex flex-row'>
        <div className='lg:w-2/3 pr-4 pl-4'>
          <JobDetailsHeader position={job_details.position} location={job_details.location} company_logo={job_details.company_logo}/>
          <JobDetailsDescription job_description={job_details.description}/>
          <JobApplicationForm job_id={job_details._id} user_id={"640f7b6aa11a375e1ecbe280"} handleSubmit={handleSubmit} />
        </div>
        <div className='lg:w-1/3 pr-4 pl-4'>
          <JobDetailsSummary date={job_details.date} salary_min={job_details.salary_min} salary_max={job_details.salary_max} location={job_details.location} />
        </div>
      </div>
    );
};

export default JobsDetailsView;

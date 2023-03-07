import React from 'react';

import JobDetailsHeader from '../components/Jobs/JobDetailsHeader';
import JobDetailsDescription from '../components/Jobs/JobDetailsDescription';
import JobDetailsSummary from '../components/Jobs/JobDetailsSummary';
import JobApplicationForm from '../components/Jobs/JobApplicationForm';


type JobsProps = {
    id:string
};

type JobsDetailsProps = {
    job_details:JobsProps
};


const JobsAppliedView = ({job_details}: JobsDetailsProps) => {
    return (
      <div className='flex flex-row'>
        <div className='lg:w-2/3 pr-4 pl-4'>
          <JobDetailsHeader/>
          <JobDetailsDescription/>
          <JobApplicationForm/>
        </div>
        <div className='lg:w-2/3 pr-4 pl-4'>
          <JobDetailsSummary/>
        </div>
      </div>
    );
};

export default JobsAppliedView;
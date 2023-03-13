import React from 'react';
import Parser from 'html-react-parser';

type JobDetailsDescriptionType = {
    job_description : string,
}
const JobDetailsDescription = ({job_description} : JobDetailsDescriptionType) => {
    return (
        <div className="p-10 bg-white">
            <div className="mb-8">
                <h4 className='text-xl font-medium text-gray-900 mb-6'>Job description</h4>
                {Parser(job_description)}
            </div>
        </div>
    );
};

export default JobDetailsDescription;
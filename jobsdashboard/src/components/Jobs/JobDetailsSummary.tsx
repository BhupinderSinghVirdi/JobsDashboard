import React from 'react';

const JobDetailsSummary = () => {
    return (
        <div className="bg-white">
            <div className="border-b border-b-solid border-b-gray-200 p-10">
                <h3>Job Summary</h3>
            </div>
            <div className="p-10">
                <ul className="m-0 p-0">
                    <li className="text-base font-normal text-gray-500 leading-9 pl-4 relative before:border-gray-500 before:absolute before:w-2 before:h-2 before:left-0 before:top-4 before:rounded-full before:border before:content-['']">Published on: <span className="text-gray-900">12 Nov, 2019</span></li>
                    <li className="text-base font-normal text-gray-500 leading-9 pl-4 relative before:border-gray-500 before:absolute before:w-2 before:h-2 before:left-0 before:top-4 before:rounded-full before:border before:content-['']">Vacancy: <span className="text-gray-900">2 Position</span></li>
                    <li className="text-base font-normal text-gray-500 leading-9 pl-4 relative before:border-gray-500 before:absolute before:w-2 before:h-2 before:left-0 before:top-4 before:rounded-full before:border before:content-['']">Salary: <span className="text-gray-900">50k - 120k/y</span></li>
                    <li className="text-base font-normal text-gray-500 leading-9 pl-4 relative before:border-gray-500 before:absolute before:w-2 before:h-2 before:left-0 before:top-4 before:rounded-full before:border before:content-['']">Location: <span className="text-gray-900">California, USA</span></li>
                    <li className="text-base font-normal text-gray-500 leading-9 pl-4 relative before:border-gray-500 before:absolute before:w-2 before:h-2 before:left-0 before:top-4 before:rounded-full before:border before:content-['']">Job Nature: <span className="text-gray-900"> Full-time</span></li>
                </ul>
            </div>
    </div>
    );
};

export default JobDetailsSummary;
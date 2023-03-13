import React from 'react';

type JobDetailsSummaryType = {
    date : string,
    salary_min : number,
    salary_max : number,
    location: string
}

const JobDetailsSummary = ({ date,salary_min,salary_max,location } : JobDetailsSummaryType ) => {
    let newDate : Date = new Date(date);
    const formattedDate = newDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
    })

    return (
        <div className="bg-white">
            <div className="border-b border-b-solid border-b-gray-200 p-10">
                <h3>Job Summary</h3>
            </div>
            <div className="p-10">
                <ul className="m-0 p-0">
                    <li className="text-base font-normal text-gray-500 leading-9 pl-4 relative before:border-gray-500 before:absolute before:w-2 before:h-2 before:left-0 before:top-4 before:rounded-full before:border before:content-['']">Published on: <span className="text-gray-900">{ formattedDate }</span></li>
                    <li className="text-base font-normal text-gray-500 leading-9 pl-4 relative before:border-gray-500 before:absolute before:w-2 before:h-2 before:left-0 before:top-4 before:rounded-full before:border before:content-['']">Salary: <span className="text-gray-900">{salary_min.toLocaleString()} - {salary_max.toLocaleString()}</span></li>
                    <li className="text-base font-normal text-gray-500 leading-9 pl-4 relative before:border-gray-500 before:absolute before:w-2 before:h-2 before:left-0 before:top-4 before:rounded-full before:border before:content-['']">Location: <span className="text-gray-900">{location}</span></li>

                </ul>
            </div>
    </div>
    );
};

export default JobDetailsSummary;
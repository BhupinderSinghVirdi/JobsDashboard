import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker,faClock } from '@fortawesome/free-solid-svg-icons'

type JobsFiltered = {
};


const JobsCategoryView = () => {
    const [jobs_filter, setJobsFilter] = useState<JobsFiltered>();
    return (
    <div className="catagory_area">
        <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap  cat_search">
                <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4">
                    <div className="single_input">
                        <form>
                            <input type="text" placeholder="Search keyword"/>
                        </form>
                    </div>
                </div>
                <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4">
                    <div className="single_input">
                        <select className="wide">
                            <option data-display="Location">Location</option>
                            <option value="1">Dhaka</option>
                            <option value="2">Rangpur</option>
                            <option value="4">Sylet</option>
                          </select>
                    </div>
                </div>
                <div className="lg:w-1/4 pr-4 pl-4 md:w-1/3 pr-4 pl-4">
                    <div className="single_input">
                        <select className="wide">
                            <option data-display="Category">Category</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="4">Category 3</option>
                          </select>
                    </div>
                </div>
                <div className="lg:w-1/4 pr-4 pl-4 md:w-full pr-4 pl-4">
                    <div className="job_btn">
                        <a href="#" className="boxed-btn3">Find Job</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default JobsCategoryView;
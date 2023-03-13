import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faClock, faCoffee  } from '@fortawesome/free-solid-svg-icons'

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

const AdminJobsListView  = ({
        _id,
        slug,
        id,
        epoch,
        date,
        company,
        company_logo,
        position,
        tags,
        logo,
        description,
        location,
        salary_min,
        salary_max,
        url,
        apply_url
    }: JobItem) => {

    return (
        <div className="lg:w-full pr-4 pl-4 md:w-full pr-4 pl-4">
            <div className="single_jobs white-bg flex justify-between">
                <div className="jobs_left flex items-center">
                    <div className="thumb">
                        <FontAwesomeIcon icon={faCoffee}/>
                    </div>
                    <div className="jobs_conetent">
                        <a href="job_details.html"><h4>Software Engineer</h4></a>
                        <div className="links_locat flex items-center">
                            <div className="location">
                                <p> <i className="fa fa-map-marker"></i> California, USA</p>
                            </div>
                            <div className="location">
                                <p> <i className="fa fa-clock-o"></i> Part-time</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jobs_right">
                    <div className="apply_now">
                        <a className="heart_mark" href="#"> <i className="ti-heart"></i> </a>
                        <a href="job_details.html" className="boxed-btn3">Apply Now</a>
                    </div>
                    <div className="date">
                        <p>Date line: 31 Jan 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminJobsListView;
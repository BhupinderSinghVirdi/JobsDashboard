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

const JobListView  = ({
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

    let newDate : Date = new Date(date);
    const formattedDate = newDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
        })

    return (
        <div className="lg:w-full pr-4 pl-4 md:w-full pr-4 pl-4">
            <div className="single_jobs white-bg flex justify-between">
                <div className="jobs_left flex items-center">
                    <div className="thumb">
                        <img src={company_logo} className=""/>
                    </div>
                    <div className="jobs_conetent">
                        <a href={"/jobs-details/" + _id}><h4>{position}</h4></a>
                        <div className="links_locat flex items-center">
                            <div className="location">
                                <p> <i className="fa fa-map-marker"></i> {location}</p>
                            </div>
                            <div className="location">
                                <p> <i className="fa fa-clock-o"></i> {company}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jobs_right">
                    <div className="apply_now">
                        <a href={"/jobs-details/" + _id} className="boxed-btn3">Apply Now</a>
                    </div>
                    <div className="date">
                        <p>Added : {formattedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobListView;
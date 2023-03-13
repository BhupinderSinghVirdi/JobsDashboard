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

const AdminJobsListView  = () => {

    return (
        <p>This is Admin jobs list View</p>
    );
};

export default AdminJobsListView;
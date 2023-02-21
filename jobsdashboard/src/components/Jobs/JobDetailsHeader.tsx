import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker,faClock } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const JobDetailsHeader = () => {
    return (
    <div className="job_details_header">
        <div className="single_jobs bg-white flex justify-between p-10 border-b-2 border-solid border-b-gray-200">
            <div className="jobs_left flex items-center">
                <div className="float-left w-20 h-20 p-15 bg-gray-100 mr-10">
                    {/* <img src="img/svg_icon/1.svg" alt=""/> */}
                </div>
                <div className="jobs_conetent">
                    <div><h4 className='font-bold text-xl'>Software Engineer</h4></div>
                    <div className="links_locat flex items-center">
                        <div className="mr-10">
                            <p className='text-gray-500 mb-0'> <FontAwesomeIcon icon={faMapMarker}/> California, USA</p>
                        </div>
                        <div className="mr-10">
                            <p className='text-gray-500 mb-0'> <FontAwesomeIcon icon={faClock}/> Part-time</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jobs_right">
                <div className="apply_now">
                    <div className="heart_mark w-10 h-10 leading-10 rounded text-green-400 text-center inline-block bg-green-50 cursor-pointer hover:bg-green-400 hover:text-white "> <FontAwesomeIcon icon={faHeart}/> </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default JobDetailsHeader;
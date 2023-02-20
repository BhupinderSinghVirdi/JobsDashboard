import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker,faClock } from '@fortawesome/free-solid-svg-icons'

type JobsAppliedProps = {
    user_id: string;
    jobs_applied: [{
        _id:string
        date_applied:Date;
    }[]];
};


const JobsAppliedView = ({user_id, jobs_applied}: JobsAppliedProps) => {
    return (
      <div className="lg:w-full pr-4 pl-4 md:w-full">
          <div className="bg-white flex justify-between p-12 mb-12 border border-1 border-transparent rounded-sm">
              <div className="flex items-center">
                  <div className="float-left w-20 h-20 p-15 bg-gray-100 mr-10">
                      {/* <img src="img/svg_icon/1.svg" alt=""/> */}
                  </div>
                  <div className="float-left">
                      <a className='text-black outline-none' href="job_details.html"><h4>Software Engineer</h4></a>
                      <div className="links_locat flex items-center">
                          <div className="mr-10">
                              <p className='text-gray-500 mb-0'> <FontAwesomeIcon icon={faMapMarker}/> California, USA</p>
                          </div>
                          <div className="location">
                              <p className='text-gray-500 mb-0'> <FontAwesomeIcon icon={faClock}/> Part-time</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                  <div>
                      <button className="rounded bg-red-400 text-white py-2 px-4 ">Archive</button>
                  </div>
                  <div className="text-right mt-5">
                      <p className='italic text-gray-500'>Date line: 31 Jan 2020</p>
                  </div>
              </div>
          </div>
      </div>
      
    );
};

export default JobsAppliedView;
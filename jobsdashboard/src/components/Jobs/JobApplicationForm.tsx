import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';

const JobApplicationForm = () => {
    return (
        <div className="mt-8 p-10 bg-white">
        <h4 className="text-2xl font-medium mb-8">Apply for the job</h4>
        <form action="#">
            <div className="flex flex-wrap -mr-4 -ml-4">
                <div className="md:w-1/2 pr-4 pl-4">
                    <div>
                        <input className="h-16 w-full rounded pl-5 mb-5 border border-solid border-neutral-200" type="text" placeholder="Your name"/>
                    </div>
                </div>
                <div className="md:w-1/2 pr-4 pl-4">
                    <div>
                        <input className="h-16 w-full rounded pl-5 mb-5 border border-solid border-neutral-200" type="text" placeholder="Email"/>
                    </div>
                </div>
                <div className="md:w-full pr-4 pl-4">
                    <div>
                        <input className="h-16 w-full rounded pl-5 mb-5 border border-solid border-neutral-200" type="text" placeholder="Website/Portfolio link"/>
                    </div>
                </div>
                <div className="md:w-full pr-4 pl-4">
                    <div className="w-full h-16 rounded mb-5 border border-solid border-neutral-200 flex flex-row">
                        <div className="-mr-px flex">
                          <button className="bg-transparent text-base text-gray-600 pl-5 mr-1 border-none" type="button" id="inputGroupFileAddon03">
                            <FontAwesomeIcon icon={faCloudUpload}/>
                          </button>
                        </div>
                        <div className="mb-0 h-16 border-none items-center relative flex flex-row-reverse flex-auto ">
                          <input type="file" className="relative h-8 m-0 opacity-0 z-20" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"/>
                          <label className="flex-auto z-10 p-0 text-gray-600 bg-transparent rounded-none border-none self-middle" htmlFor="inputGroupFile03">Upload CV</label>
                        </div>
                      </div>
                </div>
                <div className="md:w-full pr-4 pl-4">
                    <div>
                        <textarea  className="h-48 p-5 w-full rounded pl-5 mb-5 border border-solid border-neutral-200" name="#" id="" cols={30} rows={10} placeholder="Coverletter"></textarea>
                    </div>
                </div>
                <div className="md:w-full pr-4 pl-4">
                    <div className="submit_btn">
                        <button className="bg-green-500 text-white inline-block pt-3 pr-8 pb-3 pl-8 text-base font-medium rounded text-center capitalize cursor-pointer w-full hover:text-green-500 hover:bg-transparent hover:border hover:border-solid hover:border-green-500" type="submit">Apply Now</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    );
};

export default JobApplicationForm;
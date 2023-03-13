import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import Tickmark from '../../ui/Tickmark';

type JobApplicationFormType = {
  user_id:string,
  job_id:string,
  handleSubmit: (formData : FormData) => void;
};

const JobApplicationForm = ({ user_id,job_id,handleSubmit }: JobApplicationFormType) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [mainFormData,setFormData] = useState<FormData | undefined>()
    const [showTickMark,setTickMark] = useState<boolean>(false)

    const handleFileSelect = () => {
      fileInputRef.current?.click();
    };
  
    const handleInputChange = () => {
      const form = document.getElementById('applicationForm') as HTMLFormElement;
      const formData = new FormData(form);
      setFormData(formData);
    }

    const handleFileChange = () => {
      const form = document.getElementById('applicationForm') as HTMLFormElement;
      const formData = new FormData(form);
      setFormData(formData);
      const files = fileInputRef.current?.files;
      if (files && files.length > 0) {
        const file = files[0];
        formData.append('file', file);
        setTickMark(true);
      }
    };

  return (
    <div className="mt-8 p-10 bg-white">
      <h4 className="text-2xl font-medium mb-8">Apply for the job</h4>
      <form action="#" id="applicationForm">
        <div className="flex flex-wrap -mr-4 -ml-4">
          <div className="md:w-1/2 pr-4 pl-4">
            <div>
              <input
                ref={fileInputRef}
                type="file"
                name="file"
                id="resume"
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="hidden"
                onChange={handleFileChange}
              />
              <div
                id="uploadDiv"
                className="flex flex-col p-4 border border-dashed border-gray-400 rounded-lg text-center cursor-pointer"
                onClick={handleFileSelect}
                style={showTickMark ? { pointerEvents: 'none' } : {}}
              >
                {!showTickMark && <FontAwesomeIcon id="faUploadIcon" icon={faCloudUpload} className="text-3xl text-gray-400 mb-2" />}
                {showTickMark && <Tickmark className="self-center"/>}
                <div id="uploadText" className="text-sm text-gray-600">
                  {showTickMark ? "File ready to be uploaded" : "Click or drag file to upload" }
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 pr-4 pl-4">
            <input name="job_id" type="hidden" value={job_id} />
            <input name="user_id" type="hidden" value={user_id} />
            <input name="apply_with_name" className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4" type="text" placeholder="Full Name" required onChange={handleInputChange} />
            <input name="apply_with_email" className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4" type="email" placeholder="Email Address" required onChange={handleInputChange}/>
            <input name="apply_with_phone" className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4" type="tel" placeholder="Phone Number" required onChange={handleInputChange}/>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button" onClick={() => { mainFormData ? handleSubmit(mainFormData) : alert("No form data")}}
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
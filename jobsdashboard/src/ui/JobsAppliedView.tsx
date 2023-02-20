import React from 'react';

type JobsAppliedProps = {
    user_id: string;
    jobs_applied: [{
        _id:string
        date_applied:Date;
    }[]];
};


const JobsAppliedView = ({user_id, jobs_applied}: JobsAppliedProps) => {
    return (
      <div>
        User: {user_id}
        <div>
        Jobs Applied To:
          {jobs_applied.map((job) => {
              console.log(job[0].date_applied);
              return <div> {"Date Applied: " +job[0].date_applied } </div>;
          })}
          <button className='ml-3 rounded bg-purple-800 text-white py-2 px-4'>Edit Job</button>
          <button className='ml-3 rounded bg-purple-800 text-white py-2 px-4'>Delete Job</button>
        </div>
      </div>
    );
};

export default JobsAppliedView;
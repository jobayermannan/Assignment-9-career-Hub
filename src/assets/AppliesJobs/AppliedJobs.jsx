import React, { useContext } from 'react';
import { AppliedJobsContext } from '../Components/contextApi/contextApi';

const AppliedJobs = () => {
  const { appliedJobs } = useContext(AppliedJobsContext);
  
  return (
    <div>
      <div
        className="hero bg-indigo-50 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("src/assets/Images/All Images/Vector.png")`,
          backgroundSize: '23%',
          backgroundRepeat:'no-repeat',
          backgroundPosition: 'left', 
        }}
      >
        <div className="hero-content text-black">
          <div className="max-w-md">
            <h1 className="mt-20 pt-16 text-2xl font-bold">Applied Job</h1>

            <section>
              {appliedJobs.map((job, index) => (
                <div key={index}>
                  <h2>{job.job_title}</h2>
                  <p>{job.job_description}</p>
                  {/* Render other job details */}
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;

import React, { useContext } from 'react';
import coolImage from '../../../../public/img/Vector.png';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AppliedJobsContext } from '../contextApi/contextApi';
import { addToDb } from '../../Utils/fakeDb';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { job_title, contact_information, job_description, job_responsibility, educational_requirements, experiences, salary, location } = jobs;

  const navigate = useNavigate();
  const { addAppliedJob } = useContext(AppliedJobsContext);

  const handleApplyClick = () => {
    // Create the applied job object
    const appliedJob = {
      id: jobs.id,
      company_logo: jobs.company_logo,
      job_title:jobs.job_title,
      contact_information,
      job_description,
      job_responsibility,
      educational_requirements,
      experiences,
      salary,
      location
    };
  
    // Add the applied job to the local storage
    addToDb(appliedJob);
  
    // Add the applied job to the context (assuming you have a context provider for applied jobs)
    addAppliedJob(appliedJob);
  
    // Navigate to the applied jobs page
    navigate('/appliedJob');
  };

  return (
    <div>
      <div
        className="hero bg-indigo-50 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${coolImage})`,
          backgroundSize: '23%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left',
        }}
      >
        <div className="hero-content text-black">
          <div className="max-w-md">
            <h1 className="mt-20 pt-16 text-2xl font-bold">Job Details</h1>
          </div>
        </div>
      </div>

      <div className="max-h-[400px] flex">
        <div className="w-3/4 text-left p-2">
          <div>
            <h2 className="text-md font-bold mb-5">
              Job Description: <span className="text-sm font-light">{job_description}</span>
            </h2>
          </div>
          <div>
            <h2 className="text-md font-bold mb-2">Job Responsibility</h2>
            <p className="text-sm mb-3">{job_responsibility}</p>
          </div>
          <div>
            <h2 className="text-md font-bold mb-4">Educational Requirements</h2>
            <p className="text-sm mb-4">{educational_requirements}</p>
          </div>
          <div>
            <h2 className="text-md font-bold mb-4">Experience</h2>
            <p className="text-sm">{experiences}</p>
          </div>
        </div>
        <div className="w-1/4 text-left p-2">
          <div className="bg-indigo-100 rounded-md p-4">
            <div className="mb-5 pb-5">
              <h2 className="text-md font-semibold">Job Details</h2>
              <p className="divider"></p>
              <p className="text-sm font-semibold">Salary: <span className='ml-2 font-thin'>{salary}</span></p>
              <p className="text-sm mr-2 font-semibold">Job Title: <span className="ml-2 font-thin">{job_title}</span></p>
            </div>
            <div className="mt-2">
              <h2 className="font-bold mb-2 text-sm">Contact Information</h2>
              <p className="divider"></p>
              {contact_information && (
                <>
                  <p className="text-sm font-semibold">Phone:<span className='font-thin'> {contact_information.phone}</span></p>
                  <p className="text-sm font-semibold">Email:<span className='font-thin'> {contact_information.email}</span></p>
                </>
              )}
              <p className="text-sm font-semibold">Address:<span className='font-thin'> {location}</span></p>
            </div>
          </div>
          <div className="pt-4 mt-auto">
            <button className="btn btn-block border-none text-gradient bg-gradient-to-r from-indigo-400 rounded-md to-violet-500 text-white" onClick={handleApplyClick}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

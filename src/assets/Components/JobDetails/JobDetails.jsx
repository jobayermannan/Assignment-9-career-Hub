import React from 'react';
import coolImage from '../../../../public/img/Vector.png'
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const jobs= useLoaderData();
  const {job_title,contact_information,job_description,job_responsibility,educational_requirements,experiences,salary,location}=jobs
  
 
  return (
    <div>
      <div
     className=" hero bg-indigo-50  bg-cover bg-center flex items-center justify-center"
     style={{
       backgroundImage: `url(${coolImage})`,
       backgroundSize: '23%',
       backgroundRepeat:'no-repeat',
       backgroundPosition: 'left', 
     }}
      >
        <div className="hero-content text-black">
          <div className="max-w-md">
            <h1 className="mt-20 pt-16 text-2xl font-bold">Job Details </h1>
          </div>
        </div>
      </div>

      <div className="max-h-[400px] flex">
        <div className="w-3/4 text-left p-2">
          <div className="">
            <h2 className="text-md font-bold mb-5">
              Job Description: <span className="text-sm font-light"> {job_description}</span>
            </h2>
          </div>
          <div className="">
            <h2 className="text-md font-bold mb-2">Job Responsibility</h2>
            <p className="text-sm mb-3">{job_responsibility}</p>
          </div>
          <div className="">
            <h2 className="text-md font-bold mb-4">Educational Requirements</h2>
            <p className="text-sm mb-4">{educational_requirements}</p>
          </div>
          <div className="">
            <h2 className="text-md font-bold mb-4">Experience</h2>
            <p className="text-sm">{experiences}</p>
          </div>
        </div>
        <div className="w-1/4 text-left p-2">
          <div className="bg-indigo-100 rounded-md p-4">
            <div className=" mb-5 pb-5">
              <h2 className="text-md font-semibold">Job Details</h2>
              <p className="divider"></p>
              <p className="text-sm font-semibold">Salary: <span className='ml-2 font-thin'> {salary}</span> </p>
              <p className="text-sm mr-2 font-semibold">Job Title: <spam className="ml-2 font-thin">  {job_title}</spam></p>
            </div>
            <div className="mt-2">
              <h2 className="font-bold mb-2 text-sm">Contact Information</h2>
              <p className="divider"></p>
              <p className="text-sm font-semibold">Phone:<span className='font-thin'> {contact_information.phone}</span></p>
              <p className="text-sm font-semibold">Email:<span className='font-thin'> {contact_information.email}</span></p>
              <p className="text-sm font-semibold">Address:<span className='font-thin'> {location}</span></p>
            </div>
          </div>
          <div className="pt-4 mt-auto">
            <button className="btn btn-block border-none text-gradient bg-gradient-to-r from-indigo-400 rounded-md to-violet-500 text-white">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

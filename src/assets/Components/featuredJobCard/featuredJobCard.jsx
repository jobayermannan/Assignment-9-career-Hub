import React from 'react';

import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import {MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const FeaturedJobCard = ({featureCard}) => {
   const {company_logo,job_title,id,location,remote_or_onsite,fulltime_parttime,company_name,salary}=featureCard;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <img src={company_logo} className="w-20 md:w-40" alt="Google Logo" />

      <h2 className="card-title mt-6 text-sm lg:text-lg ">{job_title}</h2>
      <h1 className=" text-lg lg:text-xl text-left  mb-2">{company_name}</h1>
      <div className="flex flex-col lg:flex-row sm:flex-col  gap-4">
        <button className="btn btn-outline rounded-md text-indigo-600 hover:bg-indigo-400 btn-sm lg:btn-sm font-normal">
          {remote_or_onsite}
        </button>
        <button className="btn btn-outline rounded-md text-indigo-600 hover:bg-indigo-400 btn-sm lg:btn-sm font-normal">
          {fulltime_parttime}
        </button>
      </div>
      <div className="flex flex-col lg:flex-row sm:flex-col items-start lg:items-center mt-4 lg:mt-2">
        <div className="flex items-center lg:mr-6 mb-2 lg:mb-0">
          <MapPinIcon className="h-5 w-5  text-gray-400 mr-1" />
          <p className="text-left text-sm lg:text-xl">{location}</p>
        </div>
        <div className="flex items-center">
          <CurrencyDollarIcon className="h-6 w-5 text-gray-400 mr-1" />
          <p className="text-left text-sm lg:text-xl ">Salary: {salary}</p>
        </div>
      </div>

      <div className="card-actions text-center ml-4 lg:ml-0 lg:text-left sm:text-center   mt-2">
        <Link to={`/jobs/${id}`}>
        <button className="btn rounded-md bg-indigo-400 text-slate-100 hover:bg-slate-400 border-none btn-sm lg:btn-md lg:font-semibold font-normal">
        View Details
        </button>
        </Link>
      </div>
    </div>
  </div>
        </div>
    );
};

export default FeaturedJobCard;
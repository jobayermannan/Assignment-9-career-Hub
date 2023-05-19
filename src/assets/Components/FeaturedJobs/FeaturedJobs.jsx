import React from 'react';
import google from "../../Images/All Images/google-1-1 1.png"
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import {MapPinIcon } from '@heroicons/react/24/solid'


const FeaturedJobs = () => {
    return (
        <div className="container mx-auto my-10 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-x-6">
          <div className="card text-left  bg-base-100 shadow-xl">
            <div className="card-body">
            <img src={google} className=' md:w-20 lg:w-40' alt='Google Logo' />

              <h2 className=" card-title">Technical Database Engineer</h2>
              <h1 className='text-lg'>Google LLC</h1>
              <div className='flex flex-row gap-4'>
              <button className="btn btn-outline  rounded-md  text-indigo-600 hover:bg-indigo-400   btn-sm   lg:btn-sm  font-normal">remote</button>
              <button className="btn btn-outline  rounded-md  text-indigo-600 hover:bg-indigo-400   btn-sm   lg:btn-sm font-normal ">Full time</button>
              </div>
              
              
              <div className='flex '>
              
              
               <p className='flex items-center'>< MapPinIcon className="h-6 w-6 text-gray-400"/>Salary : 100K - 150K </p>
               <p className='flex items-center'>< CurrencyDollarIcon className="h-6 w-6 text-gray-400"/>Salary : 100K - 150K </p>
              </div>
              <div className="card-actions ">
                <button className="btn   rounded-lg bg-indigo-400 text-blue-950 hover:bg-slate-400 border-none  btn-sm   lg:btn-md lg:font-semibold font-semibold h-[10px]">View Details</button>
              </div>
            </div>
          </div>
          <div className="card  h-full text-left bg-slate-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card Title 2</h2>
              <p className=''> If a dog chews shoes, whose shoes does he choose?</p>
              <div className="card-actions ">
                <button className="btn  rounded-lg bg-indigo-400 text-blue-950 hover:bg-slate-400 border-none  btn-sm   lg:btn-md font-normal">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card   h-full w-full bg-base-100 text-left shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card Title 3</h2>
              <p>If a dog chews shoes, whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn  rounded-lg bg-neutral-content text-blue-950 hover:bg-indigo-400 border-none  btn-sm   lg:btn-md lg:font-semibold font-semibold ">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card h-full w-full text-left bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card Title 4</h2>
              <p>If a dog chews shoes, whose shoes does he choose?</p>
              <div className="card-actions ">
                <button className="btn  rounded-lg bg-neutral-content text-blue-950 hover:bg-indigo-400 border-none  btn-sm   lg:btn-md lg:font-semibold font-semibold ">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

                 

    );
};

export default FeaturedJobs;
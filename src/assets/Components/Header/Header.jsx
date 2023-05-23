import React from 'react';
import Avater from '../../Images/All Images/Avater.png' 
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Header = () => {
    return (


<>

<div className="hero min-h-screen bg-indigo-50 rounded-xl ">
  <div className="hero-content flex flex-col lg:flex-row-reverse">
    <div className="lg:w-1/2  ">
      <img src={Avater} className=" h-auto max-w-full max-h-full object-contain" />
    </div>
    <div className="lg:w-1/2 lg:text-left lg:ml-12">
      <h1 className=" text-2xl lg:text-5xl  font-bold uppercase   lg:subpixel-antialiased">One Step Closer To Your <span className='text-indigo-400'> Dream Job</span></h1>
      <p className="py-6 text-blue-950">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
      <button className="btn  rounded-xl bg-neutral-content border-none hover:bg-indigo-400 text-blue-950  "  >Get Started</button>
    </div>
  </div>
</div>
 <JobCategory></JobCategory>
 <FeaturedJobs></FeaturedJobs>

 </>


    );
};

export default Header;
import React from 'react';
import JobCategory from './../JobCategory/JobCategory';
import account from '../../Images/Icons/accounts.png' 
import business from '../../Images/Icons/business.png' 
import chip from '../../Images/Icons/chip 1.png' 
import socialMedia from '../../Images/Icons/social-media 1.png'

const CategoryCard = ({job}) => {
   
    const {logo,name,jobsAvailable }=job;
    return (
        <div>
           <div className='card  bg-indigo-100 transform-gpu transition-all duration-400 lg:hover:translate-y-3 hover:shadow-lg'>
                       <div className='card-body  max-w-full max-h-full  text-left  ' >
                       <img src={logo} alt="Icon" className="w-12 h-10 " />
                        <h2 className='card-title lg:whitespace-nowrap lg:mt-6'>
                        {name}
                           
                        </h2>
                        <p className=''>
                             {jobsAvailable} Jobs Available
                        </p>
                       </div>
                    </div>
        </div>
    );
};

export default CategoryCard;
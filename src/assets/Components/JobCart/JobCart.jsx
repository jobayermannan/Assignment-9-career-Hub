import React from 'react';

const JobCart = ({ product }) => {

  const { id,company_logo,job_title, job_description,location } = product;


  return (
    <li className='flex flex-row-reverse py-6 sm:flex-row sm:justify-between'>
      <div className='flex items-center w-full space-x-2 sm:space-x-4'>
     <img className='w-40 h-40 ' src={company_logo}></img>
        <div className='flex flex-col justify-between w-full pb-4'>
          <div className='flex justify-between w-full pb-2 space-x-2'>
            <div className='space-y-1'>
              <p className='text-lg font-semibold leading-snug sm:pr-8 text-center '>
                {job_title}
              </p>
              <p className='text-sm text-gray-400'>Job Description: {job_description}</p>
            </div>
            <div className='text-right'>
              {/* Add appropriate pricing or quantity data if available */}
              <p className='text-lg font-semibold'>{}</p>
              <p className='text-sm text-gray-600'>{}</p>
            </div>
          </div>
          <div className='flex text-sm divide-x'>
            {/* Add any additional buttons or actions as needed */}
            <p className=''>{location}</p>
          
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobCart;


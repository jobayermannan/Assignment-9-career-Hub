
import React, { useState,  useEffect } from 'react';
 
import CategoryCard from '../CategoryCard/CatergoryCard';
 

const JobCategory = () => {

    const [jobs, setJobCategories] =useState([]);

    useEffect(() => {
        fetch('jobCategory.json').then ((res )=> res.json()).then ((data) =>setJobCategories (data));
      
      
    }, []);
    return (
        <div>
            <section  >
                <div className='container lg:mx-auto  my-10 lg:px-8 '>
                    <div className='text-center'>
                        <h2 className=' lg:text-5xl text-2xl font-semibold mb-4'>Job Category List </h2>
                        <p className=' text-sm lg:text-2xl mb-6 lg:mb-14'>
                        Explore thousands of job opportunities with all the information you need. Its your future
                        </p>
                    </div>

                    
                    <div className="my-10 mx-4 sm:mx-8  py-10 px-4 sm:px-4  grid grid-cols-1 gap-4 sm:gap-4 lg:grid-cols-4 lg:gap-10 ">


                        

                     {
                        jobs.map (job=> <CategoryCard job={job} key={job.id}> {job.name}</CategoryCard>)
                     }

               
                 
                    </div>
                </div>

            </section>
            
            
        </div>
    );
};

export default JobCategory;
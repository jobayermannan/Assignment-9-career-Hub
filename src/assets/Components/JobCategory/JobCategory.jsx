
import React from 'react';
import account from '../../Images/Icons/accounts.png' 
import business from '../../Images/Icons/business.png' 
import chip from '../../Images/Icons/chip 1.png' 
import socialMedia from '../../Images/Icons/social-media 1.png' 
 

const JobCategory = () => {
    return (
        <div>
            <section  >
                <div className='container  my-10 '>
                    <div className='text-center'>
                        <h2 className=' lg:text-5xl text-3xl font-bold mb-4'>Job Category List </h2>
                        <p className=' text-xl lg:text-2xl mb-6 lg:mb-14'>
                        Explore thousands of job opportunities with all the information you need. Its your future
                        </p>
                    </div>

                    
                    <div className="my-10 mx-4 sm:mx-8  py-10 px-4 sm:px-4  grid grid-cols-1 gap-4 sm:gap-4 lg:grid-cols-4 lg:gap-10 ">
                    <div className='card  bg-indigo-100 transform-gpu transition-all duration-400 hover:translate-y-3 hover:shadow-lg'>
                       <div className='card-body  max-w-full max-h-full  text-left  ' >
                       <img src={account} alt="Icon" className="w-12 h-10 " />
                        <h2 className='card-title lg:whitespace-nowrap lg:mt-6'>
                        Account & Finance
                           
                        </h2>
                        <p className=''>
                             3000 job available
                        </p>
                       </div>
                    </div>
                    <div className='card bg-indigo-100 transform-gpu transition-all duration-400 hover:translate-y-3 hover:shadow-lg '>
                       <div className='
                       card-body h-auto max-w-full max-h-full text-left'>
                       <img src={business} alt="Icon" className="w-12 h-10" />
                        <h2 className='card-title lg:whitespace-nowrap lg:mt-6'>
                        Creative Design
                           
                        </h2>
                        <p>
                            150+ Jobs available
                        </p>
                       </div>
                    </div>
                    <div className='card bg-indigo-100 transform-gpu transition-all duration-400 hover:translate-y-3 hover:shadow-lg'>
                       <div className='card-body h-auto max-w-full max-h-full text-left'>
                       <img src={chip} alt="Icon" className="w-12 h-10" />
                        <h2 className='card-title lg:whitespace-nowrap lg:mt-6'>
                        Account & Finance
                           
                        </h2>
                        <p>
                             250+ job available
                        </p>
                       </div>
                    </div>
                    <div className='card bg-indigo-100 transform-gpu transition-all duration-400 hover:translate-y-3 hover:shadow-lg'>
                       <div className='card-body h-auto max-w-full max-h-full text-left'>
                       <img src={socialMedia} alt="Icon" className="w-14 h-12" />
                        <h2 className='card-title lg:whitespace-nowrap lg:mt-6'>
                        Account & Finance
                           
                        </h2>
                        <p>
                             200 job available
                        </p>
                       </div>
                    </div>
                 
                    </div>
                </div>

            </section>
            
            
        </div>
    );
};

export default JobCategory;
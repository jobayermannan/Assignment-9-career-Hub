import React, { useEffect, useState } from 'react';
import google from "../../Images/All Images/google-1-1 1.png"

import FeaturedJobCard from '../featuredJobCard/featuredJobCard';


const FeaturedJobs = () => {
  const [featureCards,setFeatureCard] =useState([])
  useEffect(()=> {
    fetch ('jobData.json').then((res) => res.json()).then((data) =>setFeatureCard (data))

  },[])
    return (
      <>
       <section>
        <div className="container mx-auto my-10 px-8">
        <div className='text-center'>
                        <h2 className=' lg:text-5xl text-3xl font-bold mb-4'>Job Category List </h2>
                        <p className=' text-xl lg:text-2xl mb-6 lg:mb-14'>
                        Explore thousands of job opportunities with all the information you need. Its your future
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {
        featureCards.map((featureCard)=> <FeaturedJobCard key={featureCard.id} featureCard={featureCard}> </FeaturedJobCard>)
      }
</div>

      </div>
      </section>
      </>         

    );
};

export default FeaturedJobs;
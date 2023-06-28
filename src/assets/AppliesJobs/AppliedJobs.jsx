import { useEffect, useState } from 'react';
import { getStoredCart } from '../Utils/fakeDb';
import JobCart from '../Components/JobCart/JobCart';

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = getStoredCart();
    const jobsArray = Object.values(storedJobs);
    setAppliedJobs(jobsArray);
  }, []);
  
  return (
    <div>
      <div
        className="hero bg-indigo-50 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("src/assets/Images/All Images/Vector.png")`,
          backgroundSize: '23%',
          backgroundRepeat:'no-repeat',
          backgroundPosition: 'left', 
        }}
      >
        <div className="hero-content text-black">
          <div className="max-w-md">
            <h1 className="mt-20 pt-16 text-2xl font-bold">Applied Job</h1>


          </div>
        </div>
      </div>
      <div className='flex min-h-screen items-start justify-start bg-gray-100 text-gray-900'>
        <section className='flex flex-col max-w-3xl p-8 space-y-4 sm:p-10'>
          <ul className='flex flex-col divide-y divide-gray-700'>
            {appliedJobs.map((product) => (
              <JobCart key={product.id} product={product}/> ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AppliedJobs;

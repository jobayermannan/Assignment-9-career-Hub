const addToDb = (job) => {
    let appliedJobs = {};
  
    // Get previous data from local storage
    const storedJobs = localStorage.getItem('applied-jobs');
    if (storedJobs) {
      appliedJobs = JSON.parse(storedJobs);
    }
  
    // Add the job data
    appliedJobs[job.id] = job;
  
    // Save the updated data to local storage
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
  };
  

  

  const getStoredCart = () => {
    let appliedJobs = {};
  
    // Get previous data from local storage
    const storedJobs = localStorage.getItem('applied-jobs');
    if (storedJobs) {
      appliedJobs = JSON.parse(storedJobs);
    }
  
    return appliedJobs;
  };
  
 
  

export  {addToDb,getStoredCart}
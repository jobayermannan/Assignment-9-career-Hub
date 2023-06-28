import React, { createContext, useState } from 'react';

export const AppliedJobsContext = createContext();

export const AppliedJobsProvider = ({ children }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const addAppliedJob = (job) => {
    setAppliedJobs((prevJobs) => [...prevJobs, job]);
  };

  return (
    <AppliedJobsContext.Provider value={{ appliedJobs, setAppliedJobs, addAppliedJob }}>
      {children}
    </AppliedJobsContext.Provider>
  );
};

import React from 'react';
import backgroundImage from '../Images/All Images/Vector-1.png'; 


const AppliedJobs = () => {
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <p>hi this is applied job</p>
        </div>
    );
};

export default AppliedJobs;
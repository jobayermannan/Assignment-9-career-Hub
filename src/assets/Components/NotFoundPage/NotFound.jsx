import React from 'react';

const NotFound = () => {
  return (
    <div>
       <div className="flex flex-col items-center justify-center h-screen bg-indigo-50">
      <h1 className="text-6xl font-bold text-primary mb-8">404 - Page Not Found</h1>
      <p className="text-lg text-blue">Oops! The page you are looking for does not exist.</p>
      <img
        src="https://giphy.com/static/img/error_pages/crying-cowbow-emoji.gif"
        alt="404 Not Found"
        className="w-48 h-48"
      />
    </div>
    </div>
  );
};

export default NotFound;

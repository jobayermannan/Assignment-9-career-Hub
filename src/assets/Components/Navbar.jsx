import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'



const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={1} className="btn btn-primary btn-circle lg:hidden  mr-1">

    
      <Bars3Icon className="h-6 w-6 text-black-500" />
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li className='font-semibold'><a>Statistics</a></li>
        <li tabIndex={0}>
          <a className="justify-between font-semibold">
           Applied Jobs
      
          </a>
    
        </li>
        <li><a className='font-semibold'>Blog</a></li>
      </ul>
    </div>
    <a className=" normal-case lg:text-2xl sm: text-sm font-extrabold ">
        FINDCareer</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='font-semibold'><a>Statistics</a></li>
      <li tabIndex={0}>
        <a className='font-semibold'>
        Applied Job
    
        </a>
       
      </li>
      <li><a className='font-semibold'>Blog</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className=" btn btn-primary hover:bg-indigo-400 outline-none  btn-sm   lg:btn-md lg:font-bold font-semibold   ">Start  Applying</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;
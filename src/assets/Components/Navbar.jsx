import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Statistics from './../Statistics/Statistics';



const Navbar = () => {
    return (
      <nav>
        <div className='mb-6'>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={1} className="btn bg-neutral-content border-none hover:bg-indigo-400  btn-circle  lg:hidden  mr-1">

    
      <Bars3Icon className="h-6 w-6 text-blue-950   " />
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li ><p  className='font-semibold border-none hover:bg-indigo-400 text-blue-950 '><Link to="/statistics">Statistics</Link> </p></li>
        <li tabIndex={0}>
          <p className="justify-between font-semibold border-none hover:bg-indigo-400 text-blue-950 ">
          <Link to="/appliedJOb"> Applied Job</Link>
      
          </p>
    
        </li>
        <li><p className='font-semibold border-none hover:bg-indigo-400 text-blue-950 '><Link to="/blog"> Blog</Link> </p></li>
      </ul>
    </div>
    <a className=" normal-case lg:text-2xl sm: text-sm font-extrabold ">
    <Link to="/"> FINDCareer</Link>   </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li ><p className='font-semibold border-none hover:bg-indigo-400 text-blue-950 '> <Link to="/statistics"> Statistics</Link></p></li>
      <li tabIndex={0}>
        <p className='font-semibold border-none hover:bg-indigo-400 text-blue-950 '>
       <Link to="/appliedJOb"> Applied Job</Link> 
    
        </p>
       
      </li>
      <li><p className='font-semibold  border-none hover:bg-indigo-400 text-blue-950 '> <Link to="/blog"> Blog</Link> </p></li>
    </ul>
  </div>
  <div className="navbar-end">
    <p className=" btn rounded-xl bg-neutral-content text-blue-950 hover:bg-indigo-400 border-none  btn-sm   lg:btn-md lg:font-bold font-semibold   ">  start applying </p>
  </div>
</div>
        </div>
        </nav>
    );
};

export default Navbar;
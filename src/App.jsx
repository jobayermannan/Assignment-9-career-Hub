import { useState } from 'react'

import './App.css'
import Navbar from './assets/Components/Navbar';
import Header from './assets/Components/Header/Header';
import JobCategory from './assets/Components/JobCategory/JobCategory';
import FeaturedJobs from './assets/Components/FeaturedJobs/FeaturedJobs';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar></Navbar>
  <Header></Header>
  <JobCategory></JobCategory>
 <FeaturedJobs></FeaturedJobs>
    </>
  )
}

export default App

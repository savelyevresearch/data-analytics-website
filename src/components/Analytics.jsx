import React from 'react';
import Laptop from '../assets/data-analytics-laptop.png';

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[200px] mx-auto my-4' src={Laptop} alt='/'/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Consider the various charts for more details about your data.
            The information obtained as a result of data analysis is further
            used to make rational business/personal decisions.
          </p>
          <button className='bg-[#000300] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";


const Country = () => {
  const location = useLocation();
  const { name, officialName, area, googleMaps, population, flag, region, capital } = location.state;

  return (
    <div className='bg-slate-800 text-white'>
      <div className='container mx-auto px-4 md:container-md'>
        <p className='text-center pt-6 pb-10 text-5xl capitalize'>{name}</p>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <img className='w-[600px]' src={flag} alt={name} />

          <p className='text-xl text-start'>Official Name: {officialName}</p>
          <p className='text-xl text-start'>Capital: {capital}</p>
          <p className='text-xl text-start'>Area: {area}</p>
          <p className='text-xl text-start'>Population: {population}</p>
          <p className='text-xl text-start'>Region: {region}</p>

        </div>

        <div className='w-full max-w-lg mx-auto pt-12 pb-5 flex justify-center'>
          <a href={googleMaps} target="_blank" rel="noopener noreferrer">
          <FaLocationDot className='text-7xl text-red-600 animate-bounce hover:text-green-500' />
          <hr />
          </a>
        </div>
        <div className='flex justify-center pt-3 pb-5'>
          <Link className='text-center text-base bg-black rounded-md px-2 py-1 uppercase' to='/'>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Country;

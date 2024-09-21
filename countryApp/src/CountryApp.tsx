import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountryApp() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const dataget = async () => {
    try {
      const res = await axios.get('https://restcountries.com/v3.1/all');
      setData(res.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  useEffect(() => {
    dataget();
  }, []);

  // Filter countries based on input
  const filteredCountries = data.filter((country: any) =>
    country.name.common.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className='bg-slate-800 text-white'>
      <div className='container mx-auto px-4 md:container-md'>
        <div className='flex flex-col justify-center space-y-6'>
          <h1 className='text-3xl text-center uppercase pt-6'>Country App</h1>
          <input
            className='w-56 self-center px-3 py-2 rounded-md outline-none text-black placeholder:text-center'
            type='search'
            name='search'
            id='search'
            placeholder='Search Country'
            value={input}
            onChange={handleChange}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
          {error && <h2>{error}</h2>}

          {filteredCountries.length ? (
            filteredCountries.map((country: any) => (
              <Link
                to={`/Country/${country.name.common}`} // Correct route linking
                key={country.cca3}
                state={{
                  name: country.name.common,
                  officialName: country.name.official,
                  area: country.area,
                  googleMaps: country.maps.googleMaps,
                  population: country.population,
                  flag: country.flags.png,
                  region: country.region,
                  capital: country.capital,
                }} // Correct syntax for passing multiple state values
                className='bg-slate-900 rounded-md p-3 shadow-sm hover:bg-slate-700 hover:scale-105 transition-all duration-150 cursor-pointer  shadow-black flex justify-evenly items-center'
              >
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className='w-20 rounded-full'
                />
                <h3 className='text-xl'>{country.name.common}</h3>
              </Link>
            ))
          ) : (
            <p>No countries found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryApp;

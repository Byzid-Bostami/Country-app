import React from 'react';
import CountryApp from './CountryApp';
import { Routes, Route } from 'react-router-dom';
import Counrty from './Counrty';
function App() {
  return (
    <>
      

      <Routes>
        <Route path='/' element={<CountryApp />} />
        <Route path="/Country/:name" element={<Counrty />} />
      </Routes>
    </>
  );
}

export default App;

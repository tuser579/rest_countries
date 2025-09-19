// import { useState } from 'react'
import { Suspense } from 'react';
import Countries from './components/Countries/countries.jsx'

import './App.css';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      
      <Suspense fallback={<p>Loading.....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App

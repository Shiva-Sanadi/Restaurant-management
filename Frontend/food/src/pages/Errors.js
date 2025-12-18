// src/pages/Errors.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Errors = () => {
  return (
    <>
    <div className='error'>
         <div class="card ">
        <h1>Error <span>Page Not Found</span></h1>
        
        <button > <NavLink to="/home"/>Go to Home </button>
    </div>
    </div>
    </>
  )
}

export default Errors;
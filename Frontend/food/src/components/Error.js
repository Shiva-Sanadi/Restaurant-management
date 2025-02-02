import React from 'react';
import { NavLink } from 'react-router-dom';


const Error = () => {
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

export default Error;
import React from "react";
import Nav from './Nav';
import { Outlet } from "react-router-dom";

function SharedLayout() {
    return (
      <>
      <div className='p-0 m-0  flex place-content-end'>
        <button 
          className="h-12 w-24 self-center font-mono text-semibold m-2 mr-4 mt-4 bg-green-400 text-white 
          text-center rounded-lg shadow-lg ">
          New game
        </button>
      </div>

      <hr className='m-4 border-1 border-red-400 ' />

        <div className='m-2 ml-8'>
        <Nav />
        <div className=' mt-12 mr-4'>
            <Outlet />
        </div>
      </div>
      </>
    );
  }
  
  export default SharedLayout;
  
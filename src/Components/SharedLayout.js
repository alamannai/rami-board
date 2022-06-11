import React from "react";
import Nav from './Nav';
import { Outlet } from "react-router-dom";

function SharedLayout() {
    return (
      <>
      <div className='p-0 xs:max-w-xs m-0 flex place-content-end'>
        <button 
          className="h-6 w-16 self-end font-mono m-2 mr-4 mt-4 bg-green-400 text-white 
          text-center text-xs rounded-lg shadow-lg ">
          New game
        </button>
      </div>

      <hr className='m-2 border-1 border-red-400 ' />

        <div className='m-2 ml-4'>
        <Nav />
        <div className=' mt-4 mr-4'>
            <Outlet />
        </div>
      </div>
      </>
    );
  }
  
  export default SharedLayout;
  
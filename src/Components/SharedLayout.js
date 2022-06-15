import React from "react";
import Nav from './Nav';
import { Outlet,Link } from "react-router-dom";

function SharedLayout() {
    return (
      <>
      <div className='p-0 xs:max-w-xs m-0 flex place-content-end'>
      <Link to="/newgame">
        <button 
          className="h-6 w-16 self-end font-mono m-2 mr-4 mt-4 bg-green-400 text-white 
          text-center text-xs rounded-lg shadow-lg ">
          New game
        </button>
        </Link>
      </div>

      <hr className='m-2 border-1 border-red-400 ' />

        <div className=' '>
        <Nav />
        <div className='bg-gray-200 h-full p-4 mt-4'>
            <Outlet />
        </div>
      </div>
      </>
    );
  }
  
  export default SharedLayout;
  
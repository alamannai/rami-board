import React, { useState, useEffect } from "react";
import AddPlayer from './AddPlayer';
import MemberList from './MemberList';


function Stats(props) {
    return (
      <>

      <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
                    lg:grid-cols-2 xl:grid-cols-2 gap-1 bg-white rounded-lg p-4'>
        <div className="col-start-1">
          <AddPlayer />

          <h2 className="mt-4">List of Members ({props.data.length}) :</h2>
          {props.data.length > 0 ? <MemberList memberList={props.data} />
          : 
          <h1 className ="mt-6 text-bold text-gray-700 place-self-center">No Members for now !</h1> 
          }
          
        </div>
        <div className="">
          <h3 className="mt-4">Some Other Stats ...</h3>
        </div>
      </div>
     

        
      </>
  
    );
  }
  
  export default Stats;
  
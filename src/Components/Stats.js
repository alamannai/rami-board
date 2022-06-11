import React, { useState, useEffect } from "react";
import AddPlayer from './AddPlayer';
import MemberList from './MemberList';
import axios from 'axios';

function Stats() {
    const [memberList, setMemberList] = useState([]);

      // Read all members
      useEffect(() => {
        axios.get('http://localhost:8000/api/members/')
          .then(res => {
            setMemberList(res.data)
          })
      });
    return (
      <>
      <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
                    lg:grid-cols-2 xl:grid-cols-2 gap-1 '>
        <div className="col-start-1">
          <AddPlayer />

          <h2 className="mt-4">List of Members :</h2>
          {memberList.length > 0 ? <MemberList memberList={memberList} />
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
  
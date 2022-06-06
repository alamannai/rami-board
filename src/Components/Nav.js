import React, { useState }  from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [isSlected, setIsSlected] = useState(true);
    const slc = "underline decoration-2 underline-offset-4";

    return (
      <>
        <ul className='flex flew-row gap-6'>
          <li className={slc}>
            <Link to="/">
                <button className='w-24' onClick={() => {setIsSlected(true)}}>
                    History
                </button>
            </Link>
            { isSlected ? <div className='w-24 h-1 bg-red-200'></div> : <div ></div> } 
          </li>
          <li className=''>
            <Link to="/stats">
                <button className='w-24' onClick={() => {setIsSlected(false)}}>
                    Stats
                </button>
            </Link>
            { isSlected ? <div></div> : <div className='w-24 h-1 bg-red-200'></div> }
          </li>
        </ul>
        
      </>
  
    );
  }
  
  export default Nav;
  
import React, { useState }  from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [isSlected, setIsSlected] = useState(0);

    return (
      <>
        <ul className='flex flew-row gap-4 ml-4'>
          <li className=''>
            <Link to="/">
                <button className='w-24' onClick={() => {setIsSlected(0)}}>
                    History
                </button>
            </Link>
            { isSlected === 0 ? <div className='w-24 h-1 bg-red-200'></div> : <div ></div> } 
          </li>
          <li className=''>
            <Link to="/stats">
                <button className='w-24' onClick={() => {setIsSlected(1)}}>
                    Stats
                </button>
            </Link>
            { isSlected === 1 ? <div className='w-24 h-1 bg-red-200'></div> :  <div></div>}
          </li>
          <li className=''>
            <Link to="/live">
                <button className='w-24' onClick={() => {setIsSlected(2)}}>
                    Live Game
                </button>
            </Link>
            { isSlected=== 2 ? <div className='w-24 h-1 bg-red-200'></div> :  <div></div> }
          </li>
        </ul>
        
      </>
  
    );
  }
  
  export default Nav;
  
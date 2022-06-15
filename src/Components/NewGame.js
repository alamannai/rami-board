import { Link } from "react-router-dom";
import PlayersList from './PlayersList';
import React, { useState, useEffect } from "react";

function NewGame(props) {
  const [members, setMembers] = useState([]);
  const [allowed, setAllowed] = useState(4);
    return (
        <>
        <div className="relative flex">
            <Link to='/'>
                <button className="h-6 w-16 font-mono absolute top-2 left-2 bg-red-400 text-white 
                                text-center text-xs rounded-lg shadow-lg" >
                    Cancel
                </button> 
            </Link>
        </div>
        <hr className='m-2 mt-12 mb-6 border-1 border-red-400 ' />
        <div className="bg-gray-200 h-full p-4">
        
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 relative 
                    lg:grid-cols-2 xl:grid-cols-2 gap-1 bg-white rounded-lg p-4bg-white rounded-lg p-4">
                <div className="col-start-1">
                    <h3>Choose ({allowed}) Members</h3>
                        {props.data.length > 3 ? <PlayersList memberList={props.data} />
                                : 
                                <div>
                                    <h1 className ="mt-6 text-bold text-gray-700 place-self-center">
                                    Not enough Members for now !
                                    </h1> 
                                    <div className="p-4">
                                    <Link to='/stats'>
                                        <button className="h-6 w-28 font-mono absolute bottom-2 left-4 
                                        bg-indigo-400 text-white text-center text-xs rounded-lg shadow-lg" >
                                            Create Members
                                        </button> 
                                    </Link>
                                </div>
                                </div>
                                
                                }
                </div>
                <div className="lg:col-start-2">
                    <h3>Some other stuff</h3>
                </div>   
            </div>
        </div>
        </>
    )
}

export default NewGame;
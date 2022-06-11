import React, { useState} from 'react';
import axios from 'axios';
import { ImCancelCircle } from "react-icons/im";

function AddPlayer() {
    const [btnState, setBtnState] = useState(true);
    const [name, setName] = useState('');
    const [alertText, setAlertText] = useState('');

      // Post a player
      const addMemberandler = () => {
        if (name.length  < 3  || name.charAt(name.length -1) === " " ) {
            name.length  < 3 ?
            setAlertText("Name shouldn't be empty or less than 3 characters .")
            : 
            setAlertText("Name shouldn't end with space .")
           ;

        } else {
            axios.post('http://localhost:8000/api/members/', { 'name': name});
            setAlertText("");
            setName("");
            setBtnState(true);
        }
};

  return (
    <div className="w-full lg:w-96 p-2 grid grid-cols-5 gap-2 rounded-lg text-gray-700
    overflow-hidden shadow-lg bg-gradient-to-r from-gray-300 
    to-[#445588] pb-6 relative" >
        <h5 className="col-start-2 col-span-3 mt-4 block text-gray-800 place-self-center 
                        text-sm font-bold ">Add Member</h5>
        {btnState? <button className="absolute bottom-5 w-16 h-8 bg-gray-200 rounded-lg right-3 text-gray-800 font-bold" 
                        onClick={()=> {setBtnState(false)}}>
             >>> 
        </button> 
        :
        <>
            <button className="h-4 w-4 ml-2 absolute top-2 right-2 text-black font-bold 
                            text-center rounded-lg " 
                    onClick={()=> {
                                        setBtnState(true);
                                        setAlertText("");
                                        setName("");
            }}>
                <ImCancelCircle className="m-auto place-self-center " />
            </button>

            <label className="col-start-1 place-self-center mt-4 block text-gray-700 text-sm font-bold"> Name </label>

            <input 
                className="mt-4 col-start-2 col-span-3 shadow appearance-none border rounded w-full py-2 px-3 
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-bold" 
                placeholder='Member Name' onChange={event => setName(event.target.value)}
                value={name}/>

            <button 
                className=" col-start-5 grow h-8 w-8 mt-3 bg-indigo-200 font-semibold text-center rounded-lg
                shadow-lg text-black place-self-center "  onClick={addMemberandler}>
                +
            </button>
            <div className='w-full ml-2 col-start-1 text-gray-800 col-span-4'>{alertText}</div>
        </>
        }
        
        

    </div>
  );
}

export default AddPlayer;
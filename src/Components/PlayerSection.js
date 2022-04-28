import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { changeName } from "../features/Cart/cartSlice";
import { useDispatch } from 'react-redux' ;

function PlayerSection(props) {
    const [edit, setEdit] = useState(false);
    const [playerName, setPlayerName] = useState('');
    const dispatch = useDispatch();
    const id = props.id;
    function hundleClicked(){
         setEdit(true);

    }
    function cancelledAction(){
       
        setEdit(false);
   }
 

    return (
      <div className=" grid grid-cols-3 items-center h-24 gap-2 ">
       <div className="flex font-bold col-start-1 h-full w-32 p-2 " >
          <p className="self-center mb-2 text-gray-100 font-mono ml-4 ">{props.name}</p>
         </div>
        
       
        { edit === false ? 
            <div className="col-start-3 p-4 flex place-content-end items-center h-full " >
            <button className="self-start h-8 w-8 bg-sky-600 font-semibold text-center rounded-lg 
                        shadow-lg text-white" 
                    onClick={hundleClicked}>
                      <IoSettingsSharp className="m-auto place-self-center" />
            </button>
            </div>
            : 
            <div className="col-start-2 col-span-2 p-2 w-full">
              <div className="flex place-content-end">
                <input type="text" className=" rounded-lg self-end mb-2 h-10 w-26 py-1 px-2 text-grey-darkest" 
                placeholder="Change Player Name" 
                onChange={event => setPlayerName(event.target.value)}
                value={playerName}/>
                </div>
                <div className="flex place-content-end ml-4">
                <button className="h-8 w-8 bg-white font-bold text-center rounded-lg "
                onClick={()=> {dispatch(changeName({playerName,id}))}} >
                   <GrUpdate className="m-auto place-self-center color-white" />
                </button>
                <button className="h-8 w-8 ml-2 bg-white text-black font-bold text-center rounded-lg " 
                onClick={cancelledAction}>
                   <ImCancelCircle className="m-auto place-self-center " />
                </button>
                </div>
            </div>
         }
      </div>
    
    );
  }
  
  export default PlayerSection;
  
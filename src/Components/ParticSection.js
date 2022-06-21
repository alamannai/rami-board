import React from "react";
import { choClicked } from "../features/Cart/ngSlice";
import { useDispatch, useSelector } from 'react-redux' ;
import axios from 'axios';

function ParticSection(props) {
  const dispatch = useDispatch();
  const n = useSelector((store) => store.ng.nb);
  const name = props.name;
    return (
      <div className=" grid grid-cols-3 items-center h-16 gap-2 ">
       <div className="flex font-bold col-start-1 h-full w-32 p-2 " >
          <p className="self-center mb-2 text-gray-100 font-mono ml-4 ">{name}</p>
         </div>
        
       

            <div className="col-start-3 h-full relative" >
                {props.sb === true ? <button className="absolute top-4 bg-gray-400 right-2 h-8 w-8 bg-white font-bold text-center 
                rounded-lg shadow-lg text-gray-600">
                        -
                </button>  : <button className="absolute top-4 right-2 h-8 w-8 bg-white font-bold text-center 
                rounded-lg shadow-lg text-gray-800"
                onClick={() => {dispatch(choClicked({name}))}}>
                        +
                </button> 
                }
            </div>
          
      </div>
    
    );
  }
  
  export default ParticSection;
  
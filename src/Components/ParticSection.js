import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { changeName } from "../features/Cart/cartSlice";
import { useDispatch } from 'react-redux' ;
import axios from 'axios';

function ParticSection(props) {


    return (
      <div className=" grid grid-cols-3 items-center h-16 gap-2 ">
       <div className="flex font-bold col-start-1 h-full w-32 p-2 " >
          <p className="self-center mb-2 text-gray-100 font-mono ml-4 ">{props.name}</p>
         </div>
        
       

            <div className="col-start-3 h-full relative" >
                <button className="absolute top-4 right-2 h-8 w-8 bg-white font-bold text-center 
                rounded-lg shadow-lg text-gray-800">
                        +
                </button>
            </div>
          
      </div>
    
    );
  }
  
  export default ParticSection;
  
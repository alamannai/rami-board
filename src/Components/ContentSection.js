import React, { useState } from "react";
import { addClicked, subClicked } from "../features/Cart/cartSlice";
import { useDispatch } from 'react-redux' ;

function ContentSection(props) {
  const [score, setScore] = useState(0);
  const dispatch = useDispatch();
  const id = props.id;

    return (
      <div className="grid grid-cols-3 w-full gap-2 mb-4 ">
        <div className="flex col-start-1 h-full col-span-2 place-content-center mb-2 ml-6">
        <div className="self-center">
          <button className="h-8 w-10 mr-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white
          font-bold text-center font-mono rounded-lg shadow-lg   " 
          onClick={() => {
            dispatch(subClicked({score,id}));
            setScore(0);}} >
            -
          </button>
          <input type="number" className="text-center drop-shadow-2xl font-mono border  w-24 h-8 text-grey-darkest
           rounded-lg" 
                onChange={event => setScore(event.target.value)} value={score}/>
          <button className="h-8 w-10 ml-4 bg-gradient-to-r from-red-400 to-cyan-600 text-white
          font-bold text-center font-mono rounded-lg shadow-lg " 
          onClick={() => {
            dispatch(addClicked({score,id}));
            setScore(0);}} >
            +
          </button>
        </div>
        </div>

        <div className="col-start-3 flex place-content-end h-full ">

          <div className=" w-12 h-8 flex place-content-center self-center text-center mr-8">
          <p className="self-center text-cyan-200 font-semibold text-xl font-mono">{props.score}</p>
          </div>


  
        </div>      
        
      </div>
  
    );
  }
  
  export default ContentSection;
  
import './App.css';
import Player from './Components/Player';
import Bar from './Components/Bar/Bar';
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const [ply, setPly] = useState(false);
  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();


  function showplayers(){
    setPly(true);
  }
  function resetClicked (){
    setPly(false);
  }
  return (
    <div className='p-0 m-0 h-screen pb-6 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 
    lg:grid-cols-2 xl:grid-cols-2 gap-3 '>

    

      {ply? <div className="h-full p-2 col-start-3 mt-4 mr-6">
        <div className="grid grid-cols-3 w-70 mb-8 bg-sky-400 text-white pt-2 pb-2 text-bold 
                        shadow-lg place-self-center text-center font-bold font-mono rounded-full">
            <div className="col-start-2 ">
              <p className=" font-mono  ">Players Score</p>
            </div>
            <div className="col-start-3 flex place-content-end">
              <button className="h-6 w-6 self-center font-mono text-semibold mr-2 
                          bg-sky-200 text-white text-center rounded-full shadow-lg " 
                          onClick={resetClicked}>
                            X
              </button>
            </div>
        </div>
           
           {cartItems.map((item) => {

           return <Player  key={item.id} {...item} />;
        })}
        
      </div> :
        <div className="p-2 col-start-3 w-80 relative">
        <button className="h-12 w-24 absolute bottom-16 right-4  bg-green-400 text-white text-bold text-center 
                      font-mono rounded-lg font-bold shadow-lg hover:h-14 hover:w-28 transition-all 
                      duration-200 ease-linear" onClick={showplayers} >
            New Game
          </button> 
          <p className="font-mono font-semibold absolute bottom-8 right-4  ">Click to Start a Match</p>
      </div>
       

      }
      
    </div>
  );
}

export default App;

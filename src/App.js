import './App.css';
import Player from './Components/Player';
import Bar from './Components/Bar/Bar';
import React, { useState } from "react";

function App() {
  const [ply, setPly] = useState(false);
  const [ng, setNg] = useState(false);

  function showplayers(){
    setPly(true);
    setNg(true);
  }
  function resetClicked (){
    setPly(false);
    setNg(false);
  }
  return (
    <div className='p-0 m-0 h-full p-3 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 
    xl:grid-cols-2 gap-3 bg-gray-100'>
{ng? 
         <div className="flex place-content-end col-start-3 mr-2">

       </div>
      :
      <div className="h-full p-2 col-start-3 flex place-content-center ">
        <button className="h-12 w-24 ml-4 bg-green-400 text-white text-bold text-center 
                      font-mono rounded-lg font-bold shadow-lg hover:h-14 hover:w-28 transition-all 
                      duration-200 ease-linear" onClick={showplayers} >
            New Game
          </button>
      </div>
     
}
      <div className=" fixed top-0 left-0 col-start-1 ">
     
      </div>

      {ply? <div className="h-full p-2 col-start-3">
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
        <Player  name={'Player 1'} />
        <Player  name={'Player 2'} />
        <Player  name={'Player 3'} />
        <Player  name={'Player 4'} />
        
      </div> :
       <div className="flex place-content-end col-start-3 mr-2">
       <p className="self-end font-mono font-semibold ">Click to Start a Match</p>
     </div>

      }
      
    </div>
  );
}

export default App;

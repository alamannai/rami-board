
import MatchList from './MatchList';
import React from "react";

function Home(props) {
  return (
    <>
      
        {props.data.length === 0 ?  
          <h1 className ="mt-6 text-bold text-gray-700 place-self-center">
            No Matches for now !
          </h1> 
          : 
          <MatchList matchList={props.data} />
         
          }
      
    </>
    
  );
}

export default Home;

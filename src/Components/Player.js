import React, { useState } from "react";
import PlayerSection from './PlayerSection';
import ContentSection from './ContentSection';
import ShowSection from './ShowSection';


function Player(props) {
    
  return (
      <div className='grid grid-rows-2 w-96 h-40 bg-[#662266] rounded-lg m-2'>
        <PlayerSection name={props.name} />
        
        <ContentSection />
     
     </div>

  );
}

export default Player;

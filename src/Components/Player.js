
import PlayerSection from './PlayerSection';
import ContentSection from './ContentSection';


 

function Player({id,name}) {
  return (
      <div className='grid grid-rows-2 w-96 h-40 bg-[#662266] bg-gradient-to-r from-gray-500 
                      to-[#662266] mb-4 rounded-lg '>
        <PlayerSection id={id} name={name} />
        <ContentSection />
     
     </div>

  );
}

export default Player;

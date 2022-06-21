import ParticSection from './ParticSection';
import { useDispatch, useSelector } from 'react-redux' ;

function PlayersList(props) {
    const btn = useSelector((store) => store.ng.stateBtn);
    return (
        <>
            <ul className=''>
                {props.memberList.map(member =>
                    <li key={member.name} className='w-full lg:w-96 bg-[#662266] bg-gradient-to-r from-gray-500 
                    to-[#662266] mt-4 rounded-lg '>
                         <ParticSection key={member.name} name={member.name} sb={btn} />
                    </li>
                    
                     )}
            </ul>
        </>
    )
}

export default PlayersList;
import ParticSection from './ParticSection';

function PlayersList(props) {
    return (
        <>
            <ul className=''>
                {props.memberList.map(member =>
                    <li key={member.name} className='w-full lg:w-96 bg-[#662266] bg-gradient-to-r from-gray-500 
                    to-[#662266] mt-4 rounded-lg '>
                         <ParticSection key={member.name} name={member.name} />
                    </li>
                    
                     )}
            </ul>
        </>
    )
}

export default PlayersList;
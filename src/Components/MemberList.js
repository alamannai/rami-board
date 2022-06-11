import PlayerSection from './PlayerSection';

function MemberList(props) {
    return (
        <div >
            <ul >
                {props.memberList.map(member =>
                    <li key={member.name} className='w-full lg:w-96 bg-[#662266] bg-gradient-to-r from-gray-500 
                    to-[#662266] mt-4 rounded-lg '> <PlayerSection  name={member.name} />
                    </li>
                    
                     )}
            </ul>
        </div>
    )
}

export default MemberList;
import MatchItem from './MatchItem'

function MatchList(props) {
    return (
        <div>
            <ul className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 
                    lg:grid-cols-3 xl:grid-cols-3 gap-1'>
                {props.matchList.map(match =>
                    <li className='m-2'> <MatchItem key={match.id} match={match} /></li>
                    
                     )}
            </ul>
        </div>
    )
}

export default MatchList;
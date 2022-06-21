import MatchItem from './MatchItem'

function MatchList(props) {
    return (
        <div>
            <ul className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 
                    lg:grid-cols-3 xl:grid-cols-3 gap-1 bg-white rounded-lg p-2'>
                {props.matchList.map(match =>
                    <li className='m-2' key={match.id}> <MatchItem  match={match} /></li>
                 
                     )}
            </ul>
        </div>
    )
}

export default MatchList;
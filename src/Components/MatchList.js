import MatchItem from './MatchItem'

function MatchList(props) {
    return (
        <div>
            <ul className='mb-6 '>
                {props.matchList.map(match =>
                    <li className='m-4'> <MatchItem key={match.id} match={match} /></li>
                    
                     )}
            </ul>
        </div>
    )
}

export default MatchList;
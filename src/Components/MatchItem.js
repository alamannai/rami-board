import axios from 'axios'
import React from 'react'

function MatchItem(props) {
    const deleteProjectHandler = (id) => {
    axios.delete(`http://localhost:8000/matches/${id}`)
        .then(res => console.log(res.data)) }
    return (
    <>
        <div className="w-full grid grid-cols-4 gap-1 rounded-lg text-gray-700
            overflow-hidden shadow-lg bg-[#662288] bg-gradient-to-r from-gray-500 
            to-[#342255] relative ">
             
             <div className='text-yellow-200 text-xs w-16 ml-4 col-start-1 place-self-center  '>
                 {props.match.date}</div>
            <div className="col-start-2 col-span-2 p-2 w-32 place-self-start">
                <ul className='grid grid-rows-2'>
                <li className={props.match.players[0].isLost?
                    "font-bold text-gray-200 text-xs m-2 text-center row-start-1 bg-red-400"
                :
                    "font-bold text-gray-200 text-xs text-center row-start-1 m-2"}>
                        {props.match.players[0].name}  {props.match.players[0].score}
                    </li>
                    <li className={props.match.players[1].isLost?
                    "font-bold text-gray-200 text-xs text-center row-start-1 m-2 bg-red-400"
                :
                    "font-bold text-gray-200 text-xs text-center row-start-1 m-2"}>
                        {props.match.players[1].name}  {props.match.players[1].score}
                    </li>
                    <li className={props.match.players[2].isLost?
                    "font-bold text-gray-200 text-xs text-center row-start-2 m-2 bg-red-400"
                :
                    "font-bold text-gray-200 text-xs text-center row-start-2 m-2"}>
                        {props.match.players[2].name}  {props.match.players[2].score}
                    </li>
                    <li className={props.match.players[3].isLost?
                    "font-bold text-gray-200 text-xs text-center row-start-2 m-2 bg-red-400"
                :
                    "font-bold text-gray-200 text-xs text-center row-start-2 m-2"}>
                        {props.match.players[3].name}  {props.match.players[3].score}
                    </li>
                </ul>
            </div>
            <button onClick={() => deleteProjectHandler()} 
                className="grow h-6 w-6 bg-gray-800 rounded-full text-center
                col-start-4 text-xs text-gray-100 absolute right-2 top-2 hover:bg-gray-400" >
                    X
            </button>
        </div>
    </>
    )
}

export default MatchItem;
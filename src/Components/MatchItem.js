import axios from 'axios'
import React from 'react'

function MatchItem(props) {
    const deleteProjectHandler = (id) => {
    axios.delete(`http://localhost:8000/matches/${id}`)
        .then(res => console.log(res.data)) }
    return (
    <>
        <button className="w-70 p-2 grid grid-cols-5 gap-2 rounded-lg text-gray-700
            overflow-hidden shadow-lg bg-[#662288] bg-gradient-to-r from-gray-500 
            to-[#342255] relative ">
             
             <div className='text-indigo-200 col-start-1 place-self-center ml-2'>{props.match.date}</div>
            <div className="col-start-2 col-span-3 p-2 w-60 ml-4 place-self-center">
                <ul className='flex'>
                <li className={props.match.players[0].isLost?
                    "font-bold text-gray-200 text-xs m-2 bg-red-400"
                :
                    "font-bold text-gray-200 text-xs m-2"}>
                        {props.match.players[0].name}  {props.match.players[0].score}
                    </li>
                    <li className={props.match.players[1].isLost?
                    "font-bold text-gray-200 text-xs m-2 bg-red-400"
                :
                    "font-bold text-gray-200 text-xs m-2"}>
                        {props.match.players[1].name}  {props.match.players[1].score}
                    </li>
                    <li className={props.match.players[2].isLost?
                    "font-bold text-gray-200 text-xs m-2 bg-red-400"
                :
                    "font-bold text-gray-200 text-xs m-2"}>
                        {props.match.players[2].name}  {props.match.players[2].score}
                    </li>
                    <li className={props.match.players[3].isLost?
                    "font-bold text-gray-200 text-xs m-2 bg-red-400"
                :
                    "font-bold text-gray-200 text-xs m-2"}>
                        {props.match.players[3].name}  {props.match.players[3].score}
                    </li>
                </ul>
            </div>
            <button onClick={() => deleteProjectHandler()} 
                className="grow h-8 w-8 bg-gray-800 rounded-lg text-center
                col-start-4 text-xs text-gray-100 absolute right-4 top-6 hover:bg-gray-400" >X</button>

        </button>
    </>
    )
}

export default MatchItem;
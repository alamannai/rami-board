import { Link } from "react-router-dom";
import PlayersList from './PlayersList';
import { useDispatch, useSelector } from 'react-redux' ;
import { canClicked } from "../features/Cart/ngSlice";

function NewGame(props) {
  const n = useSelector((store) => store.ng.nb);
  const p = useSelector((store) => store.ng.parts);
  const dispatch = useDispatch();
    return (
        <>
        <div className="relative flex">
            <Link to='/'>
                <button className="h-6 w-16 font-mono absolute top-2 left-2 bg-red-400 text-white 
                                text-center text-xs rounded-lg shadow-lg" 
                                onClick={() => {dispatch(canClicked())}}>
                    Cancel
                </button> 
            </Link>
        </div>
        <hr className='m-2 mt-12 mb-6 border-1 border-red-400 ' />
        <div className="bg-gray-200 h-full p-4">
        
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 relative 
                    lg:grid-cols-2 xl:grid-cols-2 gap-1 bg-white rounded-lg p-4bg-white rounded-lg p-4">
                <div className="col-start-1">
                    <h3>Choose ({n}) Members</h3>
                        {props.data.length > 3 ? <PlayersList memberList={props.data} />
                                : 
                                <div>
                                    <h1 className ="mt-6 text-bold text-gray-700 place-self-center">
                                    Not enough Members for now !
                                    </h1> 
                                    <div className="mt-4">
                                    <Link to='/stats'>
                                        <button className="h-6 w-28 font-mono  
                                        bg-indigo-400 text-white text-center text-xs rounded-lg shadow-lg" >
                                            Create Members
                                        </button> 
                                    </Link>
                                </div>
                                </div>
                                
                                }
                </div>
                <div className="lg:col-start-2 mt-2">
                    <h3>Some other stuff
                    <PlayersList memberList={p} />
                    </h3>
                </div>   
            </div>
        </div>
        </>
    )
}

export default NewGame;
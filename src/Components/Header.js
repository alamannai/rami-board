

function Header() {
  return (
      
<div className="grid grid-cols-3 w-96 mb-8 bg-sky-400 text-white pt-2 pb-2 text-bold 
                        shadow-lg place-self-center text-center font-bold font-mono rounded-full">
            <div className="col-start-2 w-40">
              <p className=" font-mono ">Rami Scoreboard</p>
            </div>
            <div className="col-start-3 flex place-content-end">
              <button className="h-6 w-6 self-center font-mono text-semibold mr-2 
                          bg-sky-200 text-white text-center rounded-full shadow-lg " >
                            X
              </button>
            </div>
        </div>
  );
}

export default Header;
import React from 'react';
import ItemBar from './ItemBar';
import { SiAiqfome, SiSimpleanalytics } from "react-icons/si";
import { FaUsers, FaVoteYea, FaHome } from 'react-icons/fa';



const Bar = () =>  {
    return (
        <div className=' h-screen w-16 mr-2
            flex flex-col bg-gray-900 text-white  shadow-lg'>

            <SiAiqfome className='h-8 w-8 mt-2 mb-2
                                text-red-200 mx-auto shadow-lg mb-3.5 mt-3.5
                                 animate-pulse' />
            <ItemBar icon={<FaHome />} />
            <ItemBar icon={<FaUsers />} />
            <ItemBar icon={<SiSimpleanalytics />} />
            <ItemBar icon={<FaVoteYea />} />
        </div> 
    )};

export default Bar;
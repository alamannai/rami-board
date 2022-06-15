import './App.css';
import Home from './Components/Home';
import Stats from './Components/Stats';
import Live from './Components/Live';
import NewGame from './Components/NewGame';
import SharedLayout from './Components/SharedLayout';
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const mlist = [
  { 
    id:'0',
    date: "03/29/2022",
    players :
      [
        {name: 'Ala',
        score: 1052,
        isLost: true},
        {name: 'Med',
        score: 766,
        isLost: false},
        {name: 'Dali',
        score: 1026,
        isLost: true},
        {name: 'Ahmed',
        score: 858,
        isLost: false}
      ],
    isFinished: true
    },
    {
      id:'1',
      date: "05/25/2022",
      players :
        [
          {name: 'Ala',
          score: 1052,
          isLost: true},
          {name: 'Med',
          score: 1066,
          isLost: true},
          {name: 'Dali',
          score: 726,
          isLost: false},
          {name: 'Ahmed',
          score: 858,
          isLost: false}
        ],
      isFinished: true
      },
      {
        id:'2',
        date: "06/01/2022",
        players :
          [
            {name: 'Ala',
            score: 952,
            isLost: false},
            {name: 'Med',
            score: 966,
            isLost: false},
            {name: 'Dali',
            score: 1026,
            isLost: true},
            {name: 'Ahmed',
            score: 1058,
            isLost: true}
          ],
        isFinished: true
        }
  ]

function App() {
  const {cartItems} = useSelector((store) => store.cart);
  const [matchList, setMatchList] = useState([]);
  const [memberList, setMemberList] = useState([]);

  // Read all members
  useEffect(() => {
    axios.get('http://localhost:8000/api/members/')
      .then(res => {
        setMemberList(res.data)
      })
  });


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />} >
            <Route index element={<Home data={mlist} />} />
            <Route path="stats" element={<Stats data={memberList} />} />
            <Route path="live" element={<Live />} />
          </Route>
          <Route path="newgame" element={<NewGame data={memberList} />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;

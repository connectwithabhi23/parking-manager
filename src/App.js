import React,{ useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ParkingLot from './Pages/ParkingLot';
import LotAllocation from './Pages/LotAllocation';
import LotDeallocation from './Pages/LotDeallocation';
import './App.css';


export const InputContext = React.createContext();


export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
         <Route path='/parkinglot' element={<ParkingLot></ParkingLot>}></Route>
         <Route path='/lotallocation' element={<LotAllocation></LotAllocation>}></Route>
         <Route path='/lotdeallocation' element={<LotDeallocation></LotDeallocation>}></Route>
        <Route path='*' element={<Home></Home>}></Route>
      </Routes>
      
    </div>
  );
}

// export default App;

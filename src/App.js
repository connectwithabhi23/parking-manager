import React,{ useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ParkingLot from './Pages/ParkingLot';
import LotAllocation from './Pages/LotAllocation';
import LotDeallocation from './Pages/LotDeallocation';
import './App.css';


export const InputContext = React.createContext();
export const ParkingLotsContext = React.createContext();

export default function App() {

  const [input, setInput] = useState('');
  const [parkingLots, setParkingLots] = useState([]);
  const [lotToDeallocate, setLotToDeallocate] = useState('');
  
  // console.log(parkingLots);
   console.log(lotToDeallocate)

  // console.log(input);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InputContext.Provider value={{input : input, setInput : setInput,setParkingLots:setParkingLots}}><Home></Home></InputContext.Provider>}></Route>
         <Route path='/parkinglot' element={<ParkingLotsContext.Provider value={[parkingLots,setParkingLots, setLotToDeallocate]}><ParkingLot></ParkingLot></ParkingLotsContext.Provider>}></Route>
         <Route path='/lotallocation' element={<ParkingLotsContext.Provider value={[parkingLots,setParkingLots]}><LotAllocation></LotAllocation></ParkingLotsContext.Provider>}></Route>
         <Route path='/lotdeallocation' element={<ParkingLotsContext.Provider 
         value={{lotToDeallocate : lotToDeallocate, parkingLots: parkingLots, setParkingLots: setParkingLots}}><LotDeallocation></LotDeallocation></ParkingLotsContext.Provider>}></Route>
        <Route path='*' element={<Home></Home>}></Route>
      </Routes>
      
    </div>
  );
}

// export default App;

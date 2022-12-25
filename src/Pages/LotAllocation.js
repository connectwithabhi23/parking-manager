import React, { useContext, useState } from 'react';
import moment from 'moment';
import './ParkingLot.css'
import { ParkingLotsContext } from '../App';
import { useNavigate } from 'react-router-dom';

function LotAllocation() {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const ParkingLotsData = useContext(ParkingLotsContext)
    // console.log(ParkingLotsData[0].length)
    const navigate = useNavigate()

    const handleClick = ()=>{

        while(true){
          let randomNum= Math.floor(Math.random() *ParkingLotsData[0].length  + 1);
            console.log(randomNum)
            // console.log(ParkingLotsData[0][randomNumber])

            if(ParkingLotsData[0][randomNum - 1].isAllocated === false){
              // ParkingLotsData[0][randomNumber].isAllocated= false
              ParkingLotsData[0][randomNum -1].isAllocated = true;
              ParkingLotsData[0][randomNum - 1] .registrationNumber = registrationNumber
              ParkingLotsData[0][randomNum - 1] .allocationTime = moment().format('llll');
              ParkingLotsData[1]([...ParkingLotsData[0]])
            
               navigate('/parkinglot')
               break;
            }
        }
    }

    const handleChange = (e)=>{
      setRegistrationNumber(e.target.value)
    } 
  return (
    <div>
        <h3>Allocate Parking Space</h3>
        <p>Current Time : {moment().format('LTS')}</p>
        <input placeholder='enter car number' value={registrationNumber} 
         style={{width: '250px', padding:'5px', margin:'10px'}} onChange={handleChange}></input>
        
        <div><button style={{margin : '5px'}} onClick={handleClick}>Assign Space</button></div>
    </div>
  )
}

export default LotAllocation
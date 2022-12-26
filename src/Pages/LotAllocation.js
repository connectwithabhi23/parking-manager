import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import './ParkingLot.css'
import { useNavigate } from 'react-router-dom';

function LotAllocation() {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [lots , setLots]= useState([])
    const navigate = useNavigate()

    useEffect(()=>{

      const items = JSON.parse(localStorage.getItem('parkingLots'))
      setLots([...items])


    },[])

    const handleClick = ()=>{
      if(registrationNumber==='' || registrationNumber.trim().length===0){
        alert('please enter car number')
        return;
      }
        while(true){
        
          let randomNum= Math.floor(Math.random() *lots.length  + 1);
            console.log(randomNum)


            if(lots[randomNum-1].isAllocated === false){
              lots[randomNum -1].isAllocated = true;
              lots[randomNum - 1] .registrationNumber = registrationNumber
              lots[randomNum - 1] .allocationTime = moment().format('llll');
              localStorage.setItem('parkingLots',JSON.stringify(lots))
            
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
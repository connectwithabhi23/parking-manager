import React, { useContext, useEffect, useState } from 'react'
import { ParkingLotsContext } from '../App'
import moment from "moment";
import { useNavigate } from 'react-router-dom';

function LotDeallocation() {

    const [charges, setCharges] = useState(10)
    const [index, setIndex] = useState(0);
    const [lots, setLots] = useState([]);
   
    const navigate = useNavigate()

    const deallocateLot = ()=>{
        alert('Payment done');
        lots[index] = {id : Number(index)+1, isAllocated : false, registrationNumber : ''}
        localStorage.setItem('parkingLots', JSON.stringify([...lots]))
        navigate('/parkinglot')
    }

    useEffect(()=>{
        let minutesSpent = 0;
        let hoursSpent = 0;
        const calculateCharges = ()=>{
            if(hoursSpent >12){
                charges += (hoursSpent - 2)*10 
            }
            setCharges(charges)
        }

        const lots = JSON.parse(localStorage.getItem('parkingLots'))
        const index = JSON.parse(localStorage.getItem('index'))
       
       
        setIndex(index)
        setLots(lots)
        calculateCharges()
    },[])
    

  return (
    <div>
        <h2> Remove this Parked Car</h2>
        <h5>Parking Location</h5>
        <p>Parked at slot {Number(index)+1} </p>
        <h5>Registration Number</h5>
        <p>{lots.length > 0 ? lots[index].registrationNumber :null}</p>
        <h5> Parked at </h5>
        <h6>{ lots[index]?.allocationTime}</h6>
    
        <h5> Current Time</h5>
        <p>{moment().format("llll")}`</p>
        <h5> Total Charges</h5>
        <p>{charges}$</p>

        <button onClick={deallocateLot}>Make Payment</button>

    </div>
  )
}

export default LotDeallocation
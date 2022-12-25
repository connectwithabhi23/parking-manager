import React, { useContext, useEffect, useState } from 'react'
import { ParkingLotsContext } from '../App'
import moment from "moment";
import { useNavigate } from 'react-router-dom';

function LotDeallocation() {

    const [charges, setCharges] = useState(10)
    const info = useContext(ParkingLotsContext)
    const navigate = useNavigate()
    const {lotToDeallocate, parkingLots, setParkingLots} = info
    const lot = parkingLots[lotToDeallocate];


    const deallocateLot = ()=>{
        alert('Payment done');
        parkingLots[lotToDeallocate] = {id : lotToDeallocate+1, isAllocated : false, registrationNumber : ''}
        setParkingLots([...parkingLots])

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

        calculateCharges()

    },[])

  return (
    <div>LotDeallocation
        <h2> Remove this Parked Car</h2>
        <h5>Parking Location</h5>
        <p>Parked at slot {lotToDeallocate+1} </p>
        <h5>Registration Number</h5>
        <p>{lot.registrationNumber}</p>
        <h5> Parked at </h5>
        <p>{ lot.allocationTime}</p>
        <h5> Current Time</h5>
        <p>{moment().format("llll")}`</p>
        <h5> Total Charges</h5>
        <p>{charges}$</p>

        <button onClick={deallocateLot}>Make Payment</button>

    </div>
  )
}

export default LotDeallocation
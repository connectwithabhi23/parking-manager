import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ParkingLotsContext } from '../App'
import './ParkingLot.css'



function ParkingLot() {
    const ParkingLotsData = useContext(ParkingLotsContext)
    const navigate = useNavigate();

    const handleClick = ()=>{
        let count = 0;
        console.log(ParkingLotsData[0])

        ParkingLotsData[0].forEach((lot)=>{
            if(lot.isAllocated){
                count+= 1
            }
        })

        if(count===ParkingLotsData[0].length){
            alert('Parking is full')
        }
        else{
            navigate('/lotallocation')
        }
    }

    const deallocateSpace = (ind)=>{

         const lot = ParkingLotsData[0][ind];

        if(lot.isAllocated){
            ParkingLotsData[2](ind)
          navigate('/lotdeallocation')
        }
        else{
            alert('No Car Parked')
        }
    }


  return (
    <div id='parking-lot'>
     <h1>Parking Lot</h1>
    <div id='parking-lots'>
    {ParkingLotsData[0].map((lot,ind)=>{
        return(<div key={ind} className={lot.isAllocated ? 'booked' : 'empty'}   onClick={()=>{deallocateSpace(ind)}}>{lot.id}<br></br> { !lot.isAllocated ? <span>No car Parked</span>: lot.registrationNumber}</div>)
    })}
    </div>
    <button id='allocate-btn' onClick={handleClick}>Allocate Space</button>
    </div>
  )
}

export default ParkingLot
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ParkingLot.css'



function ParkingLot() {
    const navigate = useNavigate();
    const [lots, setLots] = useState([])


    useEffect(()=>{
       const items = JSON.parse(localStorage.getItem('parkingLots'))
       setLots([...items]);
    },[])

    const handleClick = ()=>{
        let count = 0;
        lots.forEach((lot)=>{
            if(lot.isAllocated){
                count+= 1
            }
        })

        if(count===lots.length){
            alert('Parking is full')
        }
        else{
            navigate('/lotallocation')
        }
    }

    const deallocateSpace = (ind)=>{

         const lot = lots[ind];

        if(lot.isAllocated){
           localStorage.setItem('index',ind)
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
    {lots.map((lot,ind)=>{
        return(<div key={ind} className={lot?.isAllocated ? 'booked' : 'empty'}   onClick={()=>{deallocateSpace(ind)}}>{lot?.id}<br></br> { !lot?.isAllocated ? <span>No car Parked</span>: lot?.registrationNumber}</div>)
    })}
    </div>
    <button id='allocate-btn' onClick={handleClick}>Allocate Space</button>
    </div>
  )
}

export default ParkingLot

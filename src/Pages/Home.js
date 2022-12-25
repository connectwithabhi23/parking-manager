import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputContext } from '../App'

function Home() {
    const inputData = useContext(InputContext)
    const navigate = useNavigate()

    const handleChange = (e)=>{

        if(!isNaN(e.target.value))
        inputData.setInput(e.target.value);

        else{
            alert('please enter correct number')
        }
    }

    const handleClick = ()=>{

        const arr = [];

        for(let i = 0; i < inputData.input ; i++){
            arr.push({id: i+1, isAllocated : false, registrationNumber :''})
        }
        inputData.setParkingLots(arr);
        navigate('/parkinglot')
    }
  return (
    <div>
        <h3>Car Parking Manager</h3>
        <input type={'text'} placeholder='enter the number of spaces' value={inputData.input} onChange={handleChange}></input>
        <br></br>
        <button onClick={handleClick}>Create Parking Lots</button>
    </div>
  )
}

export default Home
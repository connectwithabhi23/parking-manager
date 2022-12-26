import React, { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputContext } from '../App'

function Home() {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const handleChange = (e)=>{

        if(!isNaN(e.target.value))
        setInput(e.target.value);

        else{
            alert('please enter correct number')
        }
    }

    const handleClick = ()=>{
        const arr = [];
        for(let i = 0; i < input ; i++){
            arr.push({id: i+1, isAllocated : false})
        }
        localStorage.setItem('parkingLots',JSON.stringify(arr));
        navigate('/parkinglot')
    }
  return (
    <div>
        <h3>Car Parking Manager</h3>
        <input type={'text'} placeholder='enter the number of lots'
         value={input} onChange={handleChange} style={{padding: '10px'}} ></input>
         <br></br>
         <br></br>
        <button onClick={handleClick} >Create Parking Lots</button>
    </div>
  )
}

export default Home
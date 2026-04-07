import React, { useContext } from 'react'
import { MyContext } from '../../../../Context/MyContext'

const Boy = () => {
    const {data,setData} = useContext(MyContext) 
    
    console.log(data)


    return (
        <div>
            <h1>Boy Component</h1>
          <p>total is : {data} </p>
          <button className='bg-red-500'  onClick={()=>setData(data+ 100)}>add money</button>
        </div>
    )
}

export default Boy
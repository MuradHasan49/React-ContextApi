import React, { useContext } from 'react'
import { MyContext } from '../../../../Context/MyContext'

const Boy = () => {
    const {data,setData} = useContext(MyContext) 
    
    console.log(data)


    return (
        <div>
            <h1>Boy Component</h1>
          <p>total is : {data} </p>
          <button className="px-6 py-2.5 bg-indigo-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"  onClick={()=>setData(data+ 100)}>add money</button>
        </div>
    )
}

export default Boy
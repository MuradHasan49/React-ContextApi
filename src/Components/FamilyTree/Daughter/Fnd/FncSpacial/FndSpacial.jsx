import React, { useContext } from 'react'
import { MyContext } from '../../../../../Context/MyContext'

const FndSpacial = () => {
  const { data, setData } = useContext(MyContext)
  return (
    <div>
      <div className="">
        FndSpacial
        <p>money is : {data}</p>
      </div>
<button className='bg-red-500' onClick={()=>setData(data+10000)}>add 10000 taka</button>
    </div>

  )
}

export default FndSpacial
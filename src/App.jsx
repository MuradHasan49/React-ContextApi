import { useState } from 'react'
import './App.css'
import Grandpaa from './Components/FamilyTree/Grandpaa/Grandpaa'
import { MyContext } from './Context/MyContext'

function App() {
  const [data, setData] = useState(10)
  return (

    <>
      <MyContext MyContext value={{ data, setData }}>
        <Grandpaa />
      </MyContext>
    </>
  )
}

export default App

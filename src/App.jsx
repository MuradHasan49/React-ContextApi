import { useState } from 'react'
import './App.css'
import Grandpaa from './Components/FamilyTree/Grandpaa/Grandpaa'
import { MyContext } from './Context/MyContext'

const Somedata = 9;

function App() {
  const [data, setData] = useState(Somedata)
  return (

    <>
      <MyContext MyContext value={{ data, setData }}>
        <Grandpaa />
      </MyContext>
    </>
  )
}

export default App

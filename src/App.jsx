import { useState } from 'react'
import {SearchBar} from './components'
import './App.css'
import BookData from './Data.json'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SearchBar placeHolder="Ingrese el valor a buscar" data={BookData}/>
      </div>
    </>
  )
}

export default App

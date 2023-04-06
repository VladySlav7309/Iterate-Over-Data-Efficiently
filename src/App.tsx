import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LineChartDemo from './charts/LineChartDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Iterate Over Data Efficiently</h1>
      <LineChartDemo />
    </div>
  )
}

export default App

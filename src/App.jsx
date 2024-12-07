import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HorizontalScroll from './pages/Scroll'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import CloudScroll from './Components/CloudScroll'
import Test from './pages/Test'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    <HorizontalScroll/>
    {/* <Test/>  */}
    {/* <CloudScroll/> */}
    {/* <Carousel/> */}

    </>
  )
}

export default App

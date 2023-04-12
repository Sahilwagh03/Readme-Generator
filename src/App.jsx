import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Component/Header/Header'
import { Home } from './Component/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Markdown } from './Component/MarkDown/Markdown'

function App() {
  const [Data, setData] = useState([])
  const userData=(data)=>{
    setData(data)
  }
  const Clicked=()=>{
    console.log(Data)
  }
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home getAllData={userData} printdata={Clicked}/>} />
        <Route path='/Markdown' element={<Markdown />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

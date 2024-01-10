import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./Components/Homepage"
import './App.css'
import Navbar from './Components/Navbar/navbax'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/' element={<Homepage />} />
        {/* <Route path='/myprofile' element={<MyProfile/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

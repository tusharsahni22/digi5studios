import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./Components/Homepage"
import Explorer from "./Components/Explorer"
import './App.css'
import Moviedesc from './Components/MovieDescription/moviedesc'
import HomePageTest from "./Components/Test/Homepage"


function App() {
  

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/' element={<Homepage />} />
        <Route path='/explorer' element={<Explorer />} />
        <Route path='/movie-description' element={<Moviedesc/>} />
        <Route path='/test' element={<HomePageTest/>} />
        {/* <Route path='/myprofile' element={<MyProfile/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

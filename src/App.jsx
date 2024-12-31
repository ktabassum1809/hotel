
import './App.css'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import Error from './Pages/Error'
import SingleRoom from './Pages/SingleRoom'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import SingleRoomDetails from './components/roomDetails/SingleRoomDetails'



function App() {
 
  
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/:id" element={<SingleRoom />} />
        <Route path="/rooms/:id" element={<SingleRoomDetails/>} />
        <Route path="*" element={<Error />} />

    </Routes>
   

    </>
  )
}

export default App

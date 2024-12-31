import React from 'react'
import Hero from '../components/Hero/Hero'
import Banner from '../components/banner/Banner'
import { Link } from 'react-router-dom'
import Title from '../components/Title/Title'
import AllRooms from '../components/rooms/AllRooms'
import FilteredRoom from '../components/filteredRooms/FilteredRoom'


function Rooms() {
  return (
    <>
    <div >
    <Hero hero="roomsHero">
    <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299" >
    <Link to="/rooms" ><button className="btn-primary">Back to rooms</button></Link>
    </Banner>
    </Hero>
   <AllRooms />
   <div style={{marginTop:'50px',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <FilteredRoom />
    </div>
    </div>

   
</>
    
  
  )
}

export default Rooms
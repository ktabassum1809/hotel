import React from 'react'
import Hero from '../components/Hero/Hero'
import Banner from '../components/banner/Banner'
import { Link } from 'react-router-dom'
import Service from '../components/services/Service'
import FeaturedRooms from '../components/featuredRooms/FeaturedRooms'

function Home() {
  return (
    <>
    <Hero> 
    <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299" >
    <Link to="/rooms" className="btn-primary">our rooms</Link>
    </Banner>

    </Hero>
    <Service />
    <FeaturedRooms />
    </>
  )
}

export default Home
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RoomContext } from '../context/RoomContext';
import Hero from '../components/Hero/Hero';
import Banner from '../components/banner/Banner';
import './SingleRoom.css';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";



function SingleRoom() {
  const { id } = useParams();
  const { handleSearchRoom ,handleLeftClick , handleRightClick ,currentIndex ,setCurrentIndex} = useContext(RoomContext);

  
  function capitalise(str){
    if(!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  const room = handleSearchRoom(id);
  console.log("room:",room)
  if (!room) {
    return <h2>No rooms found for ID: {id}</h2>;
  }

  const images = room.fields.images;
  console.log("images",images)
  if (currentIndex >= images.length) {
    setCurrentIndex(0); 
  }
  console.log("current index after update",currentIndex)
  return (
    <div>
    <Hero hero='roomsHero'>
    <Banner title={room.fields.name}subtitle=''><Link to='/rooms' className='btn-primary'>Back to Rooms</Link></Banner>
    </Hero>

    <div className='header-section'>
      <h1>Rooms</h1>
      <p>Room Type: {capitalise(room.fields.name)}</p>
     
      <p>Room Price: ${room.fields.price}</p>
      </div>
     <div className='slider-section'>
      <FaAngleLeft  className='left-arrow' onClick={() => handleLeftClick(images.length)}/>
    
      
      {images.length > 0 ? (
        <img
          src={images[currentIndex]?.fields?.file?.url || 'fallback-image-url.jpg'}
          alt={`${room.fields.name} - Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      ) : (
        <h2>No images available</h2>
      )}
   
      <FaAngleRight  className='right-arrow' onClick={() => handleRightClick(images.length)}/>
      </div>
    
     
      <div className='description-section'>
      <h3 style = {{textAlign: ' left'}}>Description</h3>
      <p style = {{textAlign: ' left'}}>{room.fields.description || 'No description available'}</p>
      </div>
      <div className='details-section'>
      <h3>Details</h3>
     <p>Size: {room.fields.size}㎡</p>
      <p>Capacity: {room.fields.capacity > 1 ? `${room.fields.capacity} persons` :  `${room.fields.capacity} person`} </p>
      <p>Pets: {room.fields.pets ? 'Allowed' : 'Not Allowed'}</p>
      <p>Breakfast: {room.fields.breakfast ? 'Included' : 'Not Included'}</p>
      </div>
      <div className='extras-section'>
      <h3>Extras</h3>
      <ul>
        {room.fields.extras.map((extra, index) => (
          <li key={index}>{extra}</li>
        ))}
      </ul>
    
    </div>
    </div>
  );
}

export default SingleRoom;

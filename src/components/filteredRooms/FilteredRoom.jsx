import React, { useContext } from 'react';
import { RoomContext } from '../../context/RoomContext';
import './FilteredRoom.css';
import { Link } from 'react-router-dom';



function FilteredRoom() {
  const {  filteredRooms,  loading } = useContext(RoomContext);

  return (
    <div>
     
      {/* Display loading or filtered rooms */}
      <div className="filteredrooms-center">
        {loading ? (
          <>
            <h1>Loading...</h1>
            <img src="/loading.gif" alt="loading" />
          </>
        ) : (filteredRooms.length !== 0 ? (
          filteredRooms.map((room) => {
            const firstImage =
              room.fields.images && room.fields.images.length > 0
                ? room.fields.images[0].fields.file.url
                : null;
            return (
              <div key={room.sys.id} className="filtered-room">
                {firstImage && <img src={firstImage} alt={room.fields.name} />}
                 <div className="overlay">
                 <Link to={`/rooms/${room.sys.id} `}><span>Features</span></Link>
                </div>
                <div className="filteredroom-info">
                  <h3>{room.fields.name}</h3>
                </div>
                <div className="filteredroom-price">
                  <h3>${room.fields.price}</h3>
                </div>
              </div>
            );
          })
        ) : ( <h3>No rooms matched your search parameters</h3>))}
      </div>

      <div>
      
      
      </div>
    </div>
  );
}

export default FilteredRoom;

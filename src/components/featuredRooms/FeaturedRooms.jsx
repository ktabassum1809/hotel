import React from "react";
import "./featuredRooms.css";
import { RoomContext } from "../../context/RoomContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

function FeaturedRooms() {
  const { featuredRooms, loading } = useContext(RoomContext);
  console.log(featuredRooms);
  return (
    <section className="featured-rooms">
      <Title title="Featured Rooms" />
      <div className="featured-rooms-center">
        {loading ? (
          <div>
          <h1>Loading...</h1>
          <img src="/loading.gif" alt="loading" />
          </div>
        ) : (
          featuredRooms.map((room) => {
            const firstImage =
              room.fields.images && room.fields.images.length > 0
                ? room.fields.images[0].fields.file.url
                : null;
            return (
              <div key={room.sys.id} className="featured-room">
              
                {firstImage && <img src={firstImage} alt={room.fields.name} />}
                 <div className="overlay">
                 <Link to={`/${room.sys.id}`}><span>Features</span></Link>
                </div>
                <div className="room-info">
                  <h3>{room.fields.name}</h3>
                </div>
                <div className="room-price">
                  <h3>${room.fields.price}</h3>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

export default FeaturedRooms;

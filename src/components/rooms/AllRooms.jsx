import React from "react";
import Title from "../Title/Title";
import "./AllRooms.css";
import { RoomContext } from "../../context/RoomContext";
import { useContext } from "react";

function AllRooms() {
  const {  handleSelectChange,handleBreakfastChange ,handlePetChange} = useContext(RoomContext);
  const { handleGuestChange, handlePriceRangeChange ,price,handleSizeChange ,size} = useContext(RoomContext)

  return (
    <div>
      <div className="title">
        <Title title="Search Rooms" />
      </div>
      <div className="filter-container">
        <div className="form-group">
          <label htmlFor="room">Room Type</label>
          <select name="type" id="type" onChange={(e) => handleSelectChange(e)}>
            <option value="all">All</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="family">Family</option>
            <option value="presidential">Presidential</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <input
            type="number"
            name="capacity"
            id="capacity"
            
            min="1"
            max="4"
            className="form-control"
            onChange={(e) =>handleGuestChange(e)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max="600"
            className="form-control"
            onChange={(e) => handlePriceRangeChange(e)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">Room Size {size}㎡</label>
          <input
            type="number"
            name="size"
            id="size"
            min="100"
            step="100"
            max="1000"
            className="form-control"
            onChange={(e) => handleSizeChange(e)}
          />
        </div>
        <div className="form-group breakfast-group">
        <label htmlFor="breakfast">Breakfast</label>
        <input
          type="checkbox"
          name="breakfast"
          id="breakfast"
          className="form-control"
          onChange={(e) => handleBreakfastChange(e)}
        />
      </div>
      <div className="form-group pet-group">
      <label htmlFor="pet">Pets</label>
      <input
        type="checkbox"
        name="pet"
        id="pet"
        className="form-control"
        onChange={(e) => handlePetChange(e)}
      />
    </div>
      </div>
    </div>
  );
}

export default AllRooms;

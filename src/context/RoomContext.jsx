import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import items from "../data";
import { useParams } from "react-router-dom";

export const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [price, setPrice] = useState(100);
  const [size, setSize] = useState(100);
  const [searchedRooms, setSearchedRooms] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setRooms(items);
    let featuredRooms= items.filter((room) => room.fields.featured === true);
     setFeaturedRooms(featuredRooms);
   setFilteredRooms(items);
      setLoading(false);

    
  }, []);

  // Filtering function
 function handleSelectChange(e) {
    const value = e.target.value;
    let tempRooms = [...rooms];
    if (value === 'all') {
      setFilteredRooms(tempRooms); // Show all rooms if "all" is selected
      console.log('selected rooms',value);
    } else {
      const filtered = tempRooms.filter((room) => room.fields.type === value);
      setFilteredRooms(filtered); // Update filteredRooms based on selection
      console.log('selected rooms',value);
    }
  }

  // guest capacity filtering function
  function handleGuestChange(e){
    const value = parseInt(e.target.value, 10);
    let tempRooms = [...rooms];
    if(value === 0 || isNaN(value)){
      setFilteredRooms(tempRooms);
      console.log('selected guest number',value);
    }
    else{
        let filtered = tempRooms.filter((room) => room.fields.capacity === value);
      setFilteredRooms(filtered);
      console.log('selected guest number',value);
    }
  }
//price range filtering function
  function handlePriceRangeChange(e){
    const value = parseInt(e.target.value, 10);
    setPrice(value);
   
    let tempRooms = [...rooms];
    if(value === 0 || isNaN(value)){
      setFilteredRooms(tempRooms);
      console.log('selected price',value);
    }
    else{
        let filtered = tempRooms.filter((room) => room.fields.price <= value);
      setFilteredRooms(filtered);
      console.log('selected price',value);
    }
  }
  //size filtering function
  function handleSizeChange(e){
    const value = parseInt(e.target.value, 10);
    setSize(value);
    let tempRooms = [...rooms];
    if(value === 0 || isNaN(value)){
      setFilteredRooms(tempRooms);
      console.log('selected size',value);
    }
    else{
        let filtered = tempRooms.filter((room) => room.fields.size <= value);
      setFilteredRooms(filtered);
      console.log('selected size',value);
    }
  }

  function handleBreakfastChange(e){
    const {name , checked } = e.target;
    let tempRooms = [...rooms];
    if(name === 'breakfast' && checked){
      let filtered = tempRooms.filter((room) => room.fields.breakfast === true);
      setFilteredRooms(filtered);
    }
    else if(name === 'breakfast' && !checked){
      setFilteredRooms(tempRooms);
    }
}

function handlePetChange(e){
    const {name , checked } = e.target;
    let tempRooms = [...rooms];
    if(name === 'pet' && checked){
        let filtered = tempRooms.filter((room) => room.fields.pets === true);
        setFilteredRooms(filtered);
        }
    else if(name === 'pet' && !checked){
        setFilteredRooms(tempRooms);
    }
}
//function to search rooms by id 
function handleSearchRoom(id){
  let tempRooms = [...rooms];
  let room = tempRooms.find((room) => room.sys.id === id);
  return room;
}

//slider function


function handleRightClick(imagesLength){
  setCurrentIndex((currentIndex + 1) % imagesLength);
}
function handleLeftClick(imagesLength){
  setCurrentIndex((currentIndex - 1 + images.length) % imagesLength);
}

  
  return (
    <RoomContext.Provider
      value={{
        rooms,
        featuredRooms,
        loading,
        setRooms,
        setFeaturedRooms,
        setLoading,
        filteredRooms,
        setFilteredRooms,
        handleSelectChange,
        handleGuestChange,
        handlePriceRangeChange,
        price,
        setPrice,
        handleSizeChange,
        size,
        handleBreakfastChange,
        handlePetChange,
        searchedRooms,
        setSearchedRooms,
        handleSearchRoom,
        handleLeftClick,
        handleRightClick,
        currentIndex,
        setCurrentIndex

      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
export default RoomContextProvider;

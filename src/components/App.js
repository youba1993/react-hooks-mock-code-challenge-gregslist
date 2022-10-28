import React, { useEffect, useState } from "react";
import Header from "./Header";
//import ListingCard from "./ListingCard";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listing, setListing] = useState([])
  const [search, setSearch] = useState ("")


  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(setListing);
  }, []);

  function removeHandler(id){
     const newListing = listing.filter(list => list.id !== id)
     setListing(newListing)
     fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
     })
  }

  const display = listing.filter(list => list.description.toLowerCase().includes(search))


  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer listing={display}  removeHandler={removeHandler}/>
    </div>
  );
}

export default App;

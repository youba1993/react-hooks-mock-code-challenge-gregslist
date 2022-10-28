import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing , removeHandler}) {
  return (
    <main>
      <ul className="cards">
        {listing.map((list)=>
          <ListingCard key={list.id} list={list} removeHandler={removeHandler}> </ListingCard>
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;

import React, { useState } from "react";

function ListingCard({list, removeHandler}) {
  const [favorite, setFavorite] = useState(true)
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={()=>setFavorite(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>setFavorite(true)}>☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button className="emoji-button delete" onClick={()=>removeHandler(list.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

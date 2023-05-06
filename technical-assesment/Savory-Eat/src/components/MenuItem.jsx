import React from "react";
const MenuItem = ({ item }) => {
    return (
      <div className="single_menu_list">
        <div className="thumb">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="menu_info">
          <div className="info_head">
            <h3>{item.name}</h3>
            <span>${item.price}</span>
          </div>
          <p>{item.description}</p>
        </div>
      </div>
    );
  };
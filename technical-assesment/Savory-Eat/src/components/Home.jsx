
import React, { useState } from "react";
import MenuList from "./MenuList";
import data from "../data/data.json";

const Home = ({ changeView }) => {
  const [menuItems, setMenuItems] = useState(data.menuItems);

  return (
    <div>
      <div className="latest_trand_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="trand_info text-center">
                <h3>Discover latest trending recipes</h3>
                <a className="boxed-btn3" onClick={() => changeView("Allrecipes")}>
                  View all recipes
                </a>
              </div>
            </div>
          </div>
          <MenuList menuItems={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default Home;

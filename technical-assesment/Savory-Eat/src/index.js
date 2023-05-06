import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); mport React, { useEffect, useState } from 'react';

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('/api/menuItems')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
     
    </div>
  );
}
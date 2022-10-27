import React from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Navbar />
      <Content 
      titulo="High five, Hyperlink!"
      image="hyperlink.webp"
      alternative="Hyperlink"
      />
      <Content 
      titulo="Sorry, bro."
      image="sorry_bro.webp"
      alternative="Sorry, bro."
      />
    </div>
  );
}

export default App;
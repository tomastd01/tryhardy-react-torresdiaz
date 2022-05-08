import React from "react";
import {Routes, Route} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
/* import ItemListContainer from './components/ItemListContainer/ItemListContainer'; */
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemDetailContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </div>
  );
}

export default App;

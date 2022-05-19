import React from "react";
import {Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from "./pages/Cart/Cart"
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
          <NavBar />
          <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path="/cart" element={<Cart/>} />
          </Routes>
    </div>
  );
}

export default App;

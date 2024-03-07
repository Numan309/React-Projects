import React, { useState } from 'react';
import './App.css';
import Data from './components/Data';
import UserInput from './components/UserInput';
export default function App() {
  const [wishlist, setWishList] = useState([]);
  function addToWishlist(newWish){
    setWishList([...wishlist, newWish]);
  };
  return (
    <div className='wishlist'>
      <UserInput addToWishlist={addToWishlist} />
      <Data wishlist={wishlist} />
    </div>
  );
}

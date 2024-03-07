import React, { useState } from 'react';
import './UserInput.css';
export default function UserInput({ addToWishlist }) {
  const [wish, setWish] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    addToWishlist(wish); 
    setWish(''); 
  }
  function handleChange(e) {
    e.preventDefault();
    setWish(e.target.value);
  }
  return (
    <>
      <div className='user'>
        <form onSubmit={handleSubmit} className='inpt'>
          <label htmlFor="wish">Wish : </label>
          <input type="text" id='wish' value={wish} onChange={handleChange} />
          <button className='btn'>update</button>
          <button className='clear'>ClearAll</button>
        </form>
      </div>
    </>
  );
}
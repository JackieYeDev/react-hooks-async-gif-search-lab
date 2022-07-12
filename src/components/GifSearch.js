import React, { useState } from "react";
function GiftSearch({ onSubmitQuery }) {
  const [searchQuery, setSearchQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSubmitQuery(searchQuery);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label>Enter a Search Term:</label>
      </div>
      <div className='mb-3'>
        <input onChange={e => setSearchQuery(e.target.value)}></input>
      </div>
      <div className='mb-3'>
        <button type='submit' className='btn btn-success'>
          Find Gifts
        </button>
      </div>
    </form>
  );
}
export default GiftSearch;

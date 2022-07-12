import React from "react";
function GiftList({ gifts }) {
  return (
    <ul>
      {gifts.map((gift, index) => (
        <li key={index}>
          <img src={gift}></img>
        </li>
      ))}
    </ul>
  );
}
export default GiftList;

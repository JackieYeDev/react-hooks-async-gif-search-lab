import React, { useState } from "react";
import GiftList from "./GifList";
import GiftSearch from "./GifSearch";
function GiftListContainer() {
  const [gifts, setGifts] = useState([]);
  function handleSubmit(searchQuery) {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=ErLRTxU8z5XZqWl2nkmrfK6Lh81klNkz&rating=g`
    )
      .then(res => res.json())
      .then(data =>
        setGifts(data.data.slice(0, 3).map(d => d.images.original.url))
      );
    // Path data.data.slice(0, 3) [forEach => images.original.url]
  }
  return (
    <>
      <GiftSearch onSubmitQuery={handleSubmit} />
      <GiftList gifts={gifts} />
    </>
  );
}
export default GiftListContainer;

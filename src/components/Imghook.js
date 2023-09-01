import React, { useState } from 'react';
import i1 from "../image/11.jpg";
import i2 from "../image/12.jpg";
import i3 from "../image/12p.jpg";

export default function Imghook() {
  const [num, setNum] = useState(i1);

  function increment() {
    if (num === i1) {
      setNum(i2);
    } else if (num === i2) {
      setNum(i3);
    } else {
      setNum(i1);
    }
  }

  return (
    <div className="banner">
      <button className="slide-button" onClick={increment}>
        New Image
      </button>
      <div className="image-container">
        <img src={num} height="200px" width="200px" alt="logo" />
      </div>
    </div>
  );
}

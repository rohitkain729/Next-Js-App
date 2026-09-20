"use client"

import React, { useState } from "react";

export const B = () => {
  const [loc, setLoc] = useState("");


  const handleClick = ()=>{
    alert(loc);
  }

  return (


    <div>
      <h4>B</h4>
      <p>
        Location: <input type="text" onChange={(e) => setLoc(e.target.value)} />
      </p>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

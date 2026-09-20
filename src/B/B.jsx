"use client"

import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const B = () => {
  const [loc, setLoc] = useState("");

    const dispatch=useDispatch();


  const handleClick = ()=>{
     dispatch({type:"LOC_UPDATE",loc:loc})
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

"use client"

import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const A = () => {
  const [name, setName] = useState("");

  const dispatch =useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
   dispatch({type:"NAME_UPDATE",name});
  };

  return (
    <div>
      <h1>A</h1>
      <p>
        Name: <input onChange={handleChange} />
      </p>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

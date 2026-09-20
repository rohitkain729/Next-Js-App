"use client"

import React, { useState } from "react";

export const A = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    alert(name);
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

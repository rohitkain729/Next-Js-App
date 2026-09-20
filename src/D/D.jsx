"use client"
import React from 'react'
import { useSelector } from 'react-redux'

export const D = () => {

  const loc=useSelector((state)=>{
    return  state.appReducer.loc;
  });

  return (
    <div>
        <h3>D</h3>
        <h5>Location:{loc}</h5>
    </div>
  )
}

"use client"
import React from 'react'
import { useSelector } from 'react-redux'

export const C = () => {
  const name = useSelector((state)=>{
    return state.appReducer.name;
  });

  return (
    <div>
        <h4>C</h4>
        <h3>Name:{name}</h3>
    </div>
  )
}

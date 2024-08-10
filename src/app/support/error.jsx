"use client";
import React from "react";

export default function errore({error,reset
}) {
  return (
    <>
      <div>{error.message} </div>
      <button onclick={()=>reset()} className='bg-slate-500'>reset</button>
    </>
  );
}

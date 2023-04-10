import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

export default function Loader() {
  return (
    <div style={{position:"fixed",marginInline:"45vw",marginBlock:"25vw"}}>
    <CirclesWithBar
  height="80"
  width="80"
  radius="5"
  color="black"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
  </div>
  )
}

import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call useEffect')
    //can use if/else within the callback
    if (value >= 1) {
      document.title = `New Messages(${value})`
    }
  }, [value])
  // if you want it to only run on the initial render use an empty dependency
  // you can also have as many use effects as you would like
  useEffect(() => {
    console.log('hello world')
  }, [])

  console.log('render componet')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  )
}

export default UseEffectBasics

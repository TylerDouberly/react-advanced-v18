import React, { useState } from 'react';
// useState - function 
// is named so you must use curly braces  { useState }
// used for all hooks
// start with use
// component name must be uppercase
// must be invoked in  the function/component body
// cannon call conditionally

const UseStateBasics = () => {
  // console.timeLog(useState('hello world'));
  // const value = useState(1)[0];
  // const handle = useState(1)[1];
  // console.log(value, handler);
  // name , set name
  
  const [ text, setText] = useState('random title')

  const handleClick = () =>{
    if (text === 'random title') {
      
      setText('hello world');
      
    }else{
      setText('random title');
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>
      change title
    </button>
  </React.Fragment>
};

export default UseStateBasics;

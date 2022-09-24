import React from 'react';
import { data } from '../../../data';//realtive path

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); // can use instead of import React, { useState } from 'react';
  
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);

  }; 
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove
            </button>

          </div>
      );
    })}
    <button className='btn' onClick={() => setPeople([])}> 
      Clear Items
    </button>
  </>
  );
};
// can use in line () => setPeople([])
export default UseStateArray;

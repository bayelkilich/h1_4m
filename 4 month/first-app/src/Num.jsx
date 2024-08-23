import React, { useState } from 'react';

const Num = () => {
    const[num ,setNum] = useState(0);
    return (
        <div>
            <h1>{num}</h1>
      <button onClick={() => {
         if (num < 15)setNum (num + 5)
        
      }} >+5</button>

      <button onClick={() => {
        if (num > 0)setNum (num - 5)
        
      }} >-5</button>

      <button onClick={() => {
        setNum(0)
      }}>reset</button>
    

        </div>
    );
}

export default Num;

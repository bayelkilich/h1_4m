import React from 'react';
import Num from './Num';

const App = () => {
  return (
    <div>
       <Num />
       <Num Num = {Num} setNum ={setNum}/>
    </div>
  );
}

export default App;

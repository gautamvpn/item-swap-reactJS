import React from 'react'
import { useState } from 'react';


const App = ()=>{
  const[listA,setListA] = useState(['item1','item2','item3']);
  const[listB,setListB] = useState(['item4','item5','item6']);
  
  const handleChange = (index)=>{
    const newA = [...listA];
    const newB = [...listB];

    const temp = newA[index];
    newA[index] = newB[index];
    newB[index] = temp;

    setListA(newA);
    setListB(newB);

  }

  return(
    <div>
     <h1>List 1</h1>
    {
      listA.map((item,index)=> {
        return(
        
          <li>
            {item}
            <input type="checkbox" onChange={()=>handleChange(index)} />
          </li>
          
        )
      } )
    }

<h1>List 2</h1>
    {
      listB.map((item,index)=> {
        return(
          
          <li>
            {item}
            <input type="checkbox" onChange={()=>handleChange(index)} />
          </li>
        
        )
      } )
    }


   </div>
  )
}

export default App;
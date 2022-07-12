import React from 'react'

function PartList({title, path, total, setItem }) {
  const arr = []
  for(let i = 0; i < total; i++){
    
    arr.push(
      <div key={i} className="item"><img src={`/images/${path}/${i+1}.png`} alt="" onClick={()=>{setItem(i)}}/></div>
    )

  }
  
  return (
      <div className="items-menu">
      <h3>{title}</h3>
      <div className="items-wrapper">
        {arr}
      </div>   
      </div>
  )
}

export default PartList
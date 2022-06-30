import React from 'react'

function Part({path, index, zIndex}) {
  return (
        <img src={`/images/${path}/${index+1}.png`} alt="" width="260" style={{zIndex}}/>
  )
}

export default Part

import React from 'react'
import Part from './Part'
function Avatar({body,eyes,hair,mouth,eyebrows,glasses,noses,clothing1,clothing2,clothing3}) {
  return (
    <div className='avatar'>
        <Part path={"body"} index={body} zIndex={3} ></Part>
        <Part path={"eyes"} index={eyes} zIndex={5} ></Part>
        <Part path={"hair"} index={hair} zIndex={8} ></Part>
        <Part path={"mouth"} index={mouth} zIndex={5} ></Part>
        <Part path={"eyebrows"} index={eyebrows} zIndex={5} ></Part>
        <Part path={"accessories/glasses"} index={glasses} zIndex={7} ></Part>
        <Part path={"noses"} index={noses} zIndex={8} ></Part>
        <Part path={"clothing1"} index={clothing1} zIndex={5} ></Part>
        <Part path={"clothing2"} index={clothing2} zIndex={6} ></Part>
        <Part path={"clothing3"} index={clothing3} zIndex={7} ></Part>
    </div>
  )
}

export default Avatar
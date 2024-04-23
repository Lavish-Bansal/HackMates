import React from 'react'

function Card({id,result}) {
  return (
    <div key={id}>
      {result}
    </div>
  )
}

export default Card
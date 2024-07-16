import React from 'react'
import { projects } from '../array/array'



export default function category() {
  return (
    <div>
      how are you AM THRE BIG PAGE
      {projects.map(pj => (
        <div key={pj.id}>
          {pj.description}
        </div>
      ))}
    </div>
  )
}

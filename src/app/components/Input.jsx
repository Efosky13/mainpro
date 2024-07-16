import React from 'react'

export default function Input({type,username,userid,place}) {
  return (
    <div>
    <input type={type} name={username} id={userid} placeholder={place}
    className='p-4 border-4 border-solid border-slate-900 rounded-md m-5 w-[80%]'/>
 </div>
 )
}
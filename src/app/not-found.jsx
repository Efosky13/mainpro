import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: "NotFound",
  description: "A Web development platform for web developers",
  keywords:'html,tailwind,css,js.javascript,react,next,vite'
};


export default function NotFound() {
  return (
    <div className='mt-20'>
      <div  className='border-1 bg-slate-500 rounded-lg text-center item content-center ml-[500px] mr-[550px]  mt-20'>
        <div className='text-9xl items-start mt-10  '>404</div><br/>
        <div className='text-4xl'>Page Not Found</div><br/>
        <div className='text-1xl'> The Page You Are Looking For Doesn't Exist Or Has Been Removed</div><br/>
        <button className='border-1 bg-black rounded-lg p-4 my-4 text-center item content-center text-white hover:bg-orange-800 '> 
        <Link href='./'>Back To Home</Link> </button>

        
        
         </div>

    </div>
  )
}


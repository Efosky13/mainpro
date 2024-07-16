import React from 'react'

export const metadata = {
  title: "Licence",
  description: "A Web development platform for web developers",
  keywords:'html,tailwind,css,js.javascript,react,next,vite'
};


export default function page() {
  return (
    <div className=' m-20 ' >
          <div className='bg-slate-400 p-20 text-center text-7xl'>LICENCES
            <p className='text-center text-xl mt-5 '>All graphical assets in this template are licensed for personal and commercial use.
             If you'd like to use a specific asset, please check the license below.</p>
          </div>
          <br/>

          <div className='border-2 border-black mt-10'>
            <div className='bg-slate-300 p-5 text-left m-5 text-2xl'>PHOTOGRAPHY</div>
            
            <p className='m-5 text-lg '>All images in this template are sourced from Pexels and Freepik and, are free for commercial use. 
                Check out the license for Pexels here and Freepik here</p>

          </div>
          <br/>
          <div className='border-2 border-black mt-10'>
            <div className='bg-slate-300 p-5 text-left m-5 text-2xl'>ICONS</div>
            
            <p className='m-5 text-lg '>All Icons in this template are sourced from Iconstica icon. Check out the license for Iconstica here.</p>

          </div>
          <br/>
          <div className='border-2 border-black mt-10'>
            <div className='bg-slate-300 p-5 text-left m-5 text-2xl'>FONTS</div>
            
            <p className='m-5 text-lg '>All fonts used in this template are available to use freely under the Google fonts License, 
            Check out the license for Roboto fonts license.</p>

          </div>





      
    </div>
  )
}

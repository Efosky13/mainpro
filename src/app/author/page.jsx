import React from 'react'
import Image from 'next/image'

export const metadata = {
    title: "Author",
    description: "A Web development platform for web developers",
    keywords:'html,tailwind,css,js.javascript,react,next,vite'
  };
  



export default function page() {
  return (
    <div className='m-20'>
        <div className='text-center  bg-slate-500 p-20 text-3xl'>
            MEET OUR AUTHOR
        </div><br/>

        <div className=' grid grid-cols-3 gap-10 '>
            <div>
                <Image className=' shadow-black shadow-lg hover:transform: scale[1.5,1.5] overflow-hidden' src='/media/efosa.png' alt='logo' width='400' height='400' ></Image>
            </div> 
            <div>
                <Image  className='border-2 border-black' src='/media/' alt='logo' width='400' height='480' ></Image>
            </div>
            <div>
                <Image  className='border-2 border-black' src='/media/' alt='logo' width='400' height='400'></Image>
            </div>
            <div>
                <Image  className='border-2 border-black' src='/media/' alt='logo' width='400' height='400'></Image>
            </div>
            <div>
                <Image  className='border-2 border-black' src='/media/' alt='logo' width='400' height='400'></Image>
            </div>
            <div>
                <Image  className='border-2 border-black' src='/media/' alt='logo' width='400' height='400'></Image>
            </div>


        </div>



      
    </div>
  )
}


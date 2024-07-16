import React from 'react'
import Image from 'next/image'




export const metadata = {
  title: "Exploring the vibrant world of arts",
  description: "A Web development platform for web developers",
  keywords:'html,tailwind,css,js.javascript,react,next,vite'
};

export default function page() {
  return (
    <div className='  gap-5 mx-[200px] mt-20 '>
        <div className='flex gap-x-10 items-center'>
        <div className=' bg-yellow-300 p-3'> Fashion</div>
        <span className='text-center text-2xl'>Jan 14 2024</span>
        </div> <br/>

        <div  className='text-6xl'>Exploring the vibrant world of arts
          <br/> and entertainment</div> <br/>

          <div className='flex gap-x-5 items-center'>
          <Image src='/media/efosa.png' alt="Logo" width='50' height='200' />
          <div className='text-xl  font-bold'>AMENAGHAWON EFOSA'S <br/><p className='text-sm mt-2'> CEO</p></div> <br/>

          </div>

          <div>
            <Image className=' overflow-hidden mt-10' src="/media/racing.jpg" width='900' height='10' alt=" AUDI"/>
          </div>

          <div className='text-2xl  mt-7 underline '>Up-coming business bloggers, you need to watch</div>

          <div className='text-lg mt-3'>
          The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div> <br/>

          <div className='mt-5 text-lg'>
            <li>The standard chunk of Lorem Ipsum used since the 1500s.</li>
            <li>reproduced below for those interested.</li>
            <li>It is a long established fact that a reader will.</li>
            <li>distracted by the readable content of a page when looking at its layout</li>

          </div> <br/>

          <div className='text-lg mt-5'>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
          accompanied by English versions from the 1914 translation by H. Rackham.
          </div>


          <div className=' mt-20 items-center  object-center'>
          <iframe width="1350" height="605" src="https://www.youtube.com/embed/RTWhvp_OD6s?si=LszFskP2Vt-NJr3N" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
            
          




        

      





    </div>
  )
}

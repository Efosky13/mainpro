 import React from 'react'
 import Image from 'next/image'
 import Link from 'next/link'
 import { FaClipboardCheck } from "react-icons/fa";
 
 export const metadata = {
  title: "HOME",
  description: "A Web development platform for web developers",
  keywords:'html,tailwind,css,js.javascript,react,next,vite'
};

 export default function page() {
   return (
     <div className=' mx-40'>
       <div className='grid grid-cols- grid-rows-[(2,_300px)] my-20 gap-6 relative'>

        <div className=' row-span-2 col-start-1 col-span-1'>
        <button className='absolute bg-red-300 p-2 text-3xl'><Link href='./Fashion'>Fashion</Link></button>
          <Image className=' overflow-hidden container' src="/media/racing.jpg" width={400} height={400} alt=" AUDI" />

        </div>

        <div className='col-start-2 col-span-2'>
          <button className='absolute bg-blue-400 p-2 text-3xl'><Link href='./Luxury'>Luxury</Link></button>
          <Image className='container overflow-hidden' src="/media/fashion.jpg" width={400} height={400} alt="SHOPPING" />
        </div>

        <div className='col-start-2'>
          <button className='absolute p-2 bg-blue-400 text-2xl'><Link href='./'>Model</Link></button>
          <Image className='container overflow-hidden' src="/media/modelling.jpg" width={400} height={400} alt="CARS" />
        </div>

      

       </div>


       <div className='text-3xl text-slate-500 flex'> <FaClipboardCheck /> Unreleased Blog </div>

        <div className='grid grid-cols-3 grid-rows-1 gap-x-8 mt-10 items-center'>

          <div className='flex  overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform  hover:animate-pulse '>
          <button className='absolute p-2 bg-slate-300 text-2xl'><Link href='./'>Cars</Link></button>
          <div className='bg-slate-300  absolute text-start translate-y-64 translate-x-10 p-1 text-[15px]'>
            unveiling the secrets behind exquisite dishes<br/> and delectable delights</div>
          <Image className='overflow-hidden  ' src="/media/cars.jpg" width='470' height='400' alt='logo'/>
          
          </div>

          <div className=' overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform  hover:animate-pulse '>
          <button className='absolute p-2 bg-red-400 text-2xl'><Link href='./'>Gadgets</Link></button>
          <div className='bg-red-400  absolute text-start translate-y-60 translate-x-10 p-1 text-[15px]'>
            Bringing To Life Every Imagination In the Tech World To reality<br/> and delectable delights</div>
          <Image className='overflow-hidden ' src="/media/gadgets.jpg" width='600' height='400' alt='logo'/>
          </div>

          <div className='overflow-hidden bg-black hover:scale-105 hover:shadow-2xl transition-transform  hover:animate-pulse'>
          <button className='absolute p-2 bg-purple-400 text-2xl'><Link href='./'>CODM</Link></button>
          <div className='bg-purple-400  absolute text-start translate-y-64 translate-x-10 p-1 text-[15px]'>
            The Battlefield At Your Arms Reach<br/> and delectable delights</div>
          <Image className='overflow-hidden ' src="/media/game.jpg" width='420' height='300' alt='logo'/>
          </div>

        </div>


<br/>
       <div className=' mt-28'>
        <div className='grid grid-cols-2 grid-rows-1 gap-x-6'>

          <div>
                <div className='  hover:brightness-75 hover:shadow-2xl transition-transform   '>
                   <button className='absolute p-2 bg-slate-300 text-2xl'><Link href='./'>Gadgets</Link></button>
                       <div className='bg-white  absolute text-start translate-y-[430px] translate-x-10 p-1 text-[22px] '>
                         Bringing To Life Every Imagination In the Tech World To reality<br/> and delectable delights</div>
                       <Image className='hover:cursor-zoom-out ' src="/media/camoru.jpg" width='800' height='400' alt="logo" />

                 </div>
           </div>

                    <div>
                            <div className=' hover:brightness-75  hover:shadow-2xl transition-transform   '>
                                <button className='absolute p-2 bg-slate-200 text-2xl'><Link href='./'>Gadgets</Link></button>
                                   <div className='bg-slate-200  absolute text-start translate-y-[430px]  translate-x-10 p-1 text-[22px]'>
                                      Bringing To Life Every Imagination In the Tech World To reality<br/> and delectable delights</div>
                                   <Image src="/media/mac-leran.jpg" width='800' height='400' alt="logo" />
                            </div>
                     </div>



        
        </div> <br/>
       </div>









      </div>
     
   )
 }
 
 

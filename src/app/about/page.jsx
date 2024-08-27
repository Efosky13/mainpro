import React from 'react'
import Image from 'next/image'


export const metadata = {
   title: "About Us",
   description: "A Web development platform for web developers",
   keywords:'html,tailwind,css,js.javascript,react,next,vite'
 };
 
 

function MyComponent() {
   React.useEffect(() => {
     function handleResize() {
       console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
     
 }
 window.addEventListener('resize', handleResize)
  })
   }
 




export default function about() {
  return (
          
    <div className=' m-32 mt-0 '>
         <div className=' text-4xl mt-20 '> ABOUT US </div>
           
           <div className='text-[15px] mt-4 leading-[18px]  flex  lg:flex sm:block  '>
           Welcome to our About page!

              At Efosky, we are passionate about giving you the best ideas on gadgets.<br/> Our team is dedicated to providing products,<br/> information and services that benefit or solve a specific problem for your customers.<br/>

              Since our establishment in 2024, we have been committed to delivering exceptional quality and customer satisfaction.<br/> We believe in constantly innovating and staying ahead of the curve to meet the evolving needs of our clients.<br/>

              Our core values revolve around company's core values, such as integrity, transparency, excellence.<br/> These principles guide us in every aspect of our business operations and interactions with customers, partners, and employees.<br/>

              We take pride in creating a positive work environment that fosters creativity, collaboration, and growth.<br/> Our team consists of highly skilled professionals who are experts in their respective fields.<br/> Together, we strive for excellence and continuously seek ways to improve ourselves and the services we offer.<br/>

              Customer satisfaction is at the heart of everything we do.<br/> We value each client's trust in us and work tirelessly to exceed their expectations.<br/> Whether it's through personalized solutions tailored to their unique requirements or top-notch customer support,<br/> we aim to build long-lasting relationships based on trust and mutual success.<br/>

              Thank you for visiting our About page! If you have any questions or inquries please click on the button below


                 <div>
                    <Image  className=' w-11/12 ml-20 mt-8 'src='/media/pic-1.jpg' alt="Logo" width='600' height='200' />
               </div>
                <br/>

                  
            </div>


               <div className=' flex gap-10 mt-10'>

                <div className='border-4  pt-1 pr-4 pl-3  text-7xl  rounded-md   block  border-red-500'>500+<br/> <span className='text-lg '>Total blogs </span> </div>
                <div className='border-4 pt-1 pr-4 pl-3  text-7xl  rounded-md  block border-green-500'>100k+  <br/> <span className='text-lg '>Followers </span></div>
                <div  className='border-4 pt-1 pr-4 pl-3  text-7xl  rounded-md  block border-blue-400'>1k+  <br/> <span className='text-lg '> Workers </span></div>
        
                </div> <br/>

                     <div className='mt-10' >
                        <div className=' text-3xl text-center  block'>OUR STORY<br/> 
                        <span className='text-lg'>
                        Our journey into the world of Efosky is deeply rooted in our unwavering passion for Technology. Founded by a group of dedicated individuals who share a common love for Efosky, 
                        our story is one of collective vision and perseverance. Inspired by the profound impact that Technology has on individuals and communities,
                         we set out to create a platform that not only celebrates the beauty and intricacies of Efosky, but also fosters a sense of belonging and connection among enthusiasts worldwide.
                          </span></div> <br/>


                              <div className='flex gap-10 ml-52  mt-1 text-xl text '>
                                 <div className='border-1 bg-red-500 p-3'> . STANDARD QUALITY</div>
                                 <div className='border-1 bg-green-500 p-3'> . RELIABLE INFORMATION</div>
                                 <div className='border-1 bg-blue-700 p-3'> . LASTEST TECHNOLOGY</div>

                              </div>

                           
                        
                           

                     </div>
               





          


      
      </div>
  )
  
} 


import React from 'react'
import Link from 'next/link'
import Input from '../components/Input'


export const metadata = {
  title: "Signup",
  description: "A Web development platform for web developers",
  keywords:'html,tailwind,css,js.javascript,react,next,vite'
};

export default function SignUp() {
  return (
    <div className=' border-1 bg-slate-600 rounded-lg p-10 text-center item content-center ml-[500px] mr-[550px]  mt-20'>
      <form>
        <ul>
          <Input type="text" userid="user" place="your username"/>
          <Input type="email" userid="email" place="your email address"  placeholder="Enter email"  id="Email-4" required="@ "/>
          <Input type="password" userid="pswd" place="your password"/>
            
           
         
          
          <button className=" bg-slate-900 text-white rounded-md p-5 hover:bg-red-400 items-center" >
                  <Link href='./home'>SIGNUP</Link>
                 </button>
          
        </ul>
      </form>
   </div>
  )
}
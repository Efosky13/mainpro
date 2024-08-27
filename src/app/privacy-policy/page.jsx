import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Privacy-policy",
  description: "A Web development platform for web developers",
  keywords:'html,tailwind,css,js.javascript,react,next,vite'
};



export default function pages() {
  return (
    <div className='m-20 '>
    <div className='text-center text-6xl mt-10 bg-slate-500 m-10 p-14'>
       PRIVACY POLICY 
       <br/>
       <div className=' text-lg mt-10'>Last updated on 5/14/2024</div>
    
       </div>
    <div className='text-lg '> 
      <h1 className='text-2xl mt-4 bg-slate-400 underline'> Privacy Policy for Efosky Website,</h1> <br />

At Efosky, we value the privacy and security of our users personal information. This Privacy Policy outlines how we collect, use, store, and protect the data you provide to us when using our website.<br/> By accessing or using our website, you agree to the terms outlined in this policy.

Information Collected<br/>

When you visit our website, we may collect certain information automatically from your device. This includes your IP address, browser type, operating system, referring URLs, <br/>pages visited on our site, and timestamps. We may also collect information that you voluntarily provide to us through forms or by contacting us directly.<br/>

<h1 className='text-2xl mt-6 bg-slate-400 underline'>Use of Information</h1>

We use the collected information for various purposes <br/>
1. To improve user experienceand customize the content and layout of our website.<br/> 
2. To analyze user behavior and trends in order to understand how our website is being used make necessary improvements. <br/>
3. To respond to inquiries, provide customer support, and communicate with users about updates or changes related to our services. <br/>
4. To send promotional materials or newsletters if you have opted-in to receive them.<br/>

<h1 className='text-2xl mt-6 bg-slate-400 underline'>Data Storage and Security</h1>

We committed ensuring the security of your personal information. We implement industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of your data.<br/>

However, please note that no method of transmission over the internet electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.<br/>

<h1 className='text-2xl mt-6 bg-slate-400 underline' >Third-Party Disclosure</h1>

We do not sell, trade, or transfer your personal information to third parties without your consent unless it is necessary for providing you with requested services or required by law.

<h1 className='text-2xl mt-6 bg-slate-400 underline'>External Links</h1>

Our website may contain links leading you to external websites that are not operated by us. Please note that we have no control the content and practices of these sites and cannot be held responsible for their privacy policies.

 to Privacy Policy<br/>

We reserve the right to update this Privacy Policy at any time without prior notice. Any changes made will be effective upon posting on this page.

 <h1 className='text-2xl mt-6 bg-slate-400 underline' >Contact Us</h1>

If you have any questions or concerns about our Privacy Policy or how we handle your personal information, please contact us at <Link  className='text-blue-300' href='mal'> davidefo1313@gmail.com</Link>.

By using our website, you agree that you have read and understood this Privacy Policy and consented to the collection and use of your personal information as described herein </div>

   
    </div>
  )
}

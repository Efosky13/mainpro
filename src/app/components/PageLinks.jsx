 import Link from 'next/link'
 import React from 'react'
 
 export default function Pagelinks({title,link}) {
   return (
        <li>
          <Link href={link}>
          {title}
          </Link>
        </li>
  
   )
 }
 

 
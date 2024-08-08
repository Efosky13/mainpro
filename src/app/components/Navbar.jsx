"use client"
import Link from "next/link";
import Buttons from "./Buttons";
import SocialIcons from "./SocialIcons";
import { useState } from "react";
import { AiFillCodepenSquare } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi"; // Importing a chevron icon for dropdown indicator

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(true)
  }
  const toggleDrop = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-slate-400 text-black h-[10vh] flex justify-between text-3xl capitalize mt-2">
      <div className="flex items-center">
        <AiFillCodepenSquare className="font-bold text-5xl" />
        <p>EFOSKY</p>
      </div>
      <ul className="flex items-center gap-x-5">
        <li className="hover:text-blue-900 hover:underline">
          <Link href="/home">Home</Link>
        </li>
        <div className="relative" onMouseEnter={toggleDropDown}>
          <li className="flex items-center gap-1 hover:text-blue-900 hover:underline"
          >
            Pages <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </li>
          {isOpen && (
            <div className="absolute  p-10  top-full left-0 bg-slate-200 text-black shadow-lg mt-2 rounded-md" onMouseLeave={toggleDrop}>
              <ul className= "text-sm flex items-start gap-8">
              <Link  href='Blog' className=" hover:bg-gray-300">Blog</Link>
                <Link  href='Home 2' className=" hover:bg-gray-300">Home2 </Link>  <br/>       
                
                
              </ul>
                 <ul className="text-sm flex items-start gap-8">
                 <Link href='Pricing' className=" hover:bg-gray-300">Pricing  </Link>                     
                 <Link  href='author' className=" hover:bg-gray-300">Author </Link>
                 </ul>

                <ul className="text-sm  felx gap-8 ">
                   
                <Link  href='Subscribe' className=" hover:bg-gray-300">Subscribe</Link> <br/>
                <Link href='about' className=" hover:bg-gray-300" >About us</Link><br/>
                <Link href='privacy-policy' className=" hover:bg-gray-300" >Privacy policy </Link>     
                </ul>

            </div>
          )}
        </div>
        <li className="hover:text-blue-900 hover:underline">
          <Link href="/about">About us</Link>
        </li>
        <li className="hover:text-blue-900 hover:underline">
          <Link href="/category">blog</Link>
        </li>
      </ul>
      <div className="flex gap-3 pt-3 -ml-20">
        <SocialIcons />
        <Buttons />
      </div>
    </nav>
  );
}

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
            <div className="absolute top-full left-0 bg-white text-black shadow-lg mt-2 rounded-md" onMouseLeave={toggleDrop}>
              <li className="hover:bg-gray-200">
                <Link href="/category" className="block px-4 py-2">Blog</Link>
              </li>
            </div>
          )}
        </div>
        <li className="hover:text-blue-900 hover:underline">
          <Link href="/about">About us</Link>
        </li>
      </ul>
      <div className="flex gap-3 pt-3 -ml-20">
        <SocialIcons />
        <Buttons />
      </div>
    </nav>
  );
}

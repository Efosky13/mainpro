"use client";
import Link from "next/link";
import Buttons from "./Buttons";
import SocialIcons from "./SocialIcons";
import { useState } from "react";
import { AiFillCodepenSquare } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);
  const toggleDropDown = () => {
    setIsOpen(true)
  }
  const toggleNavBar = () => setIsNavOpen(prev => !prev);
  const toggleDrop = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-slate-400 text-black p-4 flex flex-col md:flex-row text-3xl gap-x-48 capitalize mt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <AiFillCodepenSquare className="font-bold text-5xl" />
          <p className="ml-2">EFOSKY</p>
        </div>
        <div className="md:hidden flex items-center cursor-pointer" onClick={toggleNavBar}>
          <button className="bg-black text-white p-2">
            {isNavOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      <div className="hidden md:flex w-full justify-between items-center">
        <ul className="flex items-center gap-x-5">
          <li className="hover:text-blue-900 hover:underline">
            <Link href="/home">Home</Link>
          </li>
          <div className="relative" onMouseEnter={toggleDropdown}>
            <li className="flex items-center gap-1 cursor-pointer hover:text-blue-900 hover:underline">
              Pages <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </li>
            {isOpen && (
              <div className="absolute bg-slate-400 text-black z-50 shadow-lg mt-2 rounded" onMouseLeave={toggleDrop}>
                <div className="text-[20px] flex p-4 gap-x-14 leading-[40px]">
                  <ol>
                    <Link href="/home" className="block hover:underline">Home</Link>
                    <Link href="/home-2" className="block hover:underline">Home 2</Link>
                    <Link href="/blog" className="block hover:underline">Blog</Link>
                    <Link href="/author" className="block hover:underline">Author</Link>
                    <Link href="/privacy-policy" className="flex hover:underline">Privacy-<span>Policy</span></Link>
                    <Link href="/about-us" className="block hover:underline">About Us</Link>
                    <Link href="/subscribe" className="block hover:underline">Subscribe</Link>
                    <Link href="/login" className="block hover:underline">Login</Link>
                  </ol>
                  <ol>
                    <Link href="/style-guide" className="block hover:underline">Style Guide</Link>
                    <Link href="/instructions" className="block hover:underline">Instructions</Link>
                    <Link href="/licenses" className="block hover:underline">Licenses</Link>
                    <Link href="/changelog" className="block hover:underline">Changelog</Link>
                    <Link href="/pricing" className="block hover:underline">Pricing</Link>
                    <Link href="/link-in-bio" className="block hover:underline">Link In Bio</Link>
                    <Link href="/password-protected" className="block hover:underline">Password Protected</Link>
                    <Link href="/error-404" className="block hover:underline">Error 404</Link>
                  </ol>
                </div>
              </div>
            )}
          </div>
          <li className="hover:text-blue-900 hover:underline">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-blue-900 hover:underline">
            <Link href="/category">Blog</Link>
          </li>
        </ul>
        <div className="flex gap-3 pt-3">
          <SocialIcons />
          <Buttons />
        </div>
      </div>

      {isNavOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden block w-full px-2 pt-2 pb-3 bg-slate-400 text-black"
        >
          <Link href="/home" className="block py-1 hover:underline">Home</Link>
          <div className="relative">
            <div className="flex justify-between py-1 cursor-pointer" onClick={toggleDropdown}>
              <span>Pages</span>
              <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            {isOpen && (
              <div className="absolute bg-slate-400 text-black z-50 shadow-lg mt-2 rounded">
                <div className="text-[20px] flex p-4 gap-x-14 leading-[40px]">
                  <ol>
                    <Link href="/home" className="block hover:underline">Home</Link>
                    <Link href="/home-2" className="block hover:underline">Home 2</Link>
                    <Link href="/blog" className="block hover:underline">Blog</Link>
                    <Link href="/author" className="block hover:underline">Author</Link>
                    <Link href="/privacy-policy" className="flex hover:underline">Privacy-<span>Policy</span></Link>
                    <Link href="/about-us" className="block hover:underline">About Us</Link>
                    <Link href="/subscribe" className="block hover:underline">Subscribe</Link>
                    <Link href="/login" className="block hover:underline">Login</Link>
                  </ol>
                  <ol>
                    <Link href="/style-guide" className="block hover:underline">Style Guide</Link>
                    <Link href="/instructions" className="block hover:underline">Instructions</Link>
                    <Link href="/licenses" className="block hover:underline">Licenses</Link>
                    <Link href="/changelog" className="block hover:underline">Changelog</Link>
                    <Link href="/pricing" className="block hover:underline">Pricing</Link>
                    <Link href="/link-in-bio" className="block hover:underline">Link In Bio</Link>
                    <Link href="/password-protected" className="block hover:underline">Password Protected</Link>
                    <Link href="/error-404" className="block hover:underline">Error 404</Link>
                  </ol>
                </div>
              </div>
            )}
          </div>
          <Link href="/about-us" className="block py-1 hover:underline">About Us</Link>
        </motion.div>
      )}
    </nav>
  );
}
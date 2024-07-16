import { FiInstagram,FiLinkedin } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function SocialIcons() {
  return (

<div className="flex items-center gap-x-5   ">
        <div className="rounded-full border-2 border-yellow-300 text-2xl p-2 hover:bg-yellow-200">
          <Link href='https://www.instagram.com/josesavage2006/'><FiInstagram /></Link></div>
        <div className="rounded-full border-2 border-cyan-300 text-2xl p-2 hover:bg-cyan-200">
          <Link href='/'><RiTwitterXFill /></Link></div>
        <div className="rounded-full border-2 border-green-700 text-2xl p-2 hover:bg-green-900">
          <Link href='https:/www.whatsapp.com/send?phone=2348159601919'><FaWhatsapp /></Link></div>
        <div className="rounded-full border-2 border-purple-900 text-2xl p-2 hover:bg-purple-600">
          <Link href='/'><FiLinkedin /></Link></div>

    </div>
)
}

import Link from "next/link";
import Buttons from "./Buttons";
import SocialIcons from "./SocialIcons";
import { AiFillCodepenSquare } from "react-icons/ai";



export default function Navbar() {
  return (
    
    <nav className=" bg-slate-400   text-black h-[10vh] flex justify-between text-3xl capitalize mt-2">
        
        <div className="flex items-center " >
        <AiFillCodepenSquare className="font bold text-5xl"/>
            <p>EFOSKY</p>
        </div>
        <ul className="flex items-center gap-x-5 ">
            <li className=" hover:text-blue-900 hover:underline">
                <Link href='/home'>Home</Link></li>
            <li className=" hover:text-blue-900 hover:underline">
                <Link href=''>Pages</Link></li>
            <li className=" hover:text-blue-900 hover:underline">
                <Link href='/about'>About us</Link></li>

        </ul>
        <div className=" flex gap-3  pt-3 -ml-20  ">
        <SocialIcons/> 
        
        <Buttons /> 
        </div>
        
</nav>
)
}                                                                                                                                            
import {Pacifico} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const paci= Pacifico({ subsets: ["latin"],
weight: "400" });

export const metadata = {
  title: "EFOSA'S PROJECT",
  description: "A Web development platform for web developers",
  keywords:'html,tailwind,css,js.javascript,react,next,vite'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={paci.className}>

       <Navbar/>

        <div className="min-h-screen">
          {children}

        </div>
        <Footer/>
          </body>
    </html>
  );

}

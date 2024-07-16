import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "LOGIN",
  description: "A Web development platform for web developers",
  keywords:'html,tailwind,css,js.javascript,react,next,vite'
};


export default function SignUp() {
  return (
    <div className="border border-gray-300 bg-slate-600 rounded-lg p-16 text-center mx-auto mt-20 max-w-md">
      <div>
        <input
          type="text"
          className="block w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
          userid="user"
          placeholder="Your username"
        />
        <input
          type="email"
          className="block w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
          userid="email"
          placeholder="Your email address"
          id="Email-4"
          required
        />
        <input
          type="password"
          className="block w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
          userid="pswd"
          placeholder="Your password"
        />
        
        <button className="bg-slate-900 text-white rounded-md p-4 hover:bg-red-400">
          <Link href='home'>Login</Link>
        </button>
        <button className="bg-slate-900 text-white ml-5 rounded-md p-4 hover:bg-red-400">
          <Link href='signup'>SIGNUP</Link>
        </button>
      </div>
    </div>
  );
}

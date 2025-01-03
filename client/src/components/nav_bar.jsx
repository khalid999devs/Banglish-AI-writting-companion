import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10">
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/translate.png" alt="Banglish Logo" className="h-10 w-10 rounded-full mr-3" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">Banglish</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="/dashboard" className="text-lg text-gray-200 hover:text-blue-400">Dashboard</a>
          <a href="/docs" className="text-lg text-gray-200 hover:text-blue-400">Docs</a>
          <a href="/fedback" className="text-lg text-gray-200 hover:text-blue-400">Fedback</a>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-200 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </header>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <a href="/dashboard" className="text-lg text-gray-200 hover:text-blue-400">Dashboard</a>
          <a href="/docs" className="text-lg text-gray-200 hover:text-blue-400">Docs</a>
          <a href="/fedback" className="text-lg text-gray-200 hover:text-blue-400">Fedback</a>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </div>
  );
}
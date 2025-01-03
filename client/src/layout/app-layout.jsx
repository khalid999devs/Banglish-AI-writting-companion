import { Outlet } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <header className="p-6 bg-gray-800 shadow-lg flex justify-between items-center">
        <div className="flex items-center">
          <img src="/banglish_logo.png" alt="Banglish Logo" className="h-10 w-10 rounded-full mr-3" />
          <h1 className="text-4xl font-bold">Banglish</h1>
        </div>
        <SignedOut>
         <SignInButton />
       </SignedOut>
       <SignedIn>
         <UserButton />
       </SignedIn>
      </header>
      <Outlet />
    </div>
  );
}
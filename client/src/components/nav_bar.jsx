import { useState } from 'react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { useAppContext } from "@/layout/app-layout";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  // const {user}=useAppContext()

  const handleSignUp = () => {
    const { user } = useUser();
    const name =
      user?.fullName || `${user?.firstName || ''} ${user?.lastName || ''}`;
    const email = user?.emailAddresses[0]?.emailAddress; // First email address
    const avatarUrl = user?.imageUrl; // Avatar image URL
    const postData = {
      fullname: name,
      email: email,
      avatar: avatarUrl,
    };
    axios
      .post('https://jsonplaceholder.typicode.com/posts', postData)
      .then((response) => console.log('Sign Up Success:', response.data))
      .catch((error) => console.error('Sign Up Error:', error));
  };

  const handleSignIn = () => {
    const postData = {
      email: 'bar@example.com',
      password: 'password123',
    };
    axios
      .post('https://jsonplaceholder.typicode.com/posts', postData)
      .then((response) => console.log('Sign In Success:', response.data))
      .catch((error) => console.error('Sign In Error:', error));
  };

  return (
    <div className='relative z-10'>
      <header className='p-6 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link to='/' className='flex items-center space-x-2'>
            <img
              src='/translate.png'
              alt='Banglish Logo'
              className='h-10 w-10 rounded-full mr-3'
            />
            <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
              Banglish
            </h1>
          </Link>
        </div>
        <div className='hidden md:flex items-center space-x-6'>
          <SignedIn>
            <Link
              to='/dashboard'
              className='text-lg text-gray-200 hover:text-blue-400'
            >
              Dashboard
            </Link>
          </SignedIn>
          <Link
            to='/docs'
            className='text-lg text-gray-200 hover:text-blue-400'
          >
            Documentations
          </Link>
          <Link
            to='/fedback'
            className='text-lg text-gray-200 hover:text-blue-400'
          >
            Feedback
          </Link>
          <SignedOut>
            <SignInButton onSignIn={handleSignIn} />
            <SignUpButton onSignUp={handleSignUp} />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-200 focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </header>
      {isOpen && (
        <div className='md:hidden flex flex-col items-center space-y-4 mt-4'>
          <SignedIn>
            <Link
              to='/dashboard'
              className='text-lg text-gray-200 hover:text-blue-400'
            >
              Dashboard
            </Link>
          </SignedIn>
          <Link
            to='/docs'
            className='text-lg text-gray-200 hover:text-blue-400'
          >
            Docs
          </Link>
          <Link
            to='/fedback'
            className='text-lg text-gray-200 hover:text-blue-400'
          >
            Fedback
          </Link>
          <SignedOut>
            <SignInButton onSignIn={handleSignIn} />
            <SignUpButton onSignUp={handleSignUp} />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </div>
  );
}

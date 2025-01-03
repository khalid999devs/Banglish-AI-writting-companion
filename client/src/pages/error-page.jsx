import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {

    const handleGoBack = () => {
        Link.to('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-center">
            <h1 className="text-9xl font-bold text-pink-600 animate-pulse">404</h1>
            <p className="text-3xl my-5 text-white">Page Not Found</p>
            <button className="px-4 py-2 text-slate-950 rounded-full text bg-blue-200 hover:bg-blue-300"><Link to="/">Return to Home</Link></button>
        </div>
    );
}
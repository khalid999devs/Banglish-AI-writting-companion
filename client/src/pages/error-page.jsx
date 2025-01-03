import React from 'react';
import { Link } from 'react-router-dom';
import './error-page.css'; // Import the CSS file for glitch effect

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-950 via-black to-blue-950 text-center">
            <h1 className="text-5xl font-bold text-pink-600 glitch" data-text="Oops!">Oops!</h1>
            <h1 className="text-6xl font-bold text-pink-600 glitch" data-text="404">404</h1>
            <p className="text-3xl my-5 text-white glitch" data-text="Page Not Found">Page Not Found</p>
            <button className="px-4 py-2 text-slate-950 rounded-full bg-blue-200 hover:bg-blue-300">
                <Link to="/">Return to Home</Link>
            </button>
        </div>
    );
}
// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed bg-slate-100 w-full shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center gap-8">
          <div className="flex items-center">
            <div className="font-bold text-xl md:text-3xl">News Mate</div>
          </div>
          <div className="hidden md:block">
          <ul className="flex flex-row gap-5 text-xl">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Technology">Technology</a>
                </li>
                <li>
                  <a href="/Sports">Sports</a>
                </li>
                <li>
                  <a href="/Business">Business</a>
                </li>
                <li>
                  <a href="/Health">Health</a>
                </li>
                <li>
                  <a href="/Science">Science</a>
                </li>
                <li>
                  <a href="/Entertainment">Entertainment</a>
                </li>
              </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Responsive Navbar Links */}
        {isOpen && (
          <div className="mt-2 md:hidden">
            <ul className="flex flex-col space-y-2">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Technology">Technology</a>
                </li>
                <li>
                  <a href="/Sports">Sports</a>
                </li>
                <li>
                  <a href="/Business">Business</a>
                </li>
                <li>
                  <a href="/Health">Health</a>
                </li>
                <li>
                  <a href="/Science">Science</a>
                </li>
                <li>
                  <a href="/Entertainment">Entertainment</a>
                </li>
              </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

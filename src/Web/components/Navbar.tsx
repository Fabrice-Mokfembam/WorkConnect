import React, { useState } from 'react';
import { Briefcase, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // or use next/link if using Next.js

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Array of navigation links
  const navLinks = [
    { name: 'Browse Services', link: '/services' },
    { name: 'How It Works', link: '/how-it-works' },
    { name: 'Join as Pro', link: '/join-pro' },
  ];

  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className='w-full flex items-center justify-between'>
      <Link to="/" className="flex items-center space-x-2 outline-0">
        <Briefcase className="text-[#2563EB]" size={28} />
        <span className="text-2xl font-bold text-[#111827]">WorkConnect</span>
      </Link>

       {/* Desktop Navigation - hidden on mobile */}
       <div className='hidden md:flex space-x-8' >
        {navLinks.map((item, index) => (
          <Link 
            key={index} 
            to={item.link}
            className="text-[#4B5563] hover:text-[#2563EB] transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}

      </div>
     
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4 ml-4">
          <Link 
            to="/login" 
            className="text-[#4B5563] hover:text-[#2563EB] px-3 py-1 outline-0"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="bg-[#2563EB] text-white px-4 py-1 rounded-md outline-0 hover:bg-blue-700 transition-colors duration-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu Button - visible only on mobile */}
      <button 
        className="md:hidden text-[#4B5563] outline-0"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile Menu - appears when hamburger is clicked */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            {navLinks.map((item, index) => (
              <Link 
                key={index} 
                to={item.link}
                className="text-[#4B5563] hover:text-[#2563EB] py-2 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
              <Link 
                to="/login" 
                className="text-[#4B5563] hover:text-[#2563EB] py-2 outline-0 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-[#2563EB] text-white px-4 py-2 rounded-md outline-0 hover:bg-blue-700 transition-colors duration-200 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
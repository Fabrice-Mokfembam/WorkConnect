import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2937] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About WorkConnect */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About WorkConnect</h3>
            <p className="mb-6">Connecting professionals with customers since 2024.</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* For Professionals */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">For Professionals</h3>
            <ul className="space-y-2">
              {['About Us', 'Join as Pro', 'How it Works', 'Success Stories', 'Careers', 'Resources', 'Press', 'Blog'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">For Customers</h3>
            <ul className="space-y-2">
              {['Find Services', 'Book Service', 'Reviews', 'Help Center'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {['Contact Us', 'Terms of Service', 'Privacy Policy', 'FAQ'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          © 2024 WorkConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
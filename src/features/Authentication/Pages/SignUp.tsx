import React, { useState } from 'react';
import { User, Mail, Lock, MapPin, Briefcase, ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { workLogo } from '../../../assets/images';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    customOccupation: '',
    password: '',
    location: '',
    contact: ''
  });

  const [showOccupationDropdown, setShowOccupationDropdown] = useState(false);
  
  const occupations = [
    'Plumber',
    'Electrician',
    'Painter',
    'Carpenter',
    'Handyman',
    'HVAC Technician',
    'Landscaper',
    'Cleaner',
    'Interior Designer',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOccupationSelect = (occupation: string) => {
    setFormData(prev => ({
      ...prev,
      occupation,
      customOccupation: occupation === 'Other' ? prev.customOccupation : ''
    }));
    setShowOccupationDropdown(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submittedData = {
      ...formData,
      occupation: formData.occupation === 'Other' ? formData.customOccupation : formData.occupation
    };
    console.log('Form submitted:', submittedData);
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <img 
            className="h-16 w-auto" 
            src={workLogo} 
            alt="WorkConnect Logo" 
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Join WorkConnect as a Professional
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Connect with clients and grow your business
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="focus:ring-[#2563EB] focus:border-[#2563EB] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="focus:ring-[#2563EB] focus:border-[#2563EB] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Occupation Field with Dropdown */}
            <div>
              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                Profession/Occupation
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400" />
                </div>
                <div className="relative">
                  <input
                    id="occupation"
                    name="occupation"
                    type="text"
                    value={formData.occupation}
                    onChange={handleChange}
                    onClick={() => setShowOccupationDropdown(true)}
                    className="focus:ring-[#2563EB] focus:border-[#2563EB] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border"
                    placeholder="Select or type your profession"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                {showOccupationDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {occupations.map((occupation) => (
                      <div
                        key={occupation}
                        className="cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-[#2563EB] hover:text-white"
                        onClick={() => handleOccupationSelect(occupation)}
                      >
                        <span className="block truncate">{occupation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Custom Occupation Field (shown when "Other" is selected) */}
            {formData.occupation === 'Other' && (
              <div>
                <label htmlFor="customOccupation" className="block text-sm font-medium text-gray-700">
                  Specify Your Profession
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="customOccupation"
                    name="customOccupation"
                    type="text"
                    required
                    value={formData.customOccupation}
                    onChange={handleChange}
                    className="focus:ring-[#2563EB] focus:border-[#2563EB] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border"
                    placeholder="Enter your profession"
                  />
                </div>
              </div>
            )}

            {/* Contact Field */}
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  className="focus:ring-[#2563EB] focus:border-[#2563EB] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="focus:ring-[#2563EB] focus:border-[#2563EB] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Location Field */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="focus:ring-[#2563EB] focus:border-[#2563EB] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border"
                  placeholder="City, State"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2563EB] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] transition-colors duration-200"
              >
                Create Professional Account
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/auth/login"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB]"
              >
                Sign in to your account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
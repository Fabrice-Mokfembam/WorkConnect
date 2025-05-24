import React from 'react';
import { Search, MapPin } from 'lucide-react'; 
import { plumber } from '../../assets/images';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[95vh] bg-gray-100 bg-cover bg-center relative" style={{ backgroundImage: `url(${plumber})` }}>
      <div className='absolute inset-0 bg-black/70 z-10'></div>
      {/* Content container with max dimensions */}
      <div className=" absolute z-30 inset-0 my-auto mx-auto max-w-[896px] max-h-[424px] p-6 flex flex-col gap-4 justify-center items-center text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find Local Professionals You Can Trust
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-white mb-8">
          Connect with skilled service providers in your area
        </p>
        
        {/* Search section */}
        <div className="w-full md:flex bg-white justify-between p-3 rounded-md max-w-[670px] space-y-4 md:space-y-0 md:space-x-3">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="What service do you need?" 
                className="w-full pl-10 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className='w-1 border-r border-gray-300 rounded-2xl'></div>
            
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Your location" 
                className="w-full pl-10 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <button className="w-full md:w-auto px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
        
        {/* Service tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {['Plumber', 'Electrician', 'Painter', 'Handyman'].map((service) => (
            <span 
              key={service} 
              className="px-4 py-2 text-gray-50 rounded-full shadow-sm hover:bg-[#2563EB] transition-colors"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
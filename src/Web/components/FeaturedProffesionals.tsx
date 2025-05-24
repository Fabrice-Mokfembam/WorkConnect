import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { person1, person2, person3 } from '../../assets/images';

const FeaturedProfessionals: React.FC = () => {
  // Professionals data array
  const professionals = [
    {
      name: "Sarah Johnson",
      title: "Professional Plumber",
      rating: 4.8,
      location: "New York, NY",
      image: `${person1}` 
    },
    {
      name: "Michael Chen",
      title: "Master Electrician",
      rating: 4.9,
      location: "Los Angeles, CA",
      image: `${person2}` 
    },
    {
      name: "Emma Davis",
      title: "Interior Designer",
      rating: 4.7,
      location: "Chicago, IL",
      image: `${person3}` 
    }
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-[#ebd009] text-[#ebd009]' : 'text-gray-300'}`}
          />
        ))}
        <span className="ml-1 text-sm text-[#4B5563]">{rating}</span>
      </div>
    );
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured Professionals
        </h2>
        
        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professionals.map((pro, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              {/* Profile Image (replace with your actual image) */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
               <img src={pro.image} className='w-full h-full object-cover' alt="image" />
              </div>
              
              {/* Profile Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{pro.name}</h3>
                <p className="text-[#4B5563] mb-3">{pro.title}</p>
                
                {/* Rating */}
                {renderStars(pro.rating)}
                
                {/* Location */}
                <div className="flex items-center mt-2 text-[#4B5563]">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{pro.location}</span>
                </div>
                
                {/* View Profile Button */}
                <button className="mt-6 w-full py-2 px-4 border border-[#2563EB] text-[#2563EB] rounded-md hover:bg-[#2563EB] hover:text-white transition-colors duration-200">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProfessionals;
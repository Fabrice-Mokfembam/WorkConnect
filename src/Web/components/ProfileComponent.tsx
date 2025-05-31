import React from 'react';
import { Star, MapPin, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Professional {
  name: string;
  title: string;
  rating: number;
  location: string;
  image: string;
  projectsCompleted?: number;
  yearsExperience?: number;
}

const ProfessionalCard: React.FC<{ professional: Professional }> = ({ professional }) => {
  const navigate = useNavigate()


  const navigateToUserProfile = ()=>{
    
    navigate('/profile/mok')
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-[#FFD700] text-[#FFD700]' : 'text-gray-200'}`}
          />
        ))}
        <span className="ml-1 text-sm font-medium text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 group">
      {/* Profile Image with Overlay */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={professional.image} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          alt={`${professional.name}'s profile`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-block px-3 py-1 bg-[#2563EB] text-white text-xs font-medium rounded-full">
            Available Now
          </span>
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{professional.name}</h3>
            <p className="text-[#4B5563] text-sm font-medium">{professional.title}</p>
          </div>
          <div className="flex items-center bg-[#F9FAFB] px-2 py-1 rounded-full">
            {renderStars(professional.rating)}
          </div>
        </div>
        
        {/* Location */}
        <div className="flex items-center mt-3 text-gray-600">
          <MapPin className="h-4 w-4 mr-1 text-[#2563EB]" />
          <span className="text-sm">{professional.location}</span>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-[#F9FAFB] p-2 rounded-lg">
            <p className="text-xs text-gray-500">Projects</p>
            <p className="font-bold text-[#2563EB]">
              {professional.projectsCompleted || '50+'}
            </p>
          </div>
          <div className="bg-[#F9FAFB] p-2 rounded-lg">
            <p className="text-xs text-gray-500">Experience</p>
            <p className="font-bold text-[#2563EB]">
              {professional.yearsExperience || '5+'} years
            </p>
          </div>
        </div>
        
        {/* View Profile Button */}
        <button onClick={navigateToUserProfile} className="mt-6 w-full flex items-center justify-between py-3 px-4 bg-[#2563EB] text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 group/button">
          <span>View Profile</span>
          <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export { ProfessionalCard };
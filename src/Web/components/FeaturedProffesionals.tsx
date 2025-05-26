import React from 'react';
import { person1, person2, person3 } from '../../assets/images';
import { ProfessionalCard } from './ProfileComponent';
const FeaturedProfessionals: React.FC = () => {
  // Professionals data array
  const professionals = [
    {
      name: "Ngwa Johnson",
      title: "Professional Plumber",
      rating: 4.8,
      location: "Molyko, Buea",
      image: `${person1}` 
    },
    {
      name: "Kongnyuy Beltus",
      title: "Master Electrician",
      rating: 4.9,
      location: "Bonaberi,Douala",
      image: `${person2}` 
    },
    {
      name: "Emmanuel Dinla",
      title: "Interior Designer",
      rating: 4.7,
      location: "Nkwen, Bamenda",
      image: `${person3}` 
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured Professionals
        </h2>
        
        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <ProfessionalCard key={index} professional={professional} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProfessionals;
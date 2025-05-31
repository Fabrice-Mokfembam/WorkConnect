import React from 'react';
import { Star, MapPin, Phone, Mail, Briefcase, CheckCircle, Award, HardHat } from 'lucide-react';
import { person1, person2 } from '../../../assets/images';

const Profile: React.FC = () => {
  // Sample professional data
  const professional = {
    name: "Sarah Johnson",
    title: "Licensed Plumber & HVAC Specialist",
    occupation: "Master Plumber", 
    rating: 4.8,
    reviews: 142,
    location: "Casava Farm, Limbe",
    yearsExperience: 8,
    clientsServed: 320,
    image: `${person1}`,
    coverImage: `${person2}`,
    contact: {
      phone: "(555) 123-4567",
      email: "sarah.johnson@workconnect.com"
    },
    certifications: [
      "Master Plumber License",
      "EPA Certified",
      "OSHA 30-Hour"
    ],
    otherServices: [ // Added other services section
      "Bathroom Remodeling",
      "Gas Line Installation",
      "Sump Pump Installation"
    ],
    gallery: [
      "/path/to/gallery-1.jpg",
      "/path/to/gallery-2.jpg",
      "/path/to/gallery-3.jpg",
      "/path/to/gallery-4.jpg",
      "/path/to/gallery-5.jpg",
      "/path/to/gallery-6.jpg"
    ],
    about: "With over 8 years of experience in residential and commercial plumbing, I take pride in delivering exceptional service with attention to detail. My work is fully insured and comes with a 100% satisfaction guarantee."
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i}
        className={`h-5 w-5 ${i < Math.floor(rating) ? 'fill-[#FFD700] text-[#FFD700]' : 'text-gray-200'}`}
      />
    ));
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen pb-12">
      {/* Cover Photo - Centered with max-w */}
      <div className="flex justify-center">
        <div className="w-full max-w-6xl h-48 md:h-64 bg-gray-300 relative">
          <img 
            src={professional.coverImage} 
            className="w-full h-full object-cover"
            alt="Cover"
          />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 md:left-12 md:translate-x-0">
            <div className="h-32 w-32 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
              <img 
                src={professional.image} 
                className="w-full h-full object-cover"
                alt={professional.name}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Centered with max-w */}
      <div className="flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-6xl">
          {/* Header Section */}
          <div className="mt-20 md:mt-12 md:ml-44">
            <div className="flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{professional.name}</h1>
                <div className="flex items-center mt-1">
                  <HardHat className="h-5 w-5 text-[#2563EB] mr-2" />
                  <span className="text-md text-[#4B5563]">{professional.occupation}</span>
                </div>
                {/* <p className="text-md text-[#4B5563] mt-1">{professional.title}</p> */}
                
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {renderStars(professional.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {professional.rating} ({professional.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center mt-2 text-gray-600 text-md">
                  <MapPin className="h-5 w-5 text-[#2563EB] mr-1" />
                  <span>{professional.location}</span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex space-x-3">
                <button className="flex items-center px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact
                </button>
                <button className="flex items-center px-6 py-3 border border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-blue-50 transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  Message
                </button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Years Experience</p>
                <p className="text-xl font-bold text-[#2563EB]">{professional.yearsExperience}+</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Clients Served</p>
                <p className="text-xl font-bold text-[#2563EB]">{professional.clientsServed}+</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Services Offered</p>
                <p className="text-xl font-bold text-[#2563EB]">{professional.otherServices.length}+</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Certifications</p>
                <p className="text-xl font-bold text-[#2563EB]">{professional.certifications.length}+</p>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700">{professional.about}</p>
            </div>

            {/* Other Services */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Briefcase className="h-6 w-6 text-[#2563EB] mr-2" />
                Other Services Offered
              </h2>
              <div className="flex flex-wrap gap-2">
                {professional.otherServices.map((service, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#F9FAFB] text-gray-800 border border-gray-200"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="h-6 w-6 text-[#2563EB] mr-2" />
                Certifications
              </h2>
              <ul className="space-y-3">
                {professional.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Section */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Project Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {professional.gallery.map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden group">
                    <img 
                      src={image} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      alt={`Project ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
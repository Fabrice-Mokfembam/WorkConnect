import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Star, MapPin, Phone, Mail, Briefcase, CheckCircle, Award, HardHat } from 'lucide-react';
import { person1, person2 } from '../../../assets/images';
import { useGetProfileByName } from '../hooks/useProfilehook';
import { useUser } from '../../../hooks/useUser';

const Profile: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data: professional, isLoading, error } = useGetProfileByName(name || '');
  const navigate = useNavigate();

  const {user} = useUser();

  const {token,storeUser,clearUser} = useUser()

  useEffect(()=>{
    if(professional){
      storeUser({token:token!,user:professional})
    }
  },[professional,token,storeUser])

  if (isLoading) return <div className="flex justify-center py-12">Loading profile...</div>;
  if (error) return <div className="flex justify-center py-12">Error loading profile</div>;
  if (!professional) return <div className="flex justify-center py-12">Profile not found</div>;

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
            src={professional.coverImage || person2} 
            className="w-full h-full object-cover"
            alt="Cover"
          />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 md:left-12 md:translate-x-0">
            <div className="h-32 w-32 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
              <img 
                src={professional.image || person1} 
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
              <div className='flex justify-between'>
                <div>
                <h1 className="text-2xl font-bold text-gray-900">{professional.name}</h1>
                <div className="flex items-center mt-1">
                  <HardHat className="h-5 w-5 text-[#2563EB] mr-2" />
                  <span className="text-md text-[#4B5563]">{professional.occupation}</span>
                </div>
                
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {renderStars(professional.rating || 0)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {professional.rating?.toFixed(1)} ({professional.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center mt-2 text-gray-600 text-md">
                  <MapPin className="h-5 w-5 text-[#2563EB] mr-1" />
                  <span>{professional.location}</span>
                </div>
                </div>
                
                {/* settings */}
                { user?.name === professional.name && (
  <div className="relative">
    <button 
      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      onClick={(e) => {
        e.stopPropagation();
        document.getElementById('profile-dropdown')?.classList.toggle('hidden');
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-gray-500" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" 
        />
      </svg>
    </button>
    
    <div 
      id="profile-dropdown" 
      className="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
    >
      <div className="py-1">
        <a
          href={`/edit/profile/${professional.name}`}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
            />
          </svg>
          Edit Profile
        </a>
        <button
          onClick={() => {
          clearUser()
         navigate('/auth/login')
          }}
          className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
            />
          </svg>
          Logout
      </button>
      </div>
    </div>
  </div>
)}
                
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
                <p className="text-xl font-bold text-[#2563EB]">{professional.otherServices?.length || 0}+</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Certifications</p>
                <p className="text-xl font-bold text-[#2563EB]">{professional.certifications?.length || 0}+</p>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700">{professional.about}</p>
            </div>

            {/* Other Services */}
            {professional.otherServices?.length > 0 && (
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="h-6 w-6 text-[#2563EB] mr-2" />
                  Other Services Offered
                </h2>
                <div className="flex flex-wrap gap-2">
                  {professional.otherServices.map((service:string) => (
                    <span 
                      key={service} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#F9FAFB] text-gray-800 border border-gray-200"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {professional.certifications?.length > 0 && (
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-[#2563EB] mr-2" />
                  Certifications
                </h2>
                <ul className="space-y-3">
                  {professional.certifications.map((cert:string) => (
                    <li key={cert} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery Section */}
            {professional.gallery?.length > 0 && (
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Project Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {professional.gallery.map((image:string) => (
                    <div key={image} className="aspect-square bg-gray-200 rounded-lg overflow-hidden group">
                      <img 
                        src={image} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        alt={`Project ${image + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import React, { useState } from 'react';
import { Search, MapPin, Star, Filter, ChevronDown, Check } from 'lucide-react';
import { ProfessionalCard } from '../../../Web/components/ProfileComponent';


const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [showLocationFilter, setShowLocationFilter] = useState(false);
  const [showRatingFilter, setShowRatingFilter] = useState(false);
  const [showServiceFilter, setShowServiceFilter] = useState(false);

  // Cameroon cities and popular locations
  const cameroonLocations = [
    'Douala', 'Yaoundé', 'Bamenda', 'Buea', 'Limbe', 
    'Bafoussam', 'Garoua', 'Maroua', 'Ngaoundéré', 'Kumba',
    'Edea', 'Foumban', 'Dschang', 'Bertoua', 'Ebolowa'
  ];

  const ratingOptions = [
    { value: 5, label: '5 Stars - Excellent' },
    { value: 4, label: '4 Stars - Very Good' },
    { value: 3, label: '3 Stars - Good' },
    { value: 2, label: '2 Stars - Fair' },
    { value: 1, label: '1 Star - Poor' }
  ];

  const serviceCategories = [
    'Plumbing', 'Electrical', 'Painting', 'Carpentry', 
    'HVAC', 'Cleaning', 'Landscaping', 'Handyman',
    'Masonry', 'Roofing', 'Welding', 'Auto Repair'
  ];

  // Sample search results - replace with your actual data
  const searchResults = [
    {
      name: "Jean Mbarga",
      title: "Licensed Electrician",
      rating: 4.8,
      location: "Douala",
      image: "/electrician.jpg",
      services: ["Wiring", "Panel Installation", "Lighting"],
      yearsExperience: 7
    },
    {
      name: "Amina Ousman",
      title: "Professional Painter",
      rating: 4.5,
      location: "Yaoundé",
      image: "/painter.jpg",
      services: ["Interior Painting", "Exterior Painting", "Wallpaper"],
      yearsExperience: 5
    },
    // Add more sample professionals
  ];

  const filteredResults = searchResults.filter(professional => {
    return (
      (searchQuery === '' || 
       professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       professional.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedLocation === '' || professional.location === selectedLocation) &&
      (selectedRating === null || professional.rating >= selectedRating) &&
      (selectedService === '' || 
       professional.services.some(s => s.toLowerCase().includes(selectedService.toLowerCase())))
    );
  });

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Professionals in Cameroon</h1>
          <p className="text-lg text-gray-600">Connect with skilled service providers in your area</p>
        </div>

        {/* Search Bar and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Main Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for professionals or services..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-[#2563EB] focus:border-[#2563EB]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Location Filter */}
            <div className="relative">
              <button
                onClick={() => setShowLocationFilter(!showLocationFilter)}
                className="flex items-center justify-between w-full md:w-48 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{selectedLocation || 'Location'}</span>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
              {showLocationFilter && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto">
                  {cameroonLocations.map((location) => (
                    <div
                      key={location}
                      className="cursor-pointer px-4 py-2 hover:bg-[#F9FAFB] flex items-center"
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowLocationFilter(false);
                      }}
                    >
                      {selectedLocation === location && (
                        <Check className="h-4 w-4 text-[#2563EB] mr-2" />
                      )}
                      <span>{location}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Rating Filter */}
            <div className="relative">
              <button
                onClick={() => setShowRatingFilter(!showRatingFilter)}
                className="flex items-center justify-between w-full md:w-48 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-gray-400 mr-2" />
                  <span>
                    {selectedRating ? `${selectedRating}+ Stars` : 'Rating'}
                  </span>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
              {showRatingFilter && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto">
                  {ratingOptions.map((option) => (
                    <div
                      key={option.value}
                      className="cursor-pointer px-4 py-2 hover:bg-[#F9FAFB] flex items-center"
                      onClick={() => {
                        setSelectedRating(option.value);
                        setShowRatingFilter(false);
                      }}
                    >
                      {selectedRating === option.value && (
                        <Check className="h-4 w-4 text-[#2563EB] mr-2" />
                      )}
                      <span>{option.label}</span>
                    </div>
                  ))}
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-[#F9FAFB] text-[#2563EB]"
                    onClick={() => {
                      setSelectedRating(null);
                      setShowRatingFilter(false);
                    }}
                  >
                    Clear rating
                  </div>
                </div>
              )}
            </div>

            {/* Service Filter */}
            <div className="relative">
              <button
                onClick={() => setShowServiceFilter(!showServiceFilter)}
                className="flex items-center justify-between w-full md:w-48 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{selectedService || 'Service'}</span>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
              {showServiceFilter && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto">
                  {serviceCategories.map((service) => (
                    <div
                      key={service}
                      className="cursor-pointer px-4 py-2 hover:bg-[#F9FAFB] flex items-center"
                      onClick={() => {
                        setSelectedService(service);
                        setShowServiceFilter(false);
                      }}
                    >
                      {selectedService === service && (
                        <Check className="h-4 w-4 text-[#2563EB] mr-2" />
                      )}
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredResults.length} Professionals Found
            </h2>
            {/* Sort dropdown can be added here */}
          </div>

          {filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((professional, index) => (
                <ProfessionalCard
                  key={index} 
                  professional={professional} 
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <Search className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No professionals found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button 
                className="mt-4 text-[#2563EB] hover:text-blue-700"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLocation('');
                  setSelectedRating(null);
                  setSelectedService('');
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
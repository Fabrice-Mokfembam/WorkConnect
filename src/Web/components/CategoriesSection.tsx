import React from 'react';
import { 
  Wrench, 
  Bolt, 
  Scissors, 
  Paintbrush, 
  Home, 
  Construction 
} from 'lucide-react';

const CategoriesSection: React.FC = () => {
  // Categories array with icons, names, and pros count
  const categories = [
    { icon: <Wrench className="h-5 w-5" />, name: 'Plumbing', pros: '120+' },
    { icon: <Bolt className="h-5 w-5" />, name: 'Electrical', pros: '95+' },
    { icon: <Scissors className="h-5 w-5" />, name: 'Beauty & Hair', pros: '85+' },
    { icon: <Paintbrush className="h-5 w-5" />, name: 'Painting', pros: '70+' },
    { icon: <Home className="h-6 w-5" />, name: 'Home Repair', pros: '150+' },
    { icon: <Construction className="h-5 w-5" />, name: 'Construction', pros: '100+' },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Popular Categories
        </h2>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#F9FAFB] p-6 rounded-lg shadow-md hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center flex-col gap-5 space-x-4">
                {/* Icon with blue background */}
                <div className="p-3 rounded-full bg-[#2563EB] text-white">
                  {category.icon}
                </div>
                
                {/* Category Info */}
                <div className='flex flex-col justify-center text-center'>
                  <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                  <p className="text-[#4B5563]">{category.pros} Pros</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
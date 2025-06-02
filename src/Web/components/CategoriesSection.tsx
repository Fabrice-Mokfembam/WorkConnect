import React from 'react';
import { 
  Wrench, 
  Bolt, 
  Paintbrush,
  Home,
  Sparkles,
  Plug,
  Smartphone,
  Trees,
  Brush,
  Palette,
  User,
  Settings
} from 'lucide-react';
import { useGetCategories } from '../../features/ManageCategories/hooks/useCategory';
import { occupations } from '../../constants';

interface Category {
  _id: string;
  name: string;
}

const CategoriesSection: React.FC = () => {
  const { data } = useGetCategories();
  
  // Map occupations to their corresponding icons
  const occupationIcons: Record<string, React.ReactNode> = {
    'Plumber': <Wrench className="h-5 w-5" />,
    'Electrician': <Bolt className="h-5 w-5" />,
    'Painter': <Paintbrush className="h-5 w-5" />,
    'Carpenter': <Home className="h-5 w-5" />,
    'Handyman': <Settings className="h-5 w-5" />,
    'HVAC Technician': <Plug className="h-5 w-5" />,
    'Electronics Technicians': <Sparkles className="h-5 w-5" />,
    'Phone Repair Technician': <Smartphone className="h-5 w-5" />,
    'Landscaper': <Trees className="h-5 w-5" />,
    'Cleaner': <Brush className="h-5 w-5" />,
    'Interior Designer': <Palette className="h-5 w-5" />,
    'Other': <User className="h-5 w-5" />
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Popular Categories
        </h2>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((category: Category) => {
            // Find if the category name matches any occupation
            const matchedOccupation = occupations.find(occ => 
              occ.toLowerCase() === category.name.toLowerCase()
            );
            
            // Get the icon for the occupation or use default
            const icon = matchedOccupation 
              ? occupationIcons[matchedOccupation] 
              : <User className="h-5 w-5" />; // Default icon

            return (
              <div 
                key={category._id}
                className="bg-[#F9FAFB] p-6 rounded-lg shadow-md hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center flex-col gap-5 space-x-4">
                  {/* Icon with blue background */}
                  <div className="p-3 rounded-full bg-[#2563EB] text-white">
                    {icon}
                  </div>
                  
                  {/* Category Info */}
                  <div className='flex flex-col justify-center text-center'>
                    <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                    {/* Commented out pros count as requested */}
                    {/* <p className="text-[#4B5563]">{category.pros} Pros</p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
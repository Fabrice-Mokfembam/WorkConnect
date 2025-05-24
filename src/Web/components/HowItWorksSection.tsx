import React from 'react';
import { Search, ClipboardList, CalendarCheck } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  // Steps array with icons, titles, and descriptions
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Search & Browse",
      description: "Find the right professional for your needs"
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-white" />,
      title: "Compare & Choose",
      description: "Review profiles, ratings, and portfolios"
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-white" />,
      title: "Book & Pay",
      description: "Schedule service and pay securely"
    }
  ];

  return (
    <div className="bg-[#F9FAFB] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          How It Works
        </h2>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              {/* Icon with circular background */}
              <div className="mb-6 p-4 rounded-full bg-[#2563EB]">
                {step.icon}
              </div>
              
              {/* Step Title */}
              <h3 className="text-xl font-semibold text-black mb-2">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-[#4B5563]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
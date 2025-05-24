import React from 'react';
import { Star} from 'lucide-react';
import { person1, person2, person3 } from '../../assets/images';

const Testimonials: React.FC = () => {
  // Testimonials data array with image paths
  const testimonials = [
    {
      name: "John Smith",
      service: "Plumbing Service",
      comment: "Found an excellent plumber within minutes. The service was professional and efficient.",
      rating: 5,
     image: `${person3}` 
    },
    {
      name: "Lisa Wong",
      service: "Hair Styling",
      comment: "Great platform for finding beauty professionals. Highly recommend!",
      rating: 5,
       image: `${person1}` 
    },
    {
      name: "David Brown",
      service: "Home Painting",
      comment: "The painters did an amazing job. Very satisfied with the results.",
      rating: 4,
      image: `${person2}` 
    }
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`h-5 w-5 ${i < rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#F9FAFB] py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our Users Say
        </h2>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-md transition-shadow duration-200 relative"
            >
              
              
              {/* Profile Image and Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-[#4B5563]">{testimonial.service}</p>
                </div>
              </div>
              
              {/* Comment */}
              <p className="text-gray-700 mb-4 italic ">
                "{testimonial.comment}"
              </p>
              
              {/* Rating */}
              <div className="">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
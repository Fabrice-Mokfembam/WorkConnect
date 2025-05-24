import React from 'react';

const ProSection: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-8">
          {/* First Container - Professional CTA */}
          <div className="bg-[#2563EB] py-8 md:py-10 px-6 md:px-14 rounded-xl text-white text-center flex-1 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Are you a Professional?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">Join our platform and grow your business</p>
            <button className="bg-white text-[#2563EB] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Join as Pro
            </button>
          </div>

          {/* Second Container - Service CTA */}
          <div className="bg-[#10B981] py-8 md:py-10 px-6 md:px-14 rounded-xl text-center flex-1 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">Need a Service?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white">Find trusted professionals in your area</p>
            <button className="bg-white text-[#10B981] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Find Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProSection;
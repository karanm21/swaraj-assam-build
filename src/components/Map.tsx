import React from 'react';

const AssamMapSection: React.FC = () => {
  return (
    <div className="mt-16 animate-on-scroll pb-20"> {/* <-- added bottom padding for space afterward */}
      <div className="relative bg-gradient-to-r from-construction-blue to-construction-darkblue p-8 rounded-2xl shadow-2xl overflow-hidden min-h-[400px]">
        {/* SVG Map and decorative elements */}
        <div className="absolute inset-0 opacity-30 flex justify-center items-center">
          <div className="max-w-[400px] w-full h-auto">
            {/* Insert your SVG code here */}
            {/* Example: <img src="/path-to-map.svg" alt="Assam Map" className="w-full h-auto" /> */}
          </div>
        </div>

        {/* Info Overlay */}
        <div className="relative z-10 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Visit Our Office in <span className="text-construction-yellow">Guwahati, Assam</span>
          </h3>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Strategically located in the heart of Guwahati, we serve construction projects across all districts of Assam. 
            Our central location allows us to efficiently manage projects throughout the Northeast region.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-construction-yellow text-construction-darkblue font-bold px-10 py-4 rounded-xl hover:bg-construction-yellow/90 transition-all duration-300 hover:scale-105 shadow-xl text-lg">
              🗺️ Get Directions to Our Guwahati Office
            </button>
            <div className="flex flex-col items-center">
              <div className="text-construction-yellow font-semibold text-lg mb-2">
                📍 Service Coverage Area
              </div>
              <div className="text-construction-yellow/80 text-sm text-center">
                All 33 Districts of Assam<br/>
                Complete Northeast India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssamMapSection;

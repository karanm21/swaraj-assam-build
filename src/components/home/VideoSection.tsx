
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
            Built specifically for people who want faster construction
          </h2>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 max-w-6xl mx-auto">
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=1200&h=675&fit=crop"
              alt="Construction in progress"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="bg-white/20 backdrop-blur-sm rounded-full p-8 hover:bg-white/30 transition-all">
                <Play className="h-12 w-12 text-white ml-1" />
              </button>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Consectetur adipiscing elit, sed do eiusmod tempor
                </h3>
                <p className="text-white/90 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <button className="text-construction-yellow hover:underline font-medium">
                  Explore our services →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

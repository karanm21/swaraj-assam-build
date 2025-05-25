
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from '@/components/ui/dialog';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Industrial Construction Site",
    category: "Industrial"
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Modern Residential Building",
    category: "Residential"
  },
  {
    src: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    alt: "Highway Construction",
    category: "Infrastructure"
  },
  {
    src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Educational Institution",
    category: "Institutional"
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Luxury Apartments",
    category: "Residential"
  },
  {
    src: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Commercial Office Building",
    category: "Commercial"
  },
  {
    src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Shopping Complex",
    category: "Commercial"
  },
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Infrastructure Development",
    category: "Infrastructure"
  },
  {
    src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Government Building",
    category: "Institutional"
  }
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredImages = selectedCategory 
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;
  
  const categories = Array.from(new Set(galleryImages.map(img => img.category)));
  
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Project Gallery</h2>
          <p className="text-lg text-construction-gray max-w-3xl mx-auto">
            Explore our portfolio of completed projects across various sectors.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button 
            className={`px-6 py-3 rounded-md transition-colors font-medium ${
              selectedCategory === null 
                ? 'bg-construction-blue text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All Projects
          </button>
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`px-6 py-3 rounded-md transition-colors font-medium ${
                selectedCategory === category 
                  ? 'bg-construction-blue text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-on-scroll">
          {filteredImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-lg cursor-pointer h-80 group">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                      <p className="text-lg font-semibold mb-2">{image.alt}</p>
                      <span className="px-3 py-1 bg-construction-yellow text-black text-sm rounded">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0">
                <div className="aspect-video">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{image.alt}</h3>
                  <p className="text-construction-gray">{image.category} Project</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

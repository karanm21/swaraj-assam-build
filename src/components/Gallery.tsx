
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    images: [
      "/images/site1.avif",
      "/images/site1.avif",
      "/images/site1.avif"
    ],
    alt: "Industrial Construction Site",
    category: "Industrial"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    ],
    alt: "Modern Residential Building",
    category: "Residential"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      "https://images.unsplash.com/photo-1556034393-d8189d092c14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1555664463-e739893e05b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    ],
    alt: "Highway Construction",
    category: "Infrastructure"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    ],
    alt: "Educational Institution",
    category: "Institutional"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    ],
    alt: "Luxury Apartments",
    category: "Residential"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    ],
    alt: "Commercial Office Building",
    category: "Commercial"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1534126416832-a88bc2b89e1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    ],
    alt: "Shopping Complex",
    category: "Commercial"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    ],
    alt: "Infrastructure Development",
    category: "Infrastructure"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    ],
    alt: "Government Building",
    category: "Institutional"
  }
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeImageGroup, setActiveImageGroup] = useState<number | null>(null);

  const filteredImages = selectedCategory
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;

  const categories = Array.from(new Set(galleryImages.map(img => img.category)));

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title relative">PROJECT GALLERY
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-construction-yellow rounded-full"></div>
          </h2>
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
            <Dialog key={index} open={isDialogOpen && activeImageGroup === index} onOpenChange={(open) => {
              setIsDialogOpen(open);
              if (open) setActiveImageGroup(index);
            }}>
              <DialogTrigger asChild>
                <div
                  className="relative overflow-hidden cursor-pointer h-80 group bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.images[0]})` }}
                >
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

              <DialogContent className="p-0 max-w-5xl w-full bg-transparent shadow-none border-0">
                <div className="relative bg-black rounded-lg overflow-hidden">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-5 w-5 text-black" />
                  </button>

                  {/* Carousel */}
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {image.images.map((img, i) => (
                          <CarouselItem key={i}>
                            <div className="aspect-video">
                              <img
                                src={img}
                                alt={`${image.alt} - Image ${i + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-none">
                        <ChevronLeft className="h-6 w-6" />
                      </CarouselPrevious>
                      <CarouselNext className="right-4 bg-white/90 hover:bg-white border-none">
                        <ChevronRight className="h-6 w-6" />
                      </CarouselNext>
                    </Carousel>
                    <div className="p-6 bg-white">
                      <h3 className="font-semibold text-xl mb-2">
                        {image.alt}
                      </h3>
                      <p className="text-construction-gray">
                        {image.category} Project
                      </p>
                    </div>
                  </div>
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

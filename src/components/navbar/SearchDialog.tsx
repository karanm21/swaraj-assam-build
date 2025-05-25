
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  title: string;
  content: string;
  url: string;
  section: string;
}

const SearchDialog: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Website content for searching
  const websiteContent = [
    {
      title: "Home",
      content: "Swaraj Infra construction company building excellence infrastructure development projects Assam",
      url: "/",
      section: "Home Page"
    },
    {
      title: "About Us",
      content: "Who we are experienced construction company years excellence infrastructure development commitment quality",
      url: "/about",
      section: "About Page"
    },
    {
      title: "Services",
      content: "Construction services residential commercial industrial infrastructure civil engineering project management",
      url: "/services",
      section: "Services Page"
    },
    {
      title: "Our Work",
      content: "Projects portfolio completed construction works residential buildings commercial complexes infrastructure",
      url: "/projects",
      section: "Projects Page"
    },
    {
      title: "Our Team",
      content: "Professional team engineers architects project managers CEO founder experienced professionals",
      url: "/team",
      section: "Team Page"
    },
    {
      title: "Gallery",
      content: "Photo gallery construction projects completed works before after images portfolio",
      url: "/gallery",
      section: "Gallery Page"
    },
    {
      title: "Careers",
      content: "Job opportunities civil site engineer construction careers employment openings experience qualifications",
      url: "/careers",
      section: "Careers Page"
    },
    {
      title: "Statistics",
      content: "250+ projects completed 120+ professional team 15+ years experience 30+ awards recognition achievements",
      url: "/stats",
      section: "Stats Page"
    },
    {
      title: "Testimonials",
      content: "Client testimonials reviews feedback satisfied customers construction projects quality service",
      url: "/testimonials",
      section: "Testimonials Page"
    },
    {
      title: "Contact",
      content: "Contact us get in touch office address phone email consultation project inquiry",
      url: "/contact",
      section: "Contact Page"
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      
      // Simulate search delay
      setTimeout(() => {
        const results = websiteContent.filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
        setIsSearching(false);
      }, 300);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (url: string) => {
    navigate(url);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchQuery.trim()) {
      const debounceTimer = setTimeout(() => {
        handleSearch();
      }, 300);
      return () => clearTimeout(debounceTimer);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="icon" 
        aria-label="Search"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <Search className="h-5 w-5 text-construction-blue" />
      </Button>

      {isSearchOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 shadow-xl z-50 w-96">
          <div className="flex items-center p-4 border-b">
            <Input
              placeholder="Search the website..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border-0 focus:ring-0 text-base"
              autoFocus
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery('');
                setSearchResults([]);
              }}
              className="ml-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {isSearching && (
            <div className="p-4 text-center text-gray-500">
              Searching...
            </div>
          )}

          {searchResults.length > 0 && !isSearching && (
            <div className="max-h-80 overflow-y-auto">
              <div className="p-2 text-sm text-gray-500 border-b">
                {searchResults.length} result(s) found
              </div>
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                  onClick={() => handleResultClick(result.url)}
                >
                  <h4 className="font-medium text-construction-blue mb-1">
                    {result.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    {result.section}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {result.content.substring(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
          )}

          {searchQuery.trim() && searchResults.length === 0 && !isSearching && (
            <div className="p-4 text-center text-gray-500">
              No results found for "{searchQuery}"
            </div>
          )}

          {!searchQuery.trim() && (
            <div className="p-4 text-center text-gray-500">
              Start typing to search...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDialog;

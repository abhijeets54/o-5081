import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Heart } from "lucide-react";
import { motion } from "framer-motion";

// Mock products data
const products = [
  {
    id: 1,
    name: "Oxford Cotton Shirt",
    price: "$145",
    rating: 5,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop",
    category: "shirts",
    isNew: true
  },
  {
    id: 2,
    name: "Classic White Shirt",
    price: "$125",
    rating: 4,
    reviews: 8,
    image: "https://images.unsplash.com/photo-1580742471944-c1c187a943e2?q=80&w=1974&auto=format&fit=crop",
    category: "shirts"
  },
  {
    id: 3,
    name: "Linen Button-Down",
    price: "$135",
    rating: 5,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop",
    category: "shirts",
    isNew: true
  },
  {
    id: 4,
    name: "Striped Dress Shirt",
    price: "$155",
    rating: 4,
    reviews: 7,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1974&auto=format&fit=crop",
    category: "shirts"
  },
  {
    id: 5,
    name: "Tailored Wool Trousers",
    price: "$195",
    rating: 5,
    reviews: 9,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1980&auto=format&fit=crop",
    category: "pants",
    isNew: true
  },
  {
    id: 6,
    name: "Classic Chino Pants",
    price: "$165",
    rating: 4,
    reviews: 11,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1997&auto=format&fit=crop",
    category: "pants"
  },
  {
    id: 7,
    name: "Slim Fit Trousers",
    price: "$175",
    rating: 4,
    reviews: 6,
    image: "https://images.unsplash.com/photo-1551854838-212c9a5df0af?q=80&w=1974&auto=format&fit=crop",
    category: "pants"
  },
  {
    id: 8,
    name: "Pleated Dress Pants",
    price: "$185",
    rating: 5,
    reviews: 14,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1974&auto=format&fit=crop",
    category: "pants",
    isNew: true
  }
];

const Marketplace = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  const [sortOrder, setSortOrder] = useState("newest");
  const [category, setCategory] = useState(categoryParam || "all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set initial category based on URL param
    if (categoryParam) {
      setCategory(categoryParam);
    }
    
    // Set loaded state for animations
    setIsLoaded(true);
    
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('ankkorFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, [categoryParam]);

  useEffect(() => {
    // Filter products based on category
    let filtered = [...products];
    if (category !== "all") {
      filtered = products.filter(product => product.category === category);
    }

    // Sort products based on selected order
    switch (sortOrder) {
      case "newest":
        filtered = filtered.sort((a, b) => (b.isNew === true) - (a.isNew === true));
        break;
      case "price-asc":
        filtered = filtered.sort((a, b) => 
          parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
        break;
      case "price-desc":
        filtered = filtered.sort((a, b) => 
          parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
        break;
      case "rating":
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [category, sortOrder]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const toggleFavorite = (e, productId) => {
    e.stopPropagation();
    
    let newFavorites;
    if (favorites.includes(productId)) {
      newFavorites = favorites.filter(id => id !== productId);
    } else {
      newFavorites = [...favorites, productId];
    }
    
    setFavorites(newFavorites);
    localStorage.setItem('ankkorFavorites', JSON.stringify(newFavorites));
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    // Update URL with category parameter
    navigate(`/marketplace?category=${value}`, { replace: true });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-light mb-4">Collection</h1>
          <p className="text-gray-600">
            Timeless essentials crafted with exceptional materials and meticulous attention to detail.
            Each piece is designed to elevate your wardrobe with understated elegance.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-4 items-center justify-between mb-8"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex gap-4 items-center">
            <div className="text-sm text-gray-500">{filteredProducts.length} products</div>
            
            <Select value={category} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-[180px] border-gray-300 focus:ring-black">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="shirts">Shirts</SelectItem>
                <SelectItem value="pants">Pants</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px] border-gray-300 focus:ring-black">
              <SelectValue placeholder="Sort order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate={isLoaded ? "show" : "hidden"}
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={item}>
              <Card 
                className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer bg-white border-gray-100"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="aspect-square overflow-hidden relative group">
                  {product.isNew && (
                    <div className="absolute top-0 left-0 bg-black text-white text-xs py-1 px-3 m-4 z-10">
                      New Arrival
                    </div>
                  )}
                  <button 
                    className="absolute top-0 right-0 m-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    onClick={(e) => toggleFavorite(e, product.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-black text-black' : 'text-gray-400'}`} 
                    />
                  </button>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-light text-base mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-black font-normal">{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className={`w-4 h-4 ${product.rating >= 4 ? 'fill-gray-800 text-gray-800' : 'text-gray-300'}`} />
                      <span className="text-xs text-gray-500">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
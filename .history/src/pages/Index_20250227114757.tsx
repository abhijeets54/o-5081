import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronDown, ArrowDownToLine, Package, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-gray-600 text-lg mb-4 font-light tracking-wider">
              TIMELESS ELEGANCE
            </p>
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-black tracking-tight">
              Classic Essentials <br />for the Discerning
            </h1>
            <motion.button 
              onClick={() => navigate('/marketplace')}
              className="bg-black text-white px-8 py-3 hover:bg-gray-900 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Shop Collection
              <span className="inline-block">
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0 relative"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-gray-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-20 w-48 h-48 bg-gray-200 rounded-full opacity-30 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop"
              alt="Ankkor Classic Shirt"
              className="rounded-none shadow-lg relative z-10 object-cover h-[600px] w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-light mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Collection
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="relative group cursor-pointer"
              onClick={() => navigate('/marketplace?category=shirts')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1604695573706-53170668f6a6?q=80&w=1974&auto=format&fit=crop"
                  alt="Shirts" 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-6">
                <div className="bg-white py-3 px-6">
                  <h3 className="text-lg font-light tracking-wide">Shirts</h3>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group cursor-pointer"
              onClick={() => navigate('/marketplace?category=pants')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop"
                  alt="Pants" 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-6">
                <div className="bg-white py-3 px-6">
                  <h3 className="text-lg font-light tracking-wide">Pants</h3>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=1974&auto=format&fit=crop"
                  alt="Polos" 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-black text-white text-xs py-1 px-3 m-4">
                  Coming Soon
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-6">
                <div className="bg-white py-3 px-6">
                  <h3 className="text-lg font-light tracking-wide">Polos</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-light">Join the Ankkor community</h2>
            <p className="text-gray-600">Subscribe to receive updates on new arrivals, exclusive collections, and style inspirations tailored to your preferences.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center text-sm">01</span>
                <span className="text-sm">Members-only preview of new collections</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center text-sm">02</span>
                <span className="text-sm">Complimentary alterations on full-price items</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center text-sm">03</span>
                <span className="text-sm">Curated style guides for all occasions</span>
              </div>
            </div>

            <div className="flex gap-2 max-w-md">
              <Input placeholder="Enter your email" className="flex-1 border-gray-300 focus:border-black focus:ring-black" />
              <Button className="bg-black hover:bg-gray-800">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1541346160430-93fcee38d521?q=80&w=1974&auto=format&fit=crop"
              alt="Newsletter"
              className="object-cover w-full h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl font-light mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Ankkor Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm">
                <ChevronDown className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-light text-lg tracking-wide">Discover</h3>
              <p className="text-gray-600 text-sm">Browse our curated collections of timeless essentials</p>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm">
                <Package className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-light text-lg tracking-wide">Select</h3>
              <p className="text-gray-600 text-sm">Choose pieces that align with your personal style</p>
            </motion.div>

            <motion.div 
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm">
                <ArrowDownToLine className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-light text-lg tracking-wide">Receive</h3>
              <p className="text-gray-600 text-sm">Experience our premium packaging and delivery service</p>
            </motion.div>

            <motion.div 
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm">
                <RefreshCw className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-light text-lg tracking-wide">Repeat</h3>
              <p className="text-gray-600 text-sm">Build your wardrobe with our expanding collections</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
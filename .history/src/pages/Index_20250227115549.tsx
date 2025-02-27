import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shirt, PantsIcon, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const Index = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-500 text-lg mb-4 font-light tracking-wider">
              TIMELESS ELEGANCE
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8 text-gray-900">
              Classic style <br />for the modern gentleman
            </h1>
            <motion.button 
              onClick={() => navigate('/collection')}
              className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View Collection
              <span className="inline-block">→</span>
            </motion.button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 mt-8 lg:mt-0 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-gray-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-20 w-48 h-48 bg-gray-200 rounded-full opacity-30 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80"
              alt="Ankkor Classic Style"
              className="rounded-none shadow-lg relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Feature */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-serif font-bold mb-12 text-center" 
            variants={fadeIn}
          >
            Refined Collection
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="relative overflow-hidden group cursor-pointer"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80" 
                alt="Ankkor Shirts" 
                className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-serif mb-2">Shirts</h3>
                  <button 
                    onClick={() => navigate('/category/shirts')}
                    className="bg-white text-black px-6 py-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden group cursor-pointer"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80" 
                alt="Ankkor Pants" 
                className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-serif mb-2">Pants</h3>
                  <button 
                    onClick={() => navigate('/category/pants')}
                    className="bg-white text-black px-6 py-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden group cursor-pointer"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80" 
                alt="Ankkor Polos" 
                className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-serif mb-2">Polos</h3>
                  <div className="bg-white text-black px-6 py-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Coming Soon
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section 
        className="py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-serif font-bold mb-2 px-4 text-center"
            variants={fadeIn}
          >
            Bestsellers
          </motion.h2>
          <motion.p 
            className="text-center text-gray-500 mb-12"
            variants={fadeIn}
          >
            Discover our most sought-after pieces
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            <motion.div variants={fadeIn}>
              <ProductCard
                name="Oxford Dress Shirt"
                price="$129"
                image="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80"
                rating={5}
                reviews={24}
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ProductCard
                name="Slim Fit Chinos"
                price="$149"
                image="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80"
                rating={4}
                reviews={18}
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ProductCard
                name="Premium Linen Shirt"
                price="$159"
                image="https://images.unsplash.com/photo-1604695573706-53170668f6a6?q=80"
                rating={5}
                reviews={32}
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ProductCard
                name="Tailored Wool Pants"
                price="$179"
                image="https://images.unsplash.com/photo-1534653299134-96a171b61581?q=80"
                rating={4}
                reviews={21}
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-12"
            variants={fadeIn}
          >
            <button 
              onClick={() => navigate('/collection')}
              className="border border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
            >
              View All Products
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Brand Story Section */}
      <motion.section 
        className="py-16 px-4 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={fadeIn}
          >
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80"
              alt="Ankkor Philosophy"
              className="w-full h-[500px] object-cover grayscale"
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 space-y-6"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-serif font-bold">The Ankkor Philosophy</h2>
            <p className="text-gray-600 leading-relaxed">
              At Ankkor, we believe in the timeless appeal of classic style. Our garments are crafted with meticulous attention to detail, using premium fabrics that stand the test of time.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-sm">01</span>
                <span className="text-gray-800">Sustainable craftsmanship</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-sm">02</span>
                <span className="text-gray-800">Premium materials</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-sm">03</span>
                <span className="text-gray-800">Timeless designs</span>
              </div>
            </div>

            <motion.button 
              onClick={() => navigate('/about')}
              className="bg-black text-white px-8 py-3 mt-6 hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Story
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="py-16 px-4 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Join the Ankkor Legacy</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive exclusive updates, styling tips, and early access to new collections.
          </p>
          
          <div className="flex gap-2 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1 border-gray-300 focus:border-black focus:ring-black" />
            <Button className="bg-black hover:bg-gray-800">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Shopping Experience */}
      <motion.section 
        className="py-16 px-4 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl font-serif font-bold mb-12 text-center"
            variants={fadeIn}
          >
            The Ankkor Experience
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center space-y-4"
              variants={fadeIn}
            >
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm">
                <ShoppingBag className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-serif font-semibold text-lg">Curated Selection</h3>
              <p className="text-gray-600 text-sm">Each piece is carefully chosen to ensure quality and timeless style</p>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-4"
              variants={fadeIn}
            >
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm">
                <Shirt className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-serif font-semibold text-lg">Expert Tailoring</h3>
              <p className="text-gray-600 text-sm">Precision craftsmanship for the perfect fit and superior comfort</p>
            </motion.div>

            <motion.div 
              className="text-center space-y-4"
              variants={fadeIn}
            >
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm">
                <PantsIcon className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-serif font-semibold text-lg">Premium Materials</h3>
              <p className="text-gray-600 text-sm">Sourced from the finest suppliers for exceptional quality</p>
            </motion.div>

            <motion.div 
              className="text-center space-y-4"
              variants={fadeIn}
            >
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm">
                <Check className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-serif font-semibold text-lg">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 text-sm">Committed to providing an exceptional experience with every purchase</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;

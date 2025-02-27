import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For subtle animations

const Footer = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.footer 
      className="bg-gray-50 py-16 px-4 border-t border-gray-200"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-serif font-bold mb-6 text-black">ANKKOR</h2>
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4 text-gray-800">Collection</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/shirts" className="hover:text-black transition-colors">Shirts</Link></li>
                <li><Link to="/pants" className="hover:text-black transition-colors">Pants</Link></li>
                <li><Link to="/polos" className="hover:text-black transition-colors">Polos (Coming Soon)</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4 text-gray-800">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/about" className="hover:text-black transition-colors">Our Story</Link></li>
                <li><Link to="/craftsmanship" className="hover:text-black transition-colors">Craftsmanship</Link></li>
                <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <nav className="space-y-4">
              <h3 className="font-semibold mb-4 text-gray-800">Customer Care</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/shipping" className="hover:text-black transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/faq" className="hover:text-black transition-colors">FAQ</Link></li>
                <li><Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col-span-1">
            <div className="space-y-4">
              <h3 className="font-semibold mb-4 text-gray-800">Connect With Us</h3>
              <p className="text-gray-600 mb-4">
                For inquiries and appointments:
                <a href="mailto:contact@ankkor.com" className="text-black hover:underline block mt-2 font-medium">
                  contact@ankkor.com
                </a>
              </p>
              <div className="flex gap-4">
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional footer elements */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Ankkor. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/newsletter" className="text-gray-600 hover:text-black text-sm transition-colors">
                Subscribe to Newsletter
              </Link>
              <Link to="/careers" className="text-gray-600 hover:text-black text-sm transition-colors">
                Careers
              </Link>
              <Link to="/sustainability" className="text-gray-600 hover:text-black text-sm transition-colors">
                Sustainability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="Ashoka Geotech Logo" className="h-20 w-auto bg-white p-2 rounded-md" />
            </Link>
            <p className="text-sm">
              Ashoka Geotech Consultants India Private Limited is a leading testing firm in Gwalior, performing physical and chemical tests on road and building materials.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-white hover:text-black transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-white hover:text-black transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-white hover:text-black transition-colors duration-300">
                <FaLinkedinIn />
              </a>
              <a href="mailto:info@ashokageotech.com" className="p-2 rounded-full bg-gray-700 hover:bg-white hover:text-black transition-colors duration-300">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link to="/clients" className="hover:text-white transition-colors duration-300">Clients</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors duration-300">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-white transition-colors duration-300">Field Test</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-300">Non-Destructive Testing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-300">Building Material</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-300">NABL</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-300">Geotechnical</Link></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>Ashoka Geotech, City Center, Gwalior, Madhya Pradesh 474011</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-3" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors duration-300">+91 12345 67890</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3" />
                <a href="mailto:info@ashokageotech.com" className="hover:text-white transition-colors duration-300">info@ashokageotech.com</a>
              </li>
               <li className="flex items-center">
                 <img src="https://www.google.com/favicon.ico" alt="Google icon" className="w-5 h-5 mr-3" />
                 <a 
                    href="https://www.google.com/search?q=ashoka+geotech&ie=UTF-8&oe=UTF-8&hl=en-in&client=safari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                 >
                    Find us on Google
                 </a>
               </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto py-6 px-6 lg:px-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ashoka Geotech Consultants India Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
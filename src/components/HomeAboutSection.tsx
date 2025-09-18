import React from 'react';
import { motion , type Variants} from 'framer-motion';
import { Link } from 'react-router-dom';

// A simple checkmark icon component
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const textContainerVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.2
    },
  },
};

const textChildVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
}


const HomeAboutSection: React.FC = () => {
  return (
    <motion.section 
      // MODIFICATION: Removed all bottom padding (pb-0) to close the gap.
      className="bg-white pt-24 sm:pt-32 pb-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          {/* Image Column */}
          <motion.div variants={imageVariants} className="w-full">
            <img 
              src="/4.jpg" 
              alt="Ashoka Geotech laboratory and equipment"
              className="rounded-xl shadow-2xl w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content Column */}
          <motion.div variants={textContainerVariants} className="space-y-6">
            <motion.h2 
              variants={textChildVariants}
              className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight"
            >
              ASHOKA GEOTECH CONSULTANTS INDIA PRIVATE LIMITED
            </motion.h2>

            <motion.p 
              variants={textChildVariants}
              className="text-lg text-gray-600"
            >
              Ashoka Geotech Consultants India Private Limited is an accredited laboratory from the National Accreditation Board for Testing and Calibration Laboratories (NABL), an autonomous body under the aegis of the Department of Science and Technology, Government of India.
            </motion.p>
            
            <motion.ul variants={textChildVariants} className="space-y-4 pt-2">
              <li className="flex items-center">
                <CheckIcon className="h-6 w-6 text-black mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">NABL Accredited Laboratory</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-6 w-6 text-black mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Certified for ISO/IEC 17025:2017 Competence</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-6 w-6 text-black mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Recognized by the Govt. of India's Dept. of Science</span>
              </li>
            </motion.ul>

            <motion.div variants={textChildVariants} className="pt-4">
              <Link
                to="/about"
                className="inline-block bg-black text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-transform duration-300 hover:scale-105"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
};

export default HomeAboutSection;
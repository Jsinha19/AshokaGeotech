import React from 'react';
import { motion , type Variants} from 'framer-motion';

// --- Data for Sectors with Image URLs (selected 5 from original HomeSectors data) ---
const sectorsData: { title: string; description: string; imageUrl: string }[] = [
  {
    title: 'Real Estate & Urban',
    description: 'Foundation testing for commercial, residential, and high-rise buildings.',
    imageUrl: '11.jpg',
  },
  {
    title: 'Infrastructure',
    description: 'Material and soil testing for highways, bridges, and transportation projects.',
    imageUrl: '12.jpg',
  },
  {
    title: 'Water Resources',
    description: 'Geotechnical analysis for dams, reservoirs, and irrigation channels.',
    imageUrl: '13.jpg',
  },
  {
    title: 'Industrial Projects',
    description: 'Ensuring structural integrity for factories, plants, and manufacturing units.',
    imageUrl: '14.jpg',
  },
  {
    title: 'Warehousing & Logistics',
    description: 'Soil bearing capacity and material strength for large-scale storage facilities.',
    imageUrl: '15.jpg',
  },
];

// --- Animation Variants for Cards (from InteractiveFeatures) ---
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: [0.25, 0.1, 0.25, 1.0],
      duration: 1.2,
    },
  },
};

// --- Reusable Sector Card Component (combining styles/animations from both) ---
interface SectorCardProps {
  title: string;
  description: string;
  imageUrl: string;
  gridSpan?: string; // Optional gridSpan for custom layouts
}

const SectorCard: React.FC<SectorCardProps> = ({ title, description, imageUrl, gridSpan = "" }) => {
  return (
    <motion.div
      className={`group relative rounded-lg overflow-hidden shadow-lg h-64 ${gridSpan}`} // Set default height as in InteractiveFeatures
      variants={cardVariants} // Apply motion variants here
      whileHover={{
        y: -12, // Move up more aggressively on hover
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
        }
      }}
    >
      <img
        src={imageUrl} // Use img tag for object-fit behavior as in InteractiveFeatures
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      {/* Text content wrapped for hover animation, matching InteractiveFeatures */}
      <div className="relative h-full flex flex-col items-center justify-end p-6 text-white text-center">
        <h3 className="text-lg font-bold transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
          {title}
        </h3>
        <div className="transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-32 overflow-hidden">
          <p className="mt-2 text-base text-gray-200 opacity-0 transition-opacity delay-200 duration-300 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Animation Variants for Text (from HomeSectors) ---
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

// --- Main HomeSectors Component with InteractiveFeatures' structure and animations ---
const HomeSectors: React.FC = () => {
  const headingText = "Industries We Empower";
  const paragraphText = "Providing critical geotechnical and material testing services across a diverse range of sectors.";

  return (
    <section className="bg-gray-50 pt-8 pb-24 sm:pt-12 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          {/* Animated Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-black"
            variants={sentenceVariants}
          >
            {headingText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
              </motion.span>
            ))}
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
            variants={sentenceVariants}
          >
            {paragraphText.split(" ").map((word, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Custom grid layout with 3 cards on top and 2 on bottom (as in InteractiveFeatures) */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Top row with 3 cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Using explicit motion.div wrappers for stagger transition as in original InteractiveFeatures */}
            <motion.div variants={cardVariants} transition={{ delay: 0 }}>
              <SectorCard
                title={sectorsData[0].title}
                description={sectorsData[0].description}
                imageUrl={sectorsData[0].imageUrl}
              />
            </motion.div>
            
            <motion.div variants={cardVariants} transition={{ delay: 0.3 }}>
              <SectorCard
                title={sectorsData[1].title}
                description={sectorsData[1].description}
                imageUrl={sectorsData[1].imageUrl}
              />
            </motion.div>
            
            <motion.div variants={cardVariants} transition={{ delay: 0.6 }}>
              <SectorCard
                title={sectorsData[2].title}
                description={sectorsData[2].description}
                imageUrl={sectorsData[2].imageUrl}
              />
            </motion.div>
          </motion.div>
          
          {/* Bottom row with 2 cards (one spanning 2 columns) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={cardVariants} transition={{ delay: 0.9 }}>
              <SectorCard
                title={sectorsData[3].title}
                description={sectorsData[3].description}
                imageUrl={sectorsData[3].imageUrl}
                gridSpan="md:col-span-1" // Explicitly set for smaller card
              />
            </motion.div>
            
            <motion.div 
              className="md:col-span-2" // This card spans 2 columns on medium screens and up
              variants={cardVariants} 
              transition={{ delay: 1.2 }}
            >
              <SectorCard
                title={sectorsData[4].title}
                description={sectorsData[4].description}
                imageUrl={sectorsData[4].imageUrl}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSectors;
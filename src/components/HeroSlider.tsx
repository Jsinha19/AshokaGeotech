import React, { useState, useEffect } from 'react';
// 1. Import motion and AnimatePresence from framer-motion
import { motion, AnimatePresence ,type Variants } from 'framer-motion';

// Define the data structure for each slide
interface SlideData {
  image: string;
  headline: string;
  subheadline: string;
}

// Data using local images from the 'public' folder
const slides: SlideData[] = [
  {
    image: '/1.jpg',
    headline: 'Pioneering Geotechnical Solutions',
    subheadline: 'Building the future on solid ground with advanced engineering and analysis.',
  },
  {
    image: '/2.jpg',
    headline: 'Precision Material Testing',
    subheadline: 'Ensuring the strength and reliability of every component with rigorous, certified testing.',
  },
  {
    image: '/3.jpg',
    headline: 'Unmatched Accuracy in Surveying',
    subheadline: 'From large-scale projects to detailed audits, our data provides the foundation for success.',
  },
];

// 2. Define animation variants for the text
const textVariants: Variants ={
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.5, ease: "easeIn" }
  }
};

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* LAYER 1: Background Images */}
      {/* AnimatePresence handles the exit animation for the images */}
      <AnimatePresence>
        <motion.div
          key={currentSlide} // The key tells AnimatePresence when the component changes
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
          style={{ zIndex: 0 }}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].headline}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* LAYER 2: Subtle Gradient Overlay */}
      {/* This gradient is dark at the bottom and fades to transparent at the top. */}
      {/* It ensures text is readable without hiding the image. */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
      ></div>

      {/* LAYER 3: Animated Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* 3. Wrap the text in AnimatePresence and use motion elements */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide} // Change key on slide change to trigger re-animation
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold">
              {slides[currentSlide].headline}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              {slides[currentSlide].subheadline}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* LAYER 4: Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
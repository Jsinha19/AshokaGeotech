import React from 'react';
import { Link } from 'react-router-dom';

// --- Import Swiper JS components ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// --- Import Swiper JS styles ---
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- Import Icons for Navigation ---
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// --- Data for Services ---
const services = [
  {
    title: 'Field Test',
    description: 'Comprehensive on-site testing services to ensure material quality and structural integrity.',
    imageUrl: '4.jpg',
  },
  {
    title: 'NDT (Non-Destructive Testing)',
    description: 'Advanced non-destructive testing methods to evaluate material properties without causing damage.',
    imageUrl: '5.jpg',
  },
  {
    title: 'Building Material',
    description: 'Rigorous laboratory testing for all types of building materials to guarantee compliance.',
    imageUrl: '6.jpg',
  },
  {
    title: 'NABL',
    description: 'Services and consultations in line with NABL standards, ensuring the highest level of quality.',
    imageUrl: '7.jpg',
  },
  {
    title: 'Geotechnical',
    description: 'In-depth geotechnical investigations to assess soil, rock, and groundwater conditions.',
    imageUrl: '8.jpg',
  },
];

// --- Service Card Component ---
interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => (
  <div className="relative group rounded-lg overflow-hidden shadow-lg h-64">
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
    ></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="relative h-full flex flex-col justify-end p-6 text-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);


// --- Main HomeServices Section Component ---
const HomeServices: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        {/* MODIFICATION: Changed items-center to items-start to align columns to the top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-28 pt-6 items-start px-6 lg:px-8">
          {/* Left: Title */}
          <div>
            <p className="text-sm font-bold text-black uppercase tracking-widest">OUR SERVICES</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-4">
              Services We Offer
            </h2>
          </div>

          {/* Right: Description & Buttons */}
          <div className="space-y-6">
            {/* MODIFICATION: Removed mt-4 from this paragraph for better alignment */}
            <p className="text-gray-600">
              Ashoka Geotech, based in Gwalior, is a premier Civil Engineering material testing laboratory and research facility. We are dedicated to providing precise and reliable testing services for a wide range of construction projects, ensuring safety, quality, and compliance with industry standards.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="flex items-center bg-transparent text-black font-semibold px-5 py-2 rounded-md border-2 border-black hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <div className="px-0 md:px-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.swiper-pagination' }}
              navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-16"
            >
              {services.map((service) => (
                <SwiperSlide key={service.title}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex justify-center">
            <div className="swiper-pagination !relative !bottom-0"></div>
          </div>

          <button className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white hover:bg-gray-200 rounded-full shadow-lg p-3 transition-all hidden md:flex items-center justify-center">
            <FiChevronLeft size={24} className="text-black" />
          </button>
          <button className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white hover:bg-gray-200 rounded-full shadow-lg p-3 transition-all hidden md:flex items-center justify-center">
            <FiChevronRight size={24} className="text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
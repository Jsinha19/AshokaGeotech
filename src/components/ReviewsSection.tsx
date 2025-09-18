"use client"

import { useState, useEffect } from "react"
import { Star, ExternalLink, Quote } from "lucide-react"

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Civil Engineer",
    rating: 5,
    comment:
      "Outstanding geotechnical analysis for our residential project. The soil investigation report was comprehensive and delivered on time.",
    avatar: "R",
  },
  {
    name: "Sunita Agarwal",
    role: "Project Manager",
    rating: 5,
    comment:
      "Ashoka Geotech's team provided excellent borewell consulting services. Professional approach and detailed reporting.",
    avatar: "S",
  },
  {
    name: "Vikram Singh",
    role: "Construction Consultant",
    rating: 5,
    comment: "Exceptional service quality! Their geotechnical survey was thorough and the team was very knowledgeable.",
    avatar: "V",
  },
  {
    name: "Meera Sharma",
    role: "Architect",
    rating: 5,
    comment:
      "Professional and reliable consultants. The soil testing results were accurate and helped us optimize our design.",
    avatar: "M",
  },
  {
    name: "Amit Joshi",
    role: "Developer",
    rating: 5,
    comment:
      "Impressed with their technical expertise and timely delivery. The geotechnical investigation was comprehensive.",
    avatar: "A",
  },
]

export default function ReviewsSection() {
  const [currentStartIndex, setCurrentStartIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentStartIndex((prev) => (prev + 1) % reviews.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "fill-yellow-400 text-yellow-400 drop-shadow-sm" : "text-gray-300"
        } transition-all duration-300`}
      />
    ))
  }

  const openGoogleReviews = () => {
    window.open("https://www.google.com/search?q=Ashoka+Geotech+Consultants+India+reviews", "_blank")
  }

  const getVisibleReviews = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentStartIndex + i) % reviews.length
      visible.push(reviews[index])
    }
    return visible
  }

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-200 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gray-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gray-100 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative flex flex-col lg:flex-row p-8 md:p-16 min-h-[36rem] max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-16">
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent mb-4 leading-tight">
                What Our Customers Say
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"></div>
            </div>

            <div className="mb-8 space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Ashoka Geotech Consultants India Pvt. Ltd. is rated{" "}
                <span className="font-semibold text-yellow-600">4.9 out of 5</span> by its customers.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Here are some testimonials from our valued clients, sharing their experiences with our engineering
                consultancy and soil testing services.
              </p>
            </div>

            <button
              onClick={openGoogleReviews}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ExternalLink
                size={20}
                className="relative z-10 group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="relative z-10">View on Google</span>
            </button>
          </div>
        </div>

        {/* Right Section - Enhanced Reviews */}
        <div className="lg:w-1/2 flex flex-col justify-center mt-12 lg:mt-0 pl-0 lg:pl-8">
          <div className="space-y-6 relative">
            {getVisibleReviews().map((review, idx) => (
              <div
                key={`${review.name}-${currentStartIndex}-${idx}`}
                className={`group relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform ${
                  hoveredCard === idx ? "scale-105 -translate-y-2" : "scale-100 translate-y-0"
                }`}
                style={{
                  animationDelay: `${idx * 150}ms`,
                  animation: `slideInRight 0.8s ease-out ${idx * 150}ms both`,
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 via-gray-50/50 to-gray-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                <Quote
                  className="absolute top-4 right-4 text-gray-200 group-hover:text-gray-400 transition-colors duration-300"
                  size={24}
                />

                {/* Header with Enhanced Avatar and Name */}
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-lg">{review.avatar}</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 text-lg">{review.avatar}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-black text-base mb-1 group-hover:text-gray-800 transition-colors duration-300">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">{review.role}</div>
                    <div className="flex items-center gap-1">{renderStars(review.rating)}</div>
                  </div>
                </div>

                <div className="relative">
                  <p className="text-gray-700 leading-relaxed text-base group-hover:text-black transition-colors duration-300">
                    "{review.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

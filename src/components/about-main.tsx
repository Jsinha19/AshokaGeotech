"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  ChevronRight,
  Target,
  Eye,
  Award,
  Compass,
  Heart,
  CheckCircle,
  Zap,
  Leaf,
  Globe,
  FlaskConical,
  BarChart3,
} from "lucide-react"

const AboutMain = () => {
  const [visibleSections, setVisibleSections] = useState(new Set<string>())
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>()
    Object.entries(sectionRefs.current).forEach(([key, ref]) => {
      if (!ref) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, key]))
          }
        },
        { threshold: 0.1, rootMargin: "-30px" },
      )
      observer.observe(ref)
      observers.set(key, observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const setSectionRef = (key: string) => (el: HTMLElement | null) => {
    sectionRefs.current[key] = el
  }

  const AnimatedCard: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
    children,
    delay = 0,
    className = "",
  }) => (
    <div
      className={`transform transition-all duration-1000 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )

  const CounterCard: React.FC<{
    icon: React.ComponentType<any>
    number: number
    label: string
    delay: number
  }> = ({ icon: Icon, number, label, delay }) => {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)

    useEffect(() => {
      if (visibleSections.has("stats") && !hasStarted) {
        setHasStarted(true)
        const timer = setTimeout(() => {
          const increment = number / 60
          const interval = setInterval(() => {
            setCount((prev) => {
              if (prev >= number) {
                clearInterval(interval)
                return number
              }
              return Math.min(prev + increment, number)
            })
          }, 25)
        }, delay)
        return () => clearTimeout(timer)
      }
    }, [visibleSections, number, delay, hasStarted])

    return (
      <div className="group rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg hover:border-gray-300 transition-all duration-500 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-gray-50 hover:to-white">
        <div className="relative">
          <Icon className="w-10 h-10 mx-auto mb-4 text-black group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
        </div>
        <div className="text-4xl font-bold mb-3 text-black group-hover:text-gray-800 transition-colors duration-300">
          {Math.floor(count)}
          {number >= 100 ? "+" : ""}
        </div>
        <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium">{label}</div>
      </div>
    )
  }

  const FloatingImage: React.FC<{ src: string; alt: string; delay: number; className?: string }> = ({ 
    src, alt, delay, className = "" 
  }) => (
    <AnimatedCard
      className={`${visibleSections.has("intro") ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}`}
      delay={delay}
    >
      <div className={`group relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-40 md:h-48 object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-xs text-gray-800 font-medium">
            {alt}
          </div>
        </div>
      </div>
    </AnimatedCard>
  )

  return (
    <main className="bg-white text-black overflow-hidden">
      {/* Introduction Section */}
      <section ref={setSectionRef("intro")} className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <AnimatedCard
            className={`${visibleSections.has("intro") ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            delay={200}
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent leading-tight">
                About Ashoka Geotech
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                Building the foundation of tomorrow through innovative geotechnical engineering solutions, comprehensive
                soil analysis, and a commitment to excellence in every project we undertake.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Discover Our Story
                </button>
                <button className="px-8 py-4 border-2 border-black text-black rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
                  Our Services
                </button>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard
            className={`${visibleSections.has("intro") ? "translate-y-0 opacity-100 rotate-0" : "translate-y-8 opacity-0 rotate-2"}`}
            delay={400}
          >
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
              <img
                src="/1.jpg"
                alt="Geotechnical drilling rig at a construction site"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-500">
                  <h3 className="font-semibold text-gray-900 mb-1">Advanced Geotechnical Solutions</h3>
                  <p className="text-sm text-gray-600">Precision engineering for lasting foundations</p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Enhanced Photo Gallery Strip with Staggered Animation */}
        <div className="mt-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: "/2.jpg", alt: "Active construction site with groundwork" },
              { src: "/3.jpg", alt: "Soil testing samples prepared in laboratory" },
              { src: "/4.jpg", alt: "Foundation layout and engineering markers" },
              { src: "/5.jpg", alt: "Engineering team collaborating on site" },
            ].map((img, i) => (
              <FloatingImage
                key={i}
                src={img.src}
                alt={img.alt}
                delay={600 + i * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={setSectionRef("stats")} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard
            className={`text-center mb-16 ${visibleSections.has("stats") ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            delay={100}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Excellence in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality and innovation reflected in our achievements
            </p>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CounterCard icon={Target} number={500} label="Projects Completed" delay={200} />
            <CounterCard icon={Award} number={15} label="Years of Experience" delay={300} />
            <CounterCard icon={CheckCircle} number={98} label="Client Satisfaction %" delay={400} />
            <CounterCard icon={Globe} number={25} label="Cities Served" delay={500} />
          </div>
        </div>
      </section>

      {/* Enhanced Quality Policy */}
      <section ref={setSectionRef("quality")} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedCard
            className={`${visibleSections.has("quality") ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
            delay={200}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-500">
                  <Award className="w-8 h-8 text-black" aria-hidden="true" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">Quality Policy</h2>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                At Ashoka Geotech, quality is our foundation. We adhere to the highest international standards in
                geotechnical engineering and soil analysis.
              </p>
              
              <div className="space-y-4">
                {[
                  "ISO 9001:2015 certified quality management systems",
                  "ASTM and IS code compliant testing procedures",
                  "Continuous improvement and innovation processes",
                  "Regular audits and quality assurance protocols",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-500 transform ${
                      visibleSections.has("quality") ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                    } hover:translate-x-2`}
                    style={{ transitionDelay: `${400 + idx * 100}ms` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-gray-800 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard
            className={`${visibleSections.has("quality") ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
            delay={300}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { src: "/6.jpg", alt: "Soil sample analysis in lab" },
                { src: "/7.jpg", alt: "Laboratory testing equipment" },
                { src: "/8.jpg", alt: "Foundation work at construction site" },
                { src: "/9.jpg", alt: "Engineering team collaborating" },
              ].map((img, i) => (
                <div 
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:rotate-1 transform ${
                    visibleSections.has("quality") ? "translate-y-0 opacity-100 scale-100" : "translate-y-6 opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-48 md:h-56 object-cover transition-all duration-1000 group-hover:scale-125 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 text-xs text-gray-800 font-medium">
                      {img.alt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section ref={setSectionRef("mission-vision")} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <AnimatedCard
            className={`${visibleSections.has("mission-vision") ? "scale-100 opacity-100 rotate-0" : "scale-95 opacity-0 -rotate-1"}`}
            delay={200}
          >
            <div className="group rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:rotate-1 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 mb-8 shadow-lg">
                <img
                  src="/10.jpg"
                  alt="Fieldwork for geotechnical survey"
                  className="w-full h-56 md:h-64 object-cover transition-all duration-1000 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                  <Target className="w-6 h-6 text-black" />
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mr-4 group-hover:from-black group-hover:to-gray-800 transition-all duration-500">
                  <Target className="w-7 h-7 text-black group-hover:text-white transition-colors duration-500" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold group-hover:text-gray-800 transition-colors duration-300">Our Mission</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Provide world-class geotechnical engineering services that ensure the safety, stability, and
                sustainability of infrastructure projects. Accurate soil analysis and innovative foundation solutions
                empower our clients to build with confidence.
              </p>
              
              <button className="inline-flex items-center gap-3 text-black hover:text-gray-600 transition-all duration-300 group-hover:translate-x-2 font-semibold">
                <span>Learn more about our services</span>
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </AnimatedCard>

          {/* Vision */}
          <AnimatedCard
            className={`${visibleSections.has("mission-vision") ? "scale-100 opacity-100 rotate-0" : "scale-95 opacity-0 rotate-1"}`}
            delay={400}
          >
            <div className="group rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:-rotate-1 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 mb-8 shadow-lg">
                <img
                  src="/11.jpg"
                  alt="Modern infrastructure and bridges"
                  className="w-full h-56 md:h-64 object-cover transition-all duration-1000 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                  <Eye className="w-6 h-6 text-black" />
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mr-4 group-hover:from-black group-hover:to-gray-800 transition-all duration-500">
                  <Eye className="w-7 h-7 text-black group-hover:text-white transition-colors duration-500" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold group-hover:text-gray-800 transition-colors duration-300">Our Vision</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                To be India&apos;s most trusted and innovative geotechnical consulting firm, recognized for technical
                excellence, environmental consciousness, and contributions to sustainable infrastructure.
              </p>
              
              <button className="inline-flex items-center gap-3 text-black hover:text-gray-600 transition-all duration-300 group-hover:translate-x-2 font-semibold">
                <span>Explore our vision in action</span>
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Enhanced Strategic Goals */}
      <section ref={setSectionRef("goals")} className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              visibleSections.has("goals") ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Compass className="w-8 h-8 text-black" aria-hidden="true" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Strategic Goals & Plans
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Charting our path towards excellence in geotechnical engineering and sustainable infrastructure development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technology Integration",
                description: "AI-driven analysis and digital modeling for accuracy and efficiency",
                Icon: Zap,
                image: "/12.jpg",
                delay: 200,
              },
              {
                title: "Sustainable Practices",
                description: "Lead with eco-friendly testing and reduced environmental impact",
                Icon: Leaf,
                image: "/13.jpg",
                delay: 300,
              },
              {
                title: "Market Expansion",
                description: "Presence in major cities with state-of-the-art testing facilities",
                Icon: Globe,
                image: "/14.jpg",
                delay: 400,
              },
              {
                title: "Research & Development",
                description: "Collaborate with universities for groundbreaking research",
                Icon: FlaskConical,
                image: "/15.jpg",
                delay: 500,
              },
              {
                title: "Digital Transformation",
                description: "Real-time project monitoring and reporting platform",
                Icon: BarChart3,
                image: "/16.jpg",
                delay: 600,
              },
              {
                title: "Industry Leadership",
                description: "Set new benchmarks and mentor next-generation engineers",
                Icon: Award,
                image: "/17.jpg",
                delay: 700,
              },
            ].map(({ title, description, Icon, image, delay }, idx) => (
              <AnimatedCard
                key={idx}
                className={`${visibleSections.has("goals") ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}`}
                delay={delay}
              >
                <div className="group rounded-3xl border border-gray-200 p-6 h-full hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 hover:rotate-1 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50">
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 mb-6">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-48 object-cover transition-all duration-1000 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:from-black group-hover:to-gray-800 transition-all duration-500 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-black group-hover:text-white transition-colors duration-500" aria-hidden="true" />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 group-hover:text-gray-800 transition-colors duration-300">{title}</h4>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">{description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Commitment */}
      <section ref={setSectionRef("commitment")} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              visibleSections.has("commitment") ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Our Commitment
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to excellence, innovation, and the highest standards of professional integrity.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Client Excellence",
                items: [
                  "Personalized service approach",
                  "Transparent communication",
                  "Timely project delivery",
                  "Post-project support",
                ],
                image: "/15.jpg",
                delay: 200,
              },
              {
                title: "Environmental Responsibility",
                items: [
                  "Eco-friendly testing methods",
                  "Waste reduction initiatives",
                  "Sustainable material usage",
                  "Carbon footprint monitoring",
                ],
                image: "/16.jpg",
                delay: 400,
              },
              {
                title: "Professional Integrity",
                items: [
                  "Ethical business practices",
                  "Accurate reporting standards",
                  "Confidentiality protection",
                  "Regulatory compliance",
                ],
                image: "/17.jpg",
                delay: 600,
              },
            ].map((commitment, idx) => (
              <AnimatedCard
                key={idx}
                className={`${visibleSections.has("commitment") ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}`}
                delay={commitment.delay}
              >
                <div className="group rounded-3xl border border-gray-200 p-8 h-full hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50">
                  <div className="relative overflow-hidden rounded-2xl border border-gray-200 mb-8">
                    <img
                      src={commitment.image}
                      alt={commitment.title}
                      className="w-full h-48 object-cover transition-all duration-1000 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mr-4 group-hover:from-black group-hover:to-gray-800 transition-all duration-500">
                      <CheckCircle className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" aria-hidden="true" />
                    </div>
                    <h4 className="text-2xl font-bold group-hover:text-gray-800 transition-colors duration-300">{commitment.title}</h4>
                  </div>
                  
                  <ul className="space-y-4">
                    {commitment.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={`flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-500 transform ${
                          visibleSections.has("commitment") ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                        } hover:translate-x-2`}
                        style={{ transitionDelay: `${commitment.delay + itemIndex * 100}ms` }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0 mt-1 group-hover:from-black group-hover:to-gray-800 transition-all duration-300">
                          <span className="w-2 h-2 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
                        </div>
                        <span className="text-gray-800 group-hover:text-gray-700 transition-colors duration-300 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section ref={setSectionRef("cta")} className="py-20 px-4 sm:px-6 lg:px-8">
        <AnimatedCard
          className={`max-w-5xl mx-auto transform transition-all duration-1000 ${
            visibleSections.has("cta") ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
          }`}
          delay={200}
        >
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 p-12 bg-gradient-to-br from-white via-gray-50 to-white shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-gray-100/30 to-transparent rounded-full transform -translate-x-12 translate-y-12" />
            
            <div className="relative z-10 text-center">
              <div className="mb-8">
                <img
                  src="/18.jpg"
                  alt="Ashoka Geotech team"
                  className="w-20 h-20 rounded-2xl object-cover mx-auto mb-6 border-2 border-gray-200 shadow-lg hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ready to Build on Solid Ground?
              </h3>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Partner with Ashoka Geotech for comprehensive geotechnical solutions that ensure your project&apos;s
                success and long-term stability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group px-10 py-4 rounded-2xl font-bold bg-black text-white hover:bg-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                  <span className="relative z-10">Get Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
                <button className="group px-10 py-4 rounded-2xl font-bold border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                  <span className="relative z-10">View Our Projects</span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </section>
    </main>
  )
}

export default AboutMain
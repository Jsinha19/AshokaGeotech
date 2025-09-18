import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.message) {
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } else {
      alert('Please fill in all fields.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ashoka Geotech Consultants India Pvt Ltd is your trusted partner for 
                professional geotechnical consulting services. Located in the heart of 
                Gwalior, we provide expert solutions for all your geotechnical needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group hover:bg-gray-100 hover:shadow-lg p-4 rounded-lg transition-all duration-300">
                <div className="bg-gray-200 p-3 rounded-full group-hover:bg-black transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Office Address</h3>
                  <p className="text-gray-600">
                    Infront of Silver Oak Hotel, Near Hanuman Temple<br />
                    City Centre, Gwalior, Madhya Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:bg-gray-100 hover:shadow-lg p-4 rounded-lg transition-all duration-300">
                <div className="bg-gray-200 p-3 rounded-full group-hover:bg-black transition-colors duration-300">
                  <Phone className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Phone Number</h3>
                  <p className="text-gray-600">+91-XXXXXXXXXX</p>
                  <p className="text-gray-600">+91-XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:bg-gray-100 hover:shadow-lg p-4 rounded-lg transition-all duration-300">
                <div className="bg-gray-200 p-3 rounded-full group-hover:bg-black transition-colors duration-300">
                  <Mail className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Email Address</h3>
                  <p className="text-gray-600">info@ashokageotech.com</p>
                  <p className="text-gray-600">contact@ashokageotech.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:bg-gray-100 hover:shadow-lg p-4 rounded-lg transition-all duration-300">
                <div className="bg-gray-200 p-3 rounded-full group-hover:bg-black transition-colors duration-300">
                  <Clock className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-right border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>
            <div className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 hover:border-gray-400"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 hover:border-gray-400"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 hover:border-gray-400"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none hover:border-gray-400"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Find Us on the Map
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6341234567!2d78.18292!3d26.22456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEzJzI4LjQiTiA3OMKwMTAnNTguNSJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ashoka Geotech Consultants Location"
              className="hover:scale-105 transition-transform duration-700"
            ></iframe>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
        `}
      </style>
    </div>
  )
}

export default Contact
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            Designing Dreams, 
            <br />
            <span className="font-normal">Building Realities</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Transform your space with world-class architectural design and planning. From concept to completion, we deliver innovative solutions that inspire and enhance lives across 7+ countries.
          </p>
          <button
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-sm hover:bg-gray-100 transition-colors duration-300 group"
          >
            View Portfolio
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Star className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-2">4.5</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Why Choose Arkline Studio?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
               Global Expertise, Personal Touch International design standards with deep local understanding. Every project reflects both world-class quality and cultural authenticity.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                End-to-End Excellence Complete project lifecycle management from initial concept through final delivery. No outsourcing, no compromises.
              </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Innovation-Driven Design Cutting-edge technology meets timeless architectural principles. We create spaces that are both beautiful and future-ready.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
               Proven Track Record 98% client satisfaction rate with projects spanning 7+ countries. Your success is our reputation.
              </p>
                          <button
              onClick={() => navigate('/about')}
              className="px-6 py-3 bg-amber-600 text-white rounded-sm hover:bg-amber-700 transition-colors duration-300"
            >
              Learn More About Us
            </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Interior Design Studio"
                className="rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
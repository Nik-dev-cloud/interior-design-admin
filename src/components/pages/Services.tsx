import React from 'react';
import { Home, Building, MessageCircle, Palette, Ruler, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Complete home transformations from concept to completion, including space planning, furniture selection, and styling.',
      features: ['Full-service design', 'Space planning', 'Furniture selection', '3D visualization', 'Project management']
    },
    {
      icon: Building,
      title: 'Commercial Design',
      description: 'Professional spaces that enhance productivity and reflect your brand identity, from offices to retail environments.',
      features: ['Office design', 'Retail spaces', 'Restaurant interiors', 'Brand integration', 'Ergonomic planning']
    },
    {
      icon: MessageCircle,
      title: 'Design Consultation',
      description: 'Expert advice and guidance for DIY projects or existing spaces that need a professional touch.',
      features: ['Color consultation', 'Layout optimization', 'Material selection', 'Design direction', 'Budget planning']
    },
    {
      icon: Palette,
      title: 'Interior Styling',
      description: 'Transform your space with carefully curated accessories, artwork, and finishing touches.',
      features: ['Accessory selection', 'Artwork curation', 'Seasonal updates', 'Color coordination', 'Styling sessions']
    },
    {
      icon: Ruler,
      title: 'Space Planning',
      description: 'Optimize your layout for maximum functionality and flow, whether renovating or starting fresh.',
      features: ['Floor plan design', 'Traffic flow analysis', 'Furniture placement', 'Storage solutions', 'Lighting planning']
    },
    {
      icon: Lightbulb,
      title: 'Virtual Design',
      description: 'Remote design services including mood boards, shopping lists, and detailed design plans.',
      features: ['Mood boards', 'Shopping lists', 'Design plans', 'Virtual meetings', 'Digital renderings']
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From complete home transformations to targeted design consultations, I offer comprehensive services to meet your unique needs and budget.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-amber-100 rounded-full mr-4">
                    <service.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">My Design Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every project follows a structured approach to ensure your vision comes to life seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">
               We dive deep—through client interviews, site analysis, and research—to define your needs, goals, budget, and local context.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Concept Development</h3>
              <p className="text-gray-600">
                We craft mood boards, material palettes, and spatial sketches that blend your vision with domestic or international design influences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Design Documentation</h3>
              <p className="text-gray-600">
                We produce detailed drawings, specifications, and schedules—coordinated with engineers and vendors—to ensure code compliance and build readiness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Implementation & Delivery</h3>
              <p className="text-gray-600">
                We manage procurement, construction, and installation—overseeing quality, timelines, and logistics—to deliver your space on time and on budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
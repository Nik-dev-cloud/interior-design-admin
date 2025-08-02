import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);
  setSubmitSuccess(null);
  setSubmitError(null);

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxUdNGKbNVpPkKsHCDCUZ1LwIFwyXK6D25eWbv_3pZSuJWLXMSD-Oel5Vm-slH_edRA9g/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log('Contact form API response:', result);

    if (typeof result === 'object' && result !== null && 'success' in result) {
      if (result.success) {
        setSubmitSuccess('Thank you! Your message has been sent.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          message: ''
        });
      } else {
        setSubmitError('Error: ' + (result.error || 'Unknown error'));
      }
    } else {
      setSubmitError('Unexpected response from server.');
    }
  } catch (error) {
    setSubmitError('There was an error submitting the form. Please try again.');
    console.error('Contact form submission error:', error);
  } finally {
    setSubmitting(false);
  }
};


  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? I'd love to hear about your project and discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Start Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitSuccess && (
                  <div className="p-3 bg-green-100 text-green-700 rounded text-center">{submitSuccess}</div>
                )}
                {submitError && (
                  <div className="p-3 bg-red-100 text-red-700 rounded text-center">{submitError}</div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="styling">Interior Styling</option>
                      <option value="virtual">Virtual Design</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5l">Under ₹5 Lakhs</option>
                    <option value="5l-10l">₹5 - ₹10 Lakhs</option>
                    <option value="10l-25l">₹10 - ₹25 Lakhs</option>
                    <option value="25l-50l">₹25 - ₹50 Lakhs</option>
                    <option value="over-50l">Over ₹50 Lakhs</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    placeholder="Tell me about your project, space, timeline, and any specific requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 px-6 rounded-sm hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center font-medium disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Sanala Road<br />
                      Morbi-363641<br />
                      Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919876543210" className="hover:text-amber-600 transition-colors">
                        +91 98765 43210
                      </a><br />
                      <a href="tel:+919876543210" className="hover:text-amber-600 transition-colors">
                        +91 98765 43210
                      </a><br />  
                      <a href="tel:+919876543210" className="hover:text-amber-600 transition-colors">
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@arklinestudio.com" className="hover:text-amber-600 transition-colors">
                        contact@arklinestudio.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Studio Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 10:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 5:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Follow My Work</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 bg-gray-100 rounded-sm hover:bg-amber-100 hover:text-amber-600 transition-colors duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-100 rounded-sm hover:bg-amber-100 hover:text-amber-600 transition-colors duration-200"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-100 rounded-sm hover:bg-amber-100 hover:text-amber-600 transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-100 rounded-sm hover:bg-amber-100 hover:text-amber-600 transition-colors duration-200"
                    aria-label="Pinterest"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 0c-8.837 0-16 7.163-16 16 0 6.627 4.021 12.271 9.729 14.646-0.135-1.246-0.256-3.164 0.053-4.527 0.279-1.197 1.797-7.633 1.797-7.633s-0.459-0.918-0.459-2.273c0-2.131 1.236-3.726 2.775-3.726 1.309 0 1.941 0.982 1.941 2.158 0 1.316-0.838 3.287-1.27 5.117-0.361 1.531 0.768 2.779 2.277 2.779 2.732 0 4.832-2.883 4.832-7.043 0-3.687-2.652-6.266-6.438-6.266-4.395 0-6.977 3.297-6.977 6.703 0 1.346 0.518 2.797 1.166 3.584 0.129 0.156 0.148 0.293 0.109 0.451-0.119 0.492-0.385 1.531-0.438 1.742-0.068 0.273-0.221 0.332-0.512 0.201-1.918-0.797-3.121-3.293-3.121-5.301 0-4.316 3.646-9.484 10.883-9.484 5.813 0 9.629 4.211 9.629 8.734 0 5.973-3.309 10.406-8.211 10.406-1.646 0-3.195-0.891-3.725-1.898l-1.016 3.867c-0.309 1.18-1.148 2.656-1.713 3.559 1.289 0.398 2.652 0.617 4.078 0.617 8.837 0 16-7.163 16-16s-7.163-16-16-16z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gray-50 rounded-sm">
                <h3 className="font-medium text-gray-900 mb-2">Response Time</h3>
                <p className="text-sm text-gray-600">
                  I typically respond to inquiries within 24 hours. For urgent matters, please call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
// pages/index.js - MasterWood Website IMPROVED v2.0 (FIXED)
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeForm, setActiveForm] = useState(null);
  const [formStep, setFormStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [activeGallery, setActiveGallery] = useState(null);
  
  const [leadData, setLeadData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    description: ''
  });

  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    description: '',
    address: ''
  });

  const [calcData, setCalcData] = useState({
    service: '',
    area: '',
    description: ''
  });

  const services = [
    { 
      id: 'cabinets', 
      title: "Custom Cabinet Making", 
      desc: "Modular kitchen & storage cabinets tailored to your space",
      priceRange: "Starting from PKR 25,000",
      icon: "🗄️"
    },
    { 
      id: 'wardrobe', 
      title: "Wardrobe & Installation", 
      desc: "Built-in & walk-in wardrobes with smart organization",
      priceRange: "Starting from PKR 35,000",
      icon: "👔"
    },
    { 
      id: 'door', 
      title: "Door Installation", 
      desc: "Wooden doors, frames & hardware installation",
      priceRange: "Starting from PKR 15,000",
      icon: "🚪"
    },
    { 
      id: 'polishing', 
      title: "Furniture Polishing", 
      desc: "Restore & protect wood surfaces with premium finishes",
      priceRange: "Starting from PKR 8,000",
      icon: "✨"
    },
    { 
      id: 'molding', 
      title: "Custom Wall Molding", 
      desc: "Crown molding, trim work & decorative elements",
      priceRange: "Starting from PKR 12,000",
      icon: "🏛️"
    },
    { 
      id: 'kitchen', 
      title: "Kitchen Renovation", 
      desc: "Complete kitchen transformation & remodeling",
      priceRange: "Starting from PKR 80,000",
      icon: "🍳"
    },
    { 
      id: 'racks', 
      title: "Custom Storage Racks", 
      desc: "Shelving systems & organization solutions",
      priceRange: "Starting from PKR 10,000",
      icon: "📚"
    },
    { 
      id: 'bathroom', 
      title: "Bathroom Renovation", 
      desc: "Vanities, storage & bathroom woodwork",
      priceRange: "Starting from PKR 40,000",
      icon: "🛁"
    },
    { 
      id: 'flooring', 
      title: "Wooden Flooring", 
      desc: "Hardwood & engineered flooring installation",
      priceRange: "Starting from PKR 150/sqft",
      icon: "🪵"
    },
    { 
      id: 'media', 
      title: "Media Wall Design", 
      desc: "TV units, feature walls & entertainment centers",
      priceRange: "Starting from PKR 30,000",
      icon: "📺"
    },
    { 
      id: 'paneling', 
      title: "Wall Panelling", 
      desc: "3D panels, wainscoting & decorative walls",
      priceRange: "Starting from PKR 180/sqft",
      icon: "🎨"
    },
    { 
      id: 'lock', 
      title: "Door Lock Installation", 
      desc: "Smart & traditional lock installation",
      priceRange: "Starting from PKR 3,000",
      icon: "🔐"
    },
    { 
      id: 'other', 
      title: "Other Services", 
      desc: "Custom carpentry solutions for unique needs",
      priceRange: "Get Custom Quote",
      icon: "🔨"
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      title: "Modern Kitchen Renovation",
      location: "DHA Phase 5, Lahore",
      service: "Kitchen Renovation",
      description: "Complete modular kitchen with island counter and premium finishes"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      title: "Walk-in Wardrobe",
      location: "Bahria Town, Lahore",
      service: "Custom Wardrobe",
      description: "Luxury walk-in closet with custom organizers and LED lighting"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&q=80",
      title: "Entertainment Wall Unit",
      location: "Gulberg, Lahore",
      service: "Media Wall",
      description: "Modern TV unit with integrated storage and ambient lighting"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
      title: "Wall Paneling Project",
      location: "Cantt, Lahore",
      service: "Wall Paneling",
      description: "3D textured wall panels creating stunning accent walls"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      title: "Crown Molding Installation",
      location: "Model Town, Lahore",
      service: "Wall Molding",
      description: "Elegant crown molding adding architectural character"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80",
      title: "Custom Wooden Doors",
      location: "Johar Town, Lahore",
      service: "Door Installation",
      description: "Handcrafted solid wood doors with premium hardware"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khan",
      location: "DHA Phase 5",
      rating: 5,
      text: "Exceptional work on our kitchen renovation! The team was professional, delivered on time, and the quality exceeded our expectations. Highly recommend MasterWood!",
      service: "Kitchen Renovation",
      date: "December 2024",
      avatar: "AK"
    },
    {
      id: 2,
      name: "Sarah Malik",
      location: "Bahria Town",
      rating: 5,
      text: "Beautiful wardrobe installation with attention to every detail. The craftsmanship is top-notch and they completed everything within budget. Very satisfied!",
      service: "Custom Wardrobe",
      date: "January 2025",
      avatar: "SM"
    },
    {
      id: 3,
      name: "Fahad Hassan",
      location: "Gulberg",
      rating: 5,
      text: "Best carpentry service in Lahore! From consultation to final installation, the process was smooth. The media wall they created is absolutely stunning!",
      service: "Media Wall Design",
      date: "November 2024",
      avatar: "FH"
    },
    {
      id: 4,
      name: "Ayesha Imran",
      location: "Cantt",
      rating: 5,
      text: "Professional team with excellent communication. They transformed our living room with beautiful wall paneling. Worth every rupee!",
      service: "Wall Paneling",
      date: "January 2025",
      avatar: "AI"
    },
    {
      id: 5,
      name: "Usman Ali",
      location: "Model Town",
      rating: 5,
      text: "Outstanding furniture polishing service! They restored our old dining set to look brand new. Great pricing and quick turnaround.",
      service: "Furniture Polishing",
      date: "December 2024",
      avatar: "UA"
    },
    {
      id: 6,
      name: "Zainab Raza",
      location: "Johar Town",
      rating: 5,
      text: "Impressed by their professionalism and craftsmanship. The custom cabinets they built fit perfectly and look amazing. Highly recommended!",
      service: "Custom Cabinets",
      date: "October 2024",
      avatar: "ZR"
    }
  ];

  const faqs = [
    {
      question: "What areas in Lahore do you serve?",
      answer: "We provide services across all major areas of Lahore including DHA, Bahria Town, Gulberg, Cantt, Model Town, Johar Town, Wapda Town, and surrounding areas."
    },
    {
      question: "Do you provide free site visits?",
      answer: "Yes! We offer completely free site visits and consultations. Our expert will assess your space and provide a detailed quote with no obligation."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically require 40% advance payment to start the project, 40% midway, and the remaining 20% upon completion. We accept cash, bank transfer, and JazzCash/EasyPaisa."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project duration varies: Small projects (door installation, furniture polishing) take 1-3 days. Medium projects (wardrobes, cabinets) take 5-10 days. Large projects (kitchen renovation) take 2-4 weeks."
    },
    {
      question: "Do you provide warranty on your work?",
      answer: "Yes, we provide a 1-year warranty on all craftsmanship and installation. For hardware and materials, manufacturer warranties apply."
    },
    {
      question: "What materials do you use?",
      answer: "We use premium quality materials including solid wood, MDF, plywood, melamine, and imported hardware. We can work with your preferred materials or recommend the best options for your budget."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "02:00 PM", "03:00 PM", 
    "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  const resetForm = () => {
    setLeadData({ name: '', phone: '', email: '', address: '', service: '', description: '' });
    setBookingData({ name: '', phone: '', date: '', time: '', service: '', description: '', address: '' });
    setCalcData({ service: '', area: '', description: '' });
    setFormStep(1);
  };

  const showSuccessNotification = (message) => {
    setSuccessMessage(message);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  // WhatsApp Calculator Submit - FIXED (removed space after ?text=)
  const submitCalculator = (e) => {
    e.preventDefault();
    const service = services.find(s => s.id === calcData.service);
    const message = `*Quote Request - MasterWood*%0A%0AService: ${service?.title || 'General Inquiry'}%0AArea/Details: ${calcData.area}%0ADescription: ${calcData.description || 'N/A'}%0A%0APlease send me a detailed quote.`;
    window.open(`https://wa.me/923054146737?text=${message}`, '_blank');
    showSuccessNotification('Quote request sent! We will contact you on WhatsApp shortly.');
    resetForm();
    setActiveForm(null);
  };

  // FIXED (removed space after ?text=)
  const submitLead = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const message = `*New Lead - MasterWood*%0A%0AName: ${leadData.name}%0APhone: ${leadData.phone}%0AEmail: ${leadData.email || 'N/A'}%0AAddress: ${leadData.address}%0AService: ${leadData.service}%0ADescription: ${leadData.description || 'N/A'}`;
    window.open(`https://wa.me/923054146737?text=${message}`, '_blank');
    showSuccessNotification('Quote request sent successfully! Our team will contact you within 2 hours.');
    resetForm();
    setActiveForm(null);
    setSubmitting(false);
  };

  // FIXED (removed space after ?text=)
  const submitBooking = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const message = `*Site Visit Booking - MasterWood*%0A%0AName: ${bookingData.name}%0APhone: ${bookingData.phone}%0AService: ${bookingData.service}%0ADate: ${bookingData.date}%0ATime: ${bookingData.time}%0AAddress: ${bookingData.address}%0ADescription: ${bookingData.description || 'N/A'}`;
    window.open(`https://wa.me/923054146737?text=${message}`, '_blank');
    showSuccessNotification('Site visit booked successfully! We will confirm via WhatsApp shortly.');
    resetForm();
    setActiveForm(null);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>MasterWood Lahore | Expert Carpentry & Renovation Services</title>
        <meta name="description" content="Professional carpentry services in Lahore. Custom cabinets, wardrobes, kitchen renovation, wooden flooring. 10+ years experience. Free quotes & site visits." />
        <meta name="keywords" content="carpentry Lahore, kitchen renovation, custom wardrobes, wooden flooring, furniture polishing, door installation" />
      </Head>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl animate-slide-in-right max-w-md">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-bold">Success!</p>
              <p className="text-sm">{successMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🪚</span>
              <div>
                <div className="text-2xl font-bold text-amber-800">MasterWood</div>
                <div className="text-xs text-gray-600">Lahore's Trusted Carpenters</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-700 hover:text-amber-800 font-medium transition">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-amber-800 font-medium transition">Portfolio</a>
              <a href="#testimonials" className="text-gray-700 hover:text-amber-800 font-medium transition">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-800 font-medium transition">Contact</a>
            </div>
            <button onClick={() => setActiveForm('lead')} className="bg-amber-800 text-white px-6 py-2 rounded-lg hover:bg-amber-900 font-bold transition shadow-md">Get Free Quote</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-4">🏆 10+ Years of Excellence</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Lahore's Most Trusted Carpentry Experts</h1>
              <p className="text-xl mb-8 text-amber-100">Transform your home with premium custom woodwork. From luxury kitchens to elegant wardrobes – we craft perfection in every detail.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button onClick={() => setActiveForm('booking')} className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-center hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2">
                  <span>📅</span> Book Free Site Visit
                </button>
                <button onClick={() => setActiveForm('lead')} className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-white hover:text-amber-900 transition flex items-center justify-center gap-2">
                  <span>💬</span> Get Instant Quote
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-amber-100">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9★</div>
                  <div className="text-sm text-amber-100">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm text-amber-100">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Quick Quote Calculator */}
            <div className="bg-white rounded-2xl p-6 text-gray-800 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⚡</span>
                <h3 className="text-xl font-bold text-amber-900">Get Free Quote in 30 Seconds</h3>
              </div>
              <form onSubmit={submitCalculator}>
                <select 
                  className="w-full mb-3 p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                  value={calcData.service} 
                  onChange={(e) => setCalcData({...calcData, service: e.target.value})} 
                  required
                >
                  <option value="">Select Service *</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.icon} {s.title}</option>)}
                </select>
                <input 
                  type="text" 
                  placeholder="Area size or details (e.g., 10x12 ft kitchen) *" 
                  className="w-full mb-3 p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                  value={calcData.area} 
                  onChange={(e) => setCalcData({...calcData, area: e.target.value})} 
                  required 
                />
                <textarea 
                  placeholder="Additional details (Optional)" 
                  rows={2} 
                  className="w-full mb-4 p-3 border-2 border-gray-200 rounded-lg resize-none focus:border-amber-800 focus:outline-none transition" 
                  value={calcData.description} 
                  onChange={(e) => setCalcData({...calcData, description: e.target.value})} 
                />
                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-md">
                  <span>💬</span> Send via WhatsApp
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">✓ No signup required • Free consultation</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Pricing */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-4">OUR EXPERTISE</div>
          <h2 className="text-4xl font-bold mb-4">Complete Carpentry Solutions</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Professional woodwork services with transparent pricing and guaranteed quality</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition border-t-4 border-amber-800 group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-3">{service.desc}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-800 font-bold text-sm bg-amber-50 px-3 py-1 rounded-full">{service.priceRange}</span>
              </div>
              <button 
                onClick={() => {
                  setLeadData({...leadData, service: service.title}); 
                  setActiveForm('lead');
                }} 
                className="text-amber-800 font-semibold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Get Quote <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio with Real Images */}
      <section id="portfolio" className="bg-gradient-to-b from-gray-100 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-4">OUR WORK</div>
            <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">See the quality and craftsmanship in our completed carpentry projects across Lahore</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer" onClick={() => setActiveGallery(item)}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-amber-800 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {item.service}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-amber-800 transition">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 flex items-center gap-2">
                    <span>📍</span> {item.location}
                  </p>
                  <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                  <button className="text-amber-800 font-semibold text-sm hover:underline flex items-center gap-1">
                    View Details <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-4">CUSTOMER REVIEWS</div>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Don't just take our word for it - hear from our satisfied customers across Lahore</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-amber-100">
                <div className="flex items-center gap-1 mb-3 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-amber-100">
                  <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-amber-800 font-semibold">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-100 to-yellow-50 px-8 py-4 rounded-full">
              <span className="text-3xl">⭐</span>
              <div className="text-left">
                <p className="text-2xl font-bold text-amber-900">4.9 out of 5</p>
                <p className="text-sm text-gray-600">Based on 127+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-4">FAQ</div>
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about our services</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-amber-50 transition"
                >
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                  <span className="text-2xl text-amber-800 flex-shrink-0">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Google Maps */}
      <section id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <div className="inline-block bg-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-4">GET IN TOUCH</div>
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p className="text-gray-300 mb-8 text-lg">Get a free consultation and detailed quote from our expert team.</p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="font-bold text-xl mb-1">0305-4146737</p>
                  <p className="text-sm text-gray-400">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm text-gray-400">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="font-bold text-xl mb-1">DHA Phase 6, Lahore</p>
                  <p className="text-sm text-gray-400">Free site visits across all Lahore areas</p>
                  <p className="text-sm text-amber-400">DHA • Bahria • Gulberg • Cantt • Model Town</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
                <span className="text-3xl">💬</span>
                <div>
                  <p className="font-bold text-xl mb-1">WhatsApp Available</p>
                  <p className="text-sm text-gray-400">Chat with us anytime for quick quotes</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl overflow-hidden h-80 w-full shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.176790772394!2d74.40856431512476!3d31.469726881386614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906fa6d4b2d55%3A0x3e6ef3e3e5e5e5e5!2sDHA%20Phase%206%2C%20Lahore!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <p className="text-xs text-gray-400 mt-3 flex items-center gap-2">
              <span>📍</span> Click to get directions to our office in DHA Phase 6
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send Quick Message</h3>
            <form onSubmit={submitLead} className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name *" 
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition" 
                value={leadData.name}
                onChange={(e) => setLeadData({...leadData, name: e.target.value})} 
                required 
              />
              <input 
                type="tel" 
                placeholder="Phone Number *" 
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition" 
                value={leadData.phone}
                onChange={(e) => setLeadData({...leadData, phone: e.target.value})} 
                required 
              />
              <select 
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-amber-500 focus:outline-none transition"
                value={leadData.service}
                onChange={(e) => setLeadData({...leadData, service: e.target.value})}
              >
                <option value="">Select Service (Optional)</option>
                {services.map(s => <option key={s.id} value={s.title}>{s.icon} {s.title}</option>)}
              </select>
              <textarea 
                placeholder="Your message or project details..." 
                rows={4} 
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none focus:border-amber-500 focus:outline-none transition" 
                value={leadData.description}
                onChange={(e) => setLeadData({...leadData, description: e.target.value})} 
              />
              <button 
                type="submit" 
                disabled={submitting}
                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <span className="animate-spin">⏳</span> Sending...
                  </>
                ) : (
                  <>
                    <span>💬</span> Send via WhatsApp
                  </>
                )}
              </button>
              <p className="text-xs text-gray-400 text-center">We typically respond within 2 hours during business hours</p>
            </form>
          </div>
        </div>
      </section>

      {/* Site Visit Booking Modal */}
      {activeForm === 'booking' && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b flex justify-between items-center bg-gradient-to-r from-amber-900 to-amber-700 text-white rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold">Book Free Site Visit</h2>
                <p className="text-sm text-amber-100">Our expert will visit at your convenience</p>
              </div>
              <button onClick={() => {setActiveForm(null); resetForm();}} className="text-3xl hover:bg-white hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center transition">&times;</button>
            </div>
            <form onSubmit={submitBooking} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name *" 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                  value={bookingData.name} 
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})} 
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="Phone *" 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                  value={bookingData.phone} 
                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} 
                  required 
                />
              </div>
              
              <select 
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                value={bookingData.service} 
                onChange={(e) => setBookingData({...bookingData, service: e.target.value})} 
                required
              >
                <option value="">Select Service *</option>
                {services.map(s => <option key={s.id} value={s.title}>{s.icon} {s.title}</option>)}
              </select>
              
              <input 
                type="text" 
                placeholder="Your Address in Lahore *" 
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                value={bookingData.address} 
                onChange={(e) => setBookingData({...bookingData, address: e.target.value})} 
                required 
              />
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Preferred Date *</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                    value={bookingData.date} 
                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})} 
                    min={new Date().toISOString().split('T')[0]} 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Preferred Time *</label>
                  <select 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                    value={bookingData.time} 
                    onChange={(e) => setBookingData({...bookingData, time: e.target.value})} 
                    required
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              
              <textarea 
                placeholder="Project details or special requests (Optional)" 
                rows={3} 
                className="w-full p-3 border-2 border-gray-200 rounded-lg resize-none focus:border-amber-800 focus:outline-none transition" 
                value={bookingData.description} 
                onChange={(e) => setBookingData({...bookingData, description: e.target.value})} 
              />
              
              <button 
                type="submit" 
                disabled={submitting} 
                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <span className="animate-spin">⏳</span> Confirming...
                  </>
                ) : (
                  <>
                    <span>✅</span> Confirm Booking
                  </>
                )}
              </button>
              <p className="text-xs text-gray-500 text-center">100% Free • No obligation • We'll confirm via WhatsApp</p>
            </form>
          </div>
        </div>
      )}

      {/* Lead Quote Modal */}
      {activeForm === 'lead' && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b flex justify-between items-center bg-gradient-to-r from-amber-900 to-amber-700 text-white rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold">Get Your Free Quote</h2>
                <p className="text-sm text-amber-100">Fill in your details and we'll send you a detailed estimate</p>
              </div>
              <button onClick={() => {setActiveForm(null); resetForm();}} className="text-3xl hover:bg-white hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center transition">&times;</button>
            </div>
            <form onSubmit={submitLead} className="p-6 space-y-5">
              {/* Progress Bar */}
              <div className="flex mb-6">
                {[1, 2].map(step => (
                  <div key={step} className="flex-1 mx-1">
                    <div className={`h-2 rounded-full transition-all ${formStep >= step ? 'bg-amber-800' : 'bg-gray-200'}`} />
                    <p className={`text-xs mt-1 font-semibold ${formStep >= step ? 'text-amber-800' : 'text-gray-400'}`}>
                      {step === 1 ? 'Contact Info' : 'Project Details'}
                    </p>
                  </div>
                ))}
              </div>
              
              {formStep === 1 && (
                <>
                  <h3 className="font-bold text-xl mb-4 text-gray-900">Step 1: Your Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Full Name *" 
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                      value={leadData.name} 
                      onChange={(e) => setLeadData({...leadData, name: e.target.value})} 
                      required 
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number *" 
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                      value={leadData.phone} 
                      onChange={(e) => setLeadData({...leadData, phone: e.target.value})} 
                      required 
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address (Optional)" 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                    value={leadData.email} 
                    onChange={(e) => setLeadData({...leadData, email: e.target.value})} 
                  />
                  <input 
                    type="text" 
                    placeholder="Your Address in Lahore *" 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-amber-800 focus:outline-none transition" 
                    value={leadData.address} 
                    onChange={(e) => setLeadData({...leadData, address: e.target.value})} 
                    required 
                  />
                  <button 
                    type="button" 
                    onClick={() => setFormStep(2)} 
                    className="w-full bg-amber-800 text-white py-4 rounded-lg font-bold hover:bg-amber-900 transition shadow-md flex items-center justify-center gap-2"
                  >
                    Next Step <span>→</span>
                  </button>
                </>
              )}
              
              {formStep === 2 && (
                <>
                  <h3 className="font-bold text-xl mb-4 text-gray-900">Step 2: Project Details</h3>
                  <select 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg mb-4 focus:border-amber-800 focus:outline-none transition" 
                    value={leadData.service} 
                    onChange={(e) => setLeadData({...leadData, service: e.target.value})} 
                    required
                  >
                    <option value="">Select Service Required *</option>
                    {services.map(s => (
                      <option key={s.id} value={s.title}>
                        {s.icon} {s.title} - {s.priceRange}
                      </option>
                    ))}
                  </select>
                  <textarea 
                    placeholder="Describe your project requirements, measurements, preferred materials, etc. (Optional but helps us provide accurate quote)" 
                    rows={5} 
                    className="w-full p-3 border-2 border-gray-200 rounded-lg mb-4 resize-none focus:border-amber-800 focus:outline-none transition" 
                    value={leadData.description} 
                    onChange={(e) => setLeadData({...leadData, description: e.target.value})} 
                  />
                  <div className="flex gap-4">
                    <button 
                      type="button" 
                      onClick={() => setFormStep(1)} 
                      className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-bold hover:bg-gray-300 transition"
                    >
                      ← Back
                    </button>
                    <button 
                      type="submit" 
                      disabled={submitting} 
                      className="flex-1 bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <span className="animate-spin">⏳</span> Sending...
                        </>
                      ) : (
                        <>
                          <span>📱</span> Send via WhatsApp
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2">We'll send you a detailed quote within 2 hours</p>
                </>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Gallery Modal */}
      {activeGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setActiveGallery(null)}>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button 
                onClick={() => setActiveGallery(null)} 
                className="absolute -top-12 right-0 text-white text-4xl hover:text-amber-400 transition"
              >
                ×
              </button>
              <img 
                src={activeGallery.image} 
                alt={activeGallery.title}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="bg-white p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold mb-2">{activeGallery.title}</h3>
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <span>📍</span> {activeGallery.location}
                </p>
                <p className="text-gray-700 mb-4">{activeGallery.description}</p>
                <button 
                  onClick={() => {
                    setLeadData({...leadData, service: activeGallery.service});
                    setActiveGallery(null);
                    setActiveForm('lead');
                  }}
                  className="bg-amber-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-900 transition"
                >
                  Get Similar Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <button 
          onClick={() => setActiveForm('booking')} 
          className="bg-amber-800 text-white px-5 py-4 rounded-full shadow-2xl hover:bg-amber-900 flex items-center gap-2 font-bold transition-all hover:scale-105 group"
        >
          <span className="text-xl">📅</span>
          <span className="hidden md:inline">Book Visit</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 animate-pulse">Free</span>
        </button>
        <a 
          href="https://wa.me/923054146737" 
          target="_blank" 
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 text-center transition-all hover:scale-105 flex items-center justify-center"
        >
          <span className="text-2xl">💬</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🪚</span>
              <div>
                <h3 className="text-xl font-bold text-white">MasterWood</h3>
                <p className="text-xs text-amber-500">Crafting Excellence Since 2014</p>
              </div>
            </div>
            <p className="mb-4">Premium carpentry services across Lahore. From custom kitchens to elegant wardrobes.</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-800 rounded-full flex items-center justify-center transition">f</a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-800 rounded-full flex items-center justify-center transition">in</a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-800 rounded-full flex items-center justify-center transition">ig</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-500 transition">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-amber-500 transition">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-amber-500 transition">Reviews</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Popular Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-500 transition">Kitchen Renovation</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition">Custom Wardrobes</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition">Wall Paneling</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition">Door Installation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:03054146737" className="hover:text-amber-500 transition">0305-4146737</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>DHA Phase 6, Lahore</span>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span>
                <span>Mon-Sat: 9AM-8PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2025 MasterWood Lahore. All rights reserved.</p>
          <p className="text-sm">Made with ❤️ for quality craftsmanship</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
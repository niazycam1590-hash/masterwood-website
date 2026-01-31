// pages/index.js - Modern Carpentry Website
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [activeForm, setActiveForm] = useState(null);
  const [formStep, setFormStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  
  const [leadData, setLeadData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    budget: '',
    timeline: '',
    urgency: 'normal',
    description: ''
  });

  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    address: '',
    notes: ''
  });

  const [calculator, setCalculator] = useState({
    service: '',
    area: '',
    quality: 'standard',
    estimate: null
  });

  const services = [
    { id: 'cabinets', title: "Custom Cabinet Making", price: 2500, unit: "sq ft" },
    { id: 'wardrobe', title: "Wardrobe & Installation", price: 8000, unit: "per ft" },
    { id: 'door', title: "Door Installation", price: 15000, unit: "per door" },
    { id: 'polishing', title: "Furniture Polishing", price: 150, unit: "per sq ft" },
    { id: 'molding', title: "Custom Wall Molding", price: 350, unit: "per ft" },
    { id: 'kitchen', title: "Kitchen Renovation", price: 150000, unit: "project" },
    { id: 'racks', title: "Custom Storage Racks", price: 5000, unit: "per unit" },
    { id: 'bathroom', title: "Bathroom Renovation", price: 80000, unit: "project" },
    { id: 'flooring', title: "Wooden Flooring", price: 200, unit: "per sq ft" },
    { id: 'media', title: "Media Wall Design", price: 25000, unit: "starting" },
    { id: 'paneling', title: "Wall Panelling", price: 400, unit: "per sq ft" },
    { id: 'lock', title: "Door Lock Installation", price: 2000, unit: "per lock" },
    { id: 'other', title: "Other Services", price: 0, unit: "custom" }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "02:00 PM", "03:00 PM", 
    "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  const portfolio = [
    { id: 1, title: "Modern DHA Kitchen", category: "Kitchen Renovation", location: "DHA Phase 5, Lahore", description: "Complete modular kitchen with Italian laminate finish.", details: "45 days | Rs. 450,000" },
    { id: 2, title: "Walk-in Wardrobe", category: "Wardrobe & Installation", location: "Bahria Town, Lahore", description: "Floor-to-ceiling wardrobes with sliding mirrors.", details: "18 days | Rs. 320,000" },
    { id: 3, title: "Media Wall Design", category: "Media Wall", location: "Gulberg, Lahore", description: "TV unit with hidden LED lighting.", details: "10 days | Rs. 85,000" },
    { id: 4, title: "Hardwood Flooring", category: "Wooden Flooring", location: "Model Town, Lahore", description: "German-engineered oak flooring installation.", details: "7 days | Rs. 280,000" },
    { id: 5, title: "Custom Cabinets", category: "Custom Cabinets", location: "Johar Town, Lahore", description: "Modular kitchen cabinets with soft-close drawers.", details: "21 days | Rs. 195,000" },
    { id: 6, title: "Bathroom Vanity", category: "Bathroom Renovation", location: "Cantt, Lahore", description: "Waterproof vanity with mirror storage.", details: "14 days | Rs. 120,000" }
  ];

  const testimonials = [
    { id: 1, name: "Ahmed Hassan", location: "DHA Phase 6", rating: 5, text: "Exceptional work on our kitchen! Professional and punctual.", project: "Kitchen Renovation" },
    { id: 2, name: "Sara Malik", location: "Bahria Town", rating: 5, text: "Beautiful wardrobes exactly as we envisioned.", project: "Wardrobe Installation" },
    { id: 3, name: "Usman Sheikh", location: "Gulberg", rating: 5, text: "Media wall transformed our living room completely.", project: "Media Wall Design" },
    { id: 4, name: "Fatima Zahra", location: "Model Town", rating: 5, text: "Great craftsmanship on our wooden flooring.", project: "Wooden Flooring" }
  ];

  const calculateEstimate = () => {
    const service = services.find(s => s.id === calculator.service);
    if (!service || !calculator.area) return;
    let basePrice = service.price;
    if (service.unit === 'sq ft' || service.unit === 'per ft' || service.unit === 'per sq ft') {
      basePrice = basePrice * parseInt(calculator.area);
    }
    const multipliers = { standard: 1, premium: 1.4, luxury: 2 };
    const estimate = basePrice * multipliers[calculator.quality];
    setCalculator({...calculator, estimate});
  };

  const submitLead = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const message = `*New Lead - MasterWood*%0A%0AName: ${leadData.name}%0APhone: ${leadData.phone}%0AEmail: ${leadData.email || 'N/A'}%0AAddress: ${leadData.address}%0AService: ${leadData.service}%0ABudget: ${leadData.budget}%0ATimeline: ${leadData.timeline}%0AUrgency: ${leadData.urgency}%0ADetails: ${leadData.description}`;
    window.open(`https://wa.me/923054146737?text=${message}`, '_blank');
    alert('Quote request sent! We will contact you within 2 hours.');
    setActiveForm(null);
    setFormStep(1);
    setSubmitting(false);
  };

  const submitBooking = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const message = `*Site Visit Booking - MasterWood*%0A%0AName: ${bookingData.name}%0APhone: ${bookingData.phone}%0ADate: ${bookingData.date}%0ATime: ${bookingData.time}%0AService: ${bookingData.service}%0AAddress: ${bookingData.address}%0ANotes: ${bookingData.notes || 'N/A'}`;
    window.open(`https://wa.me/923054146737?text=${message}`, '_blank');
    alert('Booking confirmed! We will contact you shortly.');
    setActiveForm(null);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>MasterWood Lahore | Custom Carpentry & Renovation</title>
        <meta name="description" content="Professional carpentry services in Lahore. Custom cabinets, wardrobes, kitchen renovation, wooden flooring. Free quotes." />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-amber-800">🪚 MasterWood Lahore</div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-700 hover:text-amber-800">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-amber-800">Portfolio</a>
              <a href="#testimonials" className="text-gray-700 hover:text-amber-800">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-800">Contact</a>
            </div>
            <button onClick={() => setActiveForm('lead')} className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-900">Get Quote</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Lahore's Trusted Carpentry Experts</h1>
              <p className="text-xl mb-8 text-amber-100">Custom kitchens, wardrobes & renovations. 500+ projects completed. Free site visits.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setActiveForm('booking')} className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-center hover:bg-gray-100">📅 Book Free Site Visit</button>
                <button onClick={() => setActiveForm('lead')} className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-white hover:text-amber-900">💬 Get Quick Quote</button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm">
                <span className="flex items-center gap-2">⭐ 4.9/5 (127 reviews)</span>
                <span className="flex items-center gap-2">🏆 10+ Years</span>
                <span className="flex items-center gap-2">🛡️ 10-Year Warranty</span>
              </div>
            </div>
            
            {/* Calculator */}
            <div className="bg-white rounded-2xl p-6 text-gray-800 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-amber-900">⚡ Instant Estimate</h3>
              <select className="w-full mb-3 p-3 border rounded-lg" value={calculator.service} onChange={(e) => setCalculator({...calculator, service: e.target.value, estimate: null})}>
                <option value="">Select Service</option>
                {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
              </select>
              <input type="number" placeholder="Area (sq ft) or Units" className="w-full mb-3 p-3 border rounded-lg" value={calculator.area} onChange={(e) => setCalculator({...calculator, area: e.target.value, estimate: null})} />
              <select className="w-full mb-4 p-3 border rounded-lg" value={calculator.quality} onChange={(e) => setCalculator({...calculator, quality: e.target.value, estimate: null})}>
                <option value="standard">Standard Quality</option>
                <option value="premium">Premium Quality (+40%)</option>
                <option value="luxury">Luxury/Imported (+100%)</option>
              </select>
              <button onClick={calculateEstimate} className="w-full bg-amber-800 text-white py-3 rounded-lg font-bold hover:bg-amber-900">Calculate Estimate</button>
              {calculator.estimate && (
                <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-gray-600">Estimated Range:</p>
                  <p className="text-2xl font-bold text-amber-900">Rs. {(calculator.estimate * 0.9).toLocaleString()} - {calculator.estimate.toLocaleString()}</p>
                  <button onClick={() => setActiveForm('lead')} className="w-full mt-3 bg-green-600 text-white py-2 rounded text-sm hover:bg-green-700">Get Exact Quote</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Complete carpentry solutions for your home</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-l-4 border-amber-800">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">Starting from Rs. {service.price.toLocaleString()}{service.unit !== 'project' && service.unit !== 'starting' && service.unit !== 'custom' ? '/' + service.unit : ''}</p>
              <button onClick={() => {setLeadData({...leadData, service: service.title}); setActiveForm('lead');}} className="text-amber-800 font-semibold hover:underline">Get Quote →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
            <p className="text-gray-600">Projects completed across Lahore</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-48 bg-amber-200 flex items-center justify-center text-6xl">🪚</div>
                <div className="p-6">
                  <div className="text-sm text-amber-800 font-bold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">📍 {project.location}</p>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <div className="text-sm text-amber-800 font-semibold">{project.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-amber-200">Trusted by 500+ homeowners across Lahore</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((review) => (
              <div key={review.id} className="bg-amber-800 rounded-xl p-6 hover:bg-amber-700 transition">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-400"}>★</span>)}
                </div>
                <p className="text-amber-100 mb-4 italic">"{review.text}"</p>
                <div className="border-t border-amber-600 pt-4">
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-amber-200">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p className="text-gray-400 mb-8">Get a free consultation and detailed quote.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4"><span className="text-2xl">📞</span><div><p className="font-bold">0305-4146737</p><p className="text-sm text-gray-400">Mon-Sat: 9AM - 8PM</p></div></div>
              <div className="flex items-center gap-4"><span className="text-2xl">📍</span><div><p className="font-bold">DHA Phase 6, Lahore</p><p className="text-sm text-gray-400">Site visits across all Lahore</p></div></div>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setActiveForm('booking')} className="bg-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700">Book Visit</button>
              <button onClick={() => setActiveForm('lead')} className="border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-bold hover:bg-amber-600 hover:text-white">Get Quote</button>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Quick Message</h3>
            <form onSubmit={submitLead} className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white" onChange={(e) => setLeadData({...leadData, name: e.target.value})} required />
              <input type="tel" placeholder="Phone" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white" onChange={(e) => setLeadData({...leadData, phone: e.target.value})} required />
              <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white" onChange={(e) => setLeadData({...leadData, service: e.target.value})}>
                <option value="">Select Service</option>
                {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
              <textarea placeholder="Your message..." rows={3} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white" onChange={(e) => setLeadData({...leadData, description: e.target.value})} />
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700">Send via WhatsApp →</button>
            </form>
          </div>
        </div>
      </section>

      {/* Lead Form Modal */}
      {activeForm === 'lead' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-amber-900">Get Your Free Quote</h2>
              <button onClick={() => setActiveForm(null)} className="text-2xl">&times;</button>
            </div>
            <form onSubmit={submitLead} className="p-6 space-y-4">
              <div className="flex mb-6">
                {[1, 2, 3].map(step => <div key={step} className={`flex-1 h-2 mx-1 rounded ${formStep >= step ? 'bg-amber-800' : 'bg-gray-200'}`} />)}
              </div>
              {formStep === 1 && (
                <>
                  <h3 className="font-bold text-lg mb-4">Step 1: Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name *" className="w-full p-3 border rounded-lg" value={leadData.name} onChange={(e) => setLeadData({...leadData, name: e.target.value})} required />
                    <input type="tel" placeholder="Phone *" className="w-full p-3 border rounded-lg" value={leadData.phone} onChange={(e) => setLeadData({...leadData, phone: e.target.value})} required />
                  </div>
                  <input type="email" placeholder="Email (optional)" className="w-full p-3 border rounded-lg" value={leadData.email} onChange={(e) => setLeadData({...leadData, email: e.target.value})} />
                  <input type="text" placeholder="Address in Lahore *" className="w-full p-3 border rounded-lg" value={leadData.address} onChange={(e) => setLeadData({...leadData, address: e.target.value})} required />
                  <button type="button" onClick={() => setFormStep(2)} className="w-full bg-amber-800 text-white py-3 rounded-lg font-bold">Next →</button>
                </>
              )}
              {formStep === 2 && (
                <>
                  <h3 className="font-bold text-lg mb-4">Step 2: Project Details</h3>
                  <select className="w-full p-3 border rounded-lg mb-4" value={leadData.service} onChange={(e) => setLeadData({...leadData, service: e.target.value})} required>
                    <option value="">Select Service *</option>
                    {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                  <select className="w-full p-3 border rounded-lg mb-4" value={leadData.budget} onChange={(e) => setLeadData({...leadData, budget: e.target.value})}>
                    <option value="">Budget Range</option>
                    <option value="50k-100k">Rs. 50k - 100k</option>
                    <option value="100k-250k">Rs. 100k - 250k</option>
                    <option value="250k-500k">Rs. 250k - 500k</option>
                    <option value="500k+">Rs. 500k+</option>
                  </select>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setFormStep(1)} className="flex-1 bg-gray-200 py-3 rounded-lg">← Back</button>
                    <button type="button" onClick={() => setFormStep(3)} className="flex-1 bg-amber-800 text-white py-3 rounded-lg font-bold">Next →</button>
                  </div>
                </>
              )}
              {formStep === 3 && (
                <>
                  <h3 className="font-bold text-lg mb-4">Step 3: Tell Us More</h3>
                  <textarea placeholder="Project details..." rows={4} className="w-full p-3 border rounded-lg mb-4" value={leadData.description} onChange={(e) => setLeadData({...leadData, description: e.target.value})} />
                  <div className="bg-amber-50 p-4 rounded-lg mb-4">
                    <p className="text-sm">✅ We will contact you within <strong>2 hours</strong></p>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setFormStep(2)} className="flex-1 bg-gray-200 py-3 rounded-lg">← Back</button>
                    <button type="submit" disabled={submitting} className="flex-1 bg-green-600 text-white py-3 rounded-lg font-bold">{submitting ? 'Sending...' : '📱 Send via WhatsApp'}</button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {activeForm === 'booking' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-amber-900">Book Site Visit</h2>
              <button onClick={() => setActiveForm(null)} className="text-2xl">&times;</button>
            </div>
            <form onSubmit={submitBooking} className="p-6 space-y-4">
              <input type="text" placeholder="Name *" className="w-full p-3 border rounded-lg" value={bookingData.name} onChange={(e) => setBookingData({...bookingData, name: e.target.value})} required />
              <input type="tel" placeholder="Phone *" className="w-full p-3 border rounded-lg" value={bookingData.phone} onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} required />
              <input type="text" placeholder="Address *" className="w-full p-3 border rounded-lg" value={bookingData.address} onChange={(e) => setBookingData({...bookingData, address: e.target.value})} required />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full p-3 border rounded-lg" value={bookingData.date} onChange={(e) => setBookingData({...bookingData, date: e.target.value})} min={new Date().toISOString().split('T')[0]} required />
                <select className="w-full p-3 border rounded-lg" value={bookingData.time} onChange={(e) => setBookingData({...bookingData, time: e.target.value})} required>
                  <option value="">Time</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <button type="submit" disabled={submitting} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">{submitting ? 'Confirming...' : '✅ Confirm Booking'}</button>
            </form>
          </div>
        </div>
      )}

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <button onClick={() => setActiveForm('booking')} className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 flex items-center gap-2"><span>📅</span><span className="hidden md:inline font-bold">Book Visit</span></button>
        <a href="https://wa.me/923054146737" target="_blank" className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 text-center">💬</a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div><h3 className="text-xl font-bold text-white mb-4">MasterWood</h3><p>Premium carpentry services in Lahore</p></div>
          <div><h4 className="font-bold text-white mb-4">Services</h4><ul className="space-y-2"><li>Custom Cabinets</li><li>Wardrobes</li><li>Kitchen Renovation</li><li>Bathroom Renovation</li></ul></div>
          <div><h4 className="font-bold text-white mb-4">Areas</h4><ul className="space-y-2"><li>DHA Lahore</li><li>Bahria Town</li><li>Gulberg</li><li>Model Town</li></ul></div>
          <div><h4 className="font-bold text-white mb-4">Contact</h4><p>📞 0305-4146737</p><p>📍 DHA Phase 6, Lahore</p></div>
        </div>
      </footer>
    </div>
  );
}
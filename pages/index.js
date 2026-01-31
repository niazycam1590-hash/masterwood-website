// pages/index.js - MasterWood Website Updated
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
    { id: 'cabinets', title: "Custom Cabinet Making", desc: "Modular kitchen & storage cabinets tailored to your space" },
    { id: 'wardrobe', title: "Wardrobe & Installation", desc: "Built-in & walk-in wardrobes with smart organization" },
    { id: 'door', title: "Door Installation", desc: "Wooden doors, frames & hardware installation" },
    { id: 'polishing', title: "Furniture Polishing", desc: "Restore & protect wood surfaces with premium finishes" },
    { id: 'molding', title: "Custom Wall Molding", desc: "Crown molding, trim work & decorative elements" },
    { id: 'kitchen', title: "Kitchen Renovation", desc: "Complete kitchen transformation & remodeling" },
    { id: 'racks', title: "Custom Storage Racks", desc: "Shelving systems & organization solutions" },
    { id: 'bathroom', title: "Bathroom Renovation", desc: "Vanities, storage & bathroom woodwork" },
    { id: 'flooring', title: "Wooden Flooring", desc: "Hardwood & engineered flooring installation" },
    { id: 'media', title: "Media Wall Design", desc: "TV units, feature walls & entertainment centers" },
    { id: 'paneling', title: "Wall Panelling", desc: "3D panels, wainscoting & decorative walls" },
    { id: 'lock', title: "Door Lock Installation", desc: "Smart & traditional lock installation" },
    { id: 'other', title: "Other Services", desc: "Custom carpentry solutions for unique needs" }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "02:00 PM", "03:00 PM", 
    "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  // WhatsApp Calculator Submit
  const submitCalculator = (e) => {
    e.preventDefault();
    const service = services.find(s => s.id === calcData.service);
    const message = `*Quote Request - MasterWood*%0A%0AService: ${service?.title || 'General Inquiry'}%0AArea/Details: ${calcData.area}%0ADescription: ${calcData.description || 'N/A'}%0A%0APlease send me a quote.`;
    window.open(`https://wa.me/923054146737?text=${message}`, '_blank');
  };

  const submitLead = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const message = `*New Lead - MasterWood*%0A%0AName: ${leadData.name}%0APhone: ${leadData.phone}%0AEmail: ${leadData.email || 'N/A'}%0AAddress: ${leadData.address}%0AService: ${leadData.service}%0ADescription: ${leadData.description || 'N/A'}`;
    window.open(`https://wa.me/923054146737?text=${message}`, '_blank');
    alert('Quote request sent! We will contact you soon.');
    setActiveForm(null);
    setSubmitting(false);
  };

  const submitBooking = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const message = `*Site Visit Booking - MasterWood*%0A%0AName: ${bookingData.name}%0APhone: ${bookingData.phone}%0AService: ${bookingData.service}%0ADate: ${bookingData.date}%0ATime: ${bookingData.time}%0AAddress: ${bookingData.address}%0ADescription: ${bookingData.description || 'N/A'}`;
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
                <span className="flex items-center gap-2">🏆 10+ Years Experience</span>
              </div>
            </div>
            
            {/* Calculator - Now Goes to WhatsApp */}
            <div className="bg-white rounded-2xl p-6 text-gray-800 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-amber-900">⚡ Get Free Quote</h3>
              <form onSubmit={submitCalculator}>
                <select className="w-full mb-3 p-3 border rounded-lg" value={calcData.service} onChange={(e) => setCalcData({...calcData, service: e.target.value})} required>
                  <option value="">Select Service *</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
                <input type="text" placeholder="Area size or details *" className="w-full mb-3 p-3 border rounded-lg" value={calcData.area} onChange={(e) => setCalcData({...calcData, area: e.target.value})} required />
                <textarea placeholder="Description (Optional)" rows={2} className="w-full mb-4 p-3 border rounded-lg resize-none" value={calcData.description} onChange={(e) => setCalcData({...calcData, description: e.target.value})} />
                <button type="submit" className="w-full bg-amber-800 text-white py-3 rounded-lg font-bold hover:bg-amber-900">Send Request via WhatsApp</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services - No Prices */}
      <section id="services" className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Professional carpentry solutions for your home</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-l-4 border-amber-800">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
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
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-48 bg-amber-200 flex items-center justify-center text-6xl">🪚</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                  <p className="text-gray-600 text-sm mb-3">📍 Lahore</p>
                  <button className="text-amber-800 font-semibold text-sm hover:underline">View Details →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact with Google Maps */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p className="text-gray-400 mb-8">Get a free consultation and detailed quote.</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-bold">0305-4146737</p>
                  <p className="text-sm text-gray-400">Mon-Sat: 9AM - 8PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold">DHA Phase 6, Lahore</p>
                  <p className="text-sm text-gray-400">Site visits across all Lahore</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-bold">info@masterwood.pk</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl overflow-hidden h-64 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0!2d74.35!3d31.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918c1234567890%3A0x1234567890abcdef!2sDHA%20Phase%206%2C%20Lahore!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <p className="text-xs text-gray-400 mt-2">📍 Find us at DHA Phase 6, Lahore</p>
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

      {/* Booking Modal - Now with Service & Description */}
      {activeForm === 'booking' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-amber-900">Book Site Visit</h2>
              <button onClick={() => setActiveForm(null)} className="text-2xl">&times;</button>
            </div>
            <form onSubmit={submitBooking} className="p-6 space-y-4">
              <input type="text" placeholder="Name *" className="w-full p-3 border rounded-lg" value={bookingData.name} onChange={(e) => setBookingData({...bookingData, name: e.target.value})} required />
              <input type="tel" placeholder="Phone *" className="w-full p-3 border rounded-lg" value={bookingData.phone} onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} required />
              
              {/* Service Selection */}
              <select className="w-full p-3 border rounded-lg" value={bookingData.service} onChange={(e) => setBookingData({...bookingData, service: e.target.value})} required>
                <option value="">Select Service *</option>
                {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
              
              <input type="text" placeholder="Address *" className="w-full p-3 border rounded-lg" value={bookingData.address} onChange={(e) => setBookingData({...bookingData, address: e.target.value})} required />
              
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full p-3 border rounded-lg" value={bookingData.date} onChange={(e) => setBookingData({...bookingData, date: e.target.value})} min={new Date().toISOString().split('T')[0]} required />
                <select className="w-full p-3 border rounded-lg" value={bookingData.time} onChange={(e) => setBookingData({...bookingData, time: e.target.value})} required>
                  <option value="">Time</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              
              {/* Description */}
              <textarea placeholder="Description (Optional)" rows={3} className="w-full p-3 border rounded-lg resize-none" value={bookingData.description} onChange={(e) => setBookingData({...bookingData, description: e.target.value})} />
              
              <button type="submit" disabled={submitting} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">{submitting ? 'Confirming...' : '✅ Confirm Booking'}</button>
            </form>
          </div>
        </div>
      )}

      {/* Lead Modal */}
      {activeForm === 'lead' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-amber-900">Get Your Free Quote</h2>
              <button onClick={() => setActiveForm(null)} className="text-2xl">&times;</button>
            </div>
            <form onSubmit={submitLead} className="p-6 space-y-4">
              <div className="flex mb-6">
                {[1, 2].map(step => <div key={step} className={`flex-1 h-2 mx-1 rounded ${formStep >= step ? 'bg-amber-800' : 'bg-gray-200'}`} />)}
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
                  <textarea placeholder="Description (Optional)" rows={4} className="w-full p-3 border rounded-lg mb-4 resize-none" value={leadData.description} onChange={(e) => setLeadData({...leadData, description: e.target.value})} />
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setFormStep(1)} className="flex-1 bg-gray-200 py-3 rounded-lg">← Back</button>
                    <button type="submit" disabled={submitting} className="flex-1 bg-green-600 text-white py-3 rounded-lg font-bold">{submitting ? 'Sending...' : '📱 Send via WhatsApp'}</button>
                  </div>
                </>
              )}
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
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MasterWood</h3>
            <p>Premium carpentry services in Lahore</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Kitchen Renovation</li>
              <li>Custom Cabinets</li>
              <li>Wardrobes</li>
              <li>Door Installation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <p>📞 0305-4146737</p>
            <p>📍 DHA Phase 6, Lahore</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
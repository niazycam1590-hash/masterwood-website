// pages/index.js - Minimalist Carpentry Website
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
    description: ''
  });

  const services = [
    { id: 'cabinets', title: "Custom Cabinets", price: "2,500", unit: "per sq ft", desc: "Modular kitchen & storage cabinets" },
    { id: 'wardrobe', title: "Wardrobe & Installation", price: "8,000", unit: "per ft", desc: "Built-in & walk-in wardrobes" },
    { id: 'door', title: "Door Installation", price: "15,000", unit: "per door", desc: "Wooden doors & frames" },
    { id: 'polishing', title: "Furniture Polishing", price: "150", unit: "per sq ft", desc: "Restore & protect wood surfaces" },
    { id: 'molding', title: "Custom Wall Molding", price: "350", unit: "per ft", desc: "Crown & decorative molding" },
    { id: 'kitchen', title: "Kitchen Renovation", price: "150,000", unit: "starting", desc: "Complete kitchen makeover" },
    { id: 'racks', title: "Custom Storage Racks", price: "5,000", unit: "per unit", desc: "Shelving & organization systems" },
    { id: 'bathroom', title: "Bathroom Renovation", price: "80,000", unit: "starting", desc: "Vanities & bathroom storage" },
    { id: 'flooring', title: "Wooden Flooring", price: "200", unit: "per sq ft", desc: "Hardwood & engineered flooring" },
    { id: 'media', title: "Media Wall Design", price: "25,000", unit: "starting", desc: "TV units & feature walls" },
    { id: 'paneling', title: "Wall Panelling", price: "400", unit: "per sq ft", desc: "3D & decorative wall panels" },
    { id: 'lock', title: "Door Lock Installation", price: "2,000", unit: "per lock", desc: "Smart & traditional locks" },
    { id: 'other', title: "Other Services", price: "Custom", unit: "quote", desc: "Tell us your requirements" }
  ];

  const portfolio = [
    { id: 1, title: "Modern Kitchen", service: "Kitchen Renovation", location: "DHA Phase 5" },
    { id: 2, title: "Walk-in Wardrobe", service: "Wardrobe Installation", location: "Bahria Town" },
    { id: 3, title: "Media Wall", service: "Media Wall Design", location: "Gulberg" },
    { id: 4, title: "Hardwood Floor", service: "Wooden Flooring", location: "Model Town" },
    { id: 5, title: "Custom Cabinets", service: "Custom Cabinets", location: "Johar Town" },
    { id: 6, title: "Bathroom Vanity", service: "Bathroom Renovation", location: "Cantt" }
  ];

  const submitLead = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const message = `*New Lead*%0A%0AName: ${leadData.name}%0APhone: ${leadData.phone}%0AService: ${leadData.service}%0AAddress: ${leadData.address}%0ADetails: ${leadData.description}`;
    window.open(`https://wa.me/923054146737?text=${message}`, '_blank');
    setSubmitting(false);
    setActiveForm(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>MasterWood | Custom Carpentry Lahore</title>
        <meta name="description" content="Professional carpentry services in Lahore. Custom cabinets, wardrobes, kitchen renovation, wooden flooring." />
      </Head>

      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-light tracking-tight">MasterWood</h1>
          <button onClick={() => setActiveForm('lead')} className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition">
            Get Quote
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Lahore's Trusted Carpenters</p>
        <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6">
          Custom woodwork<br />for your home
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-xl">
          Precision craftsmanship for kitchens, wardrobes, doors, and interiors. 
          Serving DHA, Bahria Town, and all Lahore.
        </p>
        <div className="flex gap-4">
          <button onClick={() => setActiveForm('booking')} className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition">
            Book Visit
          </button>
          <a href="#services" className="border border-gray-300 px-8 py-3 hover:border-black transition">
            View Services
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-light mb-12">Our Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 hover:bg-gray-50 transition group">
                <h4 className="text-lg font-medium mb-2">{service.title}</h4>
                <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Rs. {service.price} <span className="text-gray-400">/{service.unit}</span></span>
                  <button 
                    onClick={() => {setLeadData({...leadData, service: service.title}); setActiveForm('lead');}}
                    className="text-sm opacity-0 group-hover:opacity-100 transition underline"
                  >
                    Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-light mb-12">Recent Work</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolio.map((item) => (
            <div key={item.id} className="group">
              <div className="bg-gray-100 aspect-[4/3] mb-4 flex items-center justify-center text-gray-400">
                <span className="text-4xl">📷</span>
              </div>
              <p className="text-sm text-gray-500 mb-1">{item.service}</p>
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.location}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-12">Add your photos to replace placeholders</p>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-light mb-12">How We Work</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consult", desc: "Free site visit & measurements" },
              { step: "02", title: "Design", desc: "Custom plans & 3D renders" },
              { step: "03", title: "Build", desc: "Expert craftsmanship" },
              { step: "04", title: "Install", desc: "Perfect finish & cleanup" }
            ].map((item) => (
              <div key={item.step}>
                <span className="text-4xl font-light text-gray-200">{item.step}</span>
                <h4 className="text-lg font-medium mt-4 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-light mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">Ready to start your project? Get a free quote within 2 hours.</p>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Phone</span>
                <span>0300-1234567</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Email</span>
                <span>info@masterwood.pk</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Location</span>
                <span>DHA Phase 6, Lahore</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-500">Hours</span>
                <span>Mon-Sat: 9AM - 8PM</span>
              </div>
            </div>
          </div>

          <form onSubmit={submitLead} className="space-y-4">
            <input type="text" placeholder="Name" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black" onChange={(e) => setLeadData({...leadData, name: e.target.value})} required />
            <input type="tel" placeholder="Phone" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black" onChange={(e) => setLeadData({...leadData, phone: e.target.value})} required />
            <select className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black bg-white" onChange={(e) => setLeadData({...leadData, service: e.target.value})}>
              <option value="">Select Service</option>
              {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
            </select>
            <textarea placeholder="Project details" rows={3} className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-black resize-none" onChange={(e) => setLeadData({...leadData, description: e.target.value})} />
            <button type="submit" disabled={submitting} className="bg-black text-white px-8 py-3 w-full hover:bg-gray-800 transition">
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-sm text-gray-500">
          <span>© 2025 MasterWood</span>
          <span>Lahore, Pakistan</span>
        </div>
      </footer>

      {/* Modal */}
      {activeForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-light">Get Quote</h3>
              <button onClick={() => setActiveForm(null)} className="text-2xl">&times;</button>
            </div>
            <form onSubmit={submitLead} className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black" onChange={(e) => setLeadData({...leadData, name: e.target.value})} required />
              <input type="tel" placeholder="Phone" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black" onChange={(e) => setLeadData({...leadData, phone: e.target.value})} required />
              <input type="text" placeholder="Address" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black" onChange={(e) => setLeadData({...leadData, address: e.target.value})} required />
              <select className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black bg-white" onChange={(e) => setLeadData({...leadData, service: e.target.value})}>
                <option value="">Select Service</option>
                {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
              <textarea placeholder="Tell us about your project" rows={3} className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black resize-none" onChange={(e) => setLeadData({...leadData, description: e.target.value})} />
              <button type="submit" disabled={submitting} className="bg-black text-white px-8 py-3 w-full hover:bg-gray-800 transition">
                {submitting ? 'Sending...' : 'Send via WhatsApp'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
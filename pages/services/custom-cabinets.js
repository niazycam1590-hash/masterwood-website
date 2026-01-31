// pages/services/custom-cabinets.js
import Head from 'next/head';
import { useState } from 'react';

export default function CustomCabinets() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Custom Cabinets Inquiry*%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AAddress: ${formData.address}%0ADetails: ${formData.description || 'N/A'}`;
    window.open(`https://wa.me/923054146737?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Custom Cabinets Lahore | Kitchen & Wardrobe Cabinets</title>
        <meta name="description" content="Custom cabinet making in Lahore. Modular kitchen cabinets, wardrobes, storage solutions. Free measurements & quote." />
      </Head>

      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-amber-800">🪚 MasterWood</a>
          <a href="/" className="text-gray-600 hover:text-amber-800">← Back to Home</a>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Cabinets Lahore</h1>
          <p className="text-xl mb-8 text-amber-100">Bespoke cabinets for kitchen, wardrobe & storage. Premium marine plywood, soft-close hinges, lifetime durability.</p>
          <button onClick={() => setShowForm(true)} className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100">Get Free Measurements</button>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Cabinet Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">🍳</div>
            <h3 className="font-bold mb-2">Kitchen Cabinets</h3>
            <p className="text-gray-600">Modular designs with pull-out units</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">👔</div>
            <h3 className="font-bold mb-2">Wardrobes</h3>
            <p className="text-gray-600">Sliding doors, organizers, mirrors</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-bold mb-2">Storage Units</h3>
            <p className="text-gray-600">Custom racks, shelves & units</p>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-amber-900">Get Cabinet Quote</h3>
              <button onClick={() => setShowForm(false)} className="text-2xl">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <input type="tel" placeholder="Phone" className="w-full p-3 border rounded-lg" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              <input type="text" placeholder="Address" className="w-full p-3 border rounded-lg" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} required />
              <textarea placeholder="Cabinet requirements (dimensions, style, color)" rows={3} className="w-full p-3 border rounded-lg" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">Send via WhatsApp</button>
            </form>
          </div>
        </div>
      )}

      <section className="bg-amber-900 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Custom Cabinets?</h2>
        <button onClick={() => setShowForm(true)} className="bg-white text-amber-900 px-8 py-3 rounded-lg font-bold">Get Free Quote</button>
        <p className="mt-4 text-amber-200">📞 0305-4146737</p>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2025 MasterWood Lahore | Custom Cabinet Specialists</p>
      </footer>
    </div>
  );
}
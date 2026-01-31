// pages/services/kitchen-renovation.js
import Head from 'next/head';
import { useState } from 'react';

export default function KitchenRenovation() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Kitchen Renovation Inquiry*%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AAddress: ${formData.address}%0ADetails: ${formData.description || 'N/A'}`;
    window.open(`https://wa.me/923054146737?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Kitchen Renovation Lahore | Custom Kitchen Cabinets</title>
        <meta name="description" content="Expert kitchen renovation in DHA, Bahria Town, Lahore. Custom cabinets, modular kitchens, countertops. Free consultation." />
      </Head>

      {/* Header */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-amber-800">🪚 MasterWood</a>
          <a href="/" className="text-gray-600 hover:text-amber-800">← Back to Home</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kitchen Renovation Lahore</h1>
          <p className="text-xl mb-8 text-amber-100">Transform your kitchen with custom cabinets, modern designs & premium finishes. Serving DHA, Bahria Town & all Lahore.</p>
          <button onClick={() => setShowForm(true)} className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100">Get Free Quote</button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us for Kitchen Renovation?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold mb-2">Custom Design</h3>
            <p className="text-gray-600">Tailored to your space and style preferences</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="font-bold mb-2">Expert Installation</h3>
            <p className="text-gray-600">Professional team with 10+ years experience</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-bold mb-2">Quality Materials</h3>
            <p className="text-gray-600">Marine plywood, premium hardware & finishes</p>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-amber-900">Get Kitchen Quote</h3>
              <button onClick={() => setShowForm(false)} className="text-2xl">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <input type="tel" placeholder="Phone" className="w-full p-3 border rounded-lg" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              <input type="text" placeholder="Address" className="w-full p-3 border rounded-lg" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} required />
              <textarea placeholder="Kitchen details (size, style, requirements)" rows={3} className="w-full p-3 border rounded-lg" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
              <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">Send via WhatsApp</button>
            </form>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-amber-900 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready for Your Dream Kitchen?</h2>
        <button onClick={() => setShowForm(true)} className="bg-white text-amber-900 px-8 py-3 rounded-lg font-bold">Get Free Quote Now</button>
        <p className="mt-4 text-amber-200">📞 Call: 0305-4146737</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2025 MasterWood Lahore | Kitchen Renovation Specialists</p>
      </footer>
    </div>
  );
}
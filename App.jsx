import React, { useState, useEffect } from 'react';
import { 
  Building2, Plane, Calendar, Gift, ShoppingBag, Box, MapPin, CheckCircle, 
  Phone, Mail, MessageSquare, ArrowRight, Lock, LogOut, Search, Filter, 
  ChevronRight, Shield, Clock, Users, Star, Layers, Send, HelpCircle
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '', company: '', designation: '', phone: '', email: '',
    destination: '', dates: '', groupSize: '', budget: '', notes: ''
  });
  const [requirementId, setRequirementId] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = 'NAU-2026-' + Math.floor(100000 + Math.random() * 900000);
    setRequirementId(generatedId);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-[#17212B]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 bg-[#0B5F5B] rounded flex items-center justify-center font-bold text-white text-xl">N</div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#0B5F5B] block leading-none">NAURA</span>
              <span className="text-[10px] tracking-widest text-gray-500 font-semibold uppercase">Events & Travel Co.</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {['mice', 'travel', 'events', 'gifting', 'merchandise', 'rentals', 'destinations'].map((item) => (
              <button 
                key={item} 
                onClick={() => setActiveTab(item)}
                className={`capitalize transition-colors hover:text-[#0B5F5B] ${activeTab === item ? 'text-[#0B5F5B] font-bold border-b-2 border-[#0B5F5B] pb-1' : 'text-gray-600'}`}
              >
                {item === 'travel' ? 'Corporate Travel' : item}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/919999513212" 
              target="_blank" 
              rel="noreferrer" 
              className="hidden sm:inline-flex items-center text-sm font-semibold text-[#0B5F5B] border border-[#0B5F5B] px-4 py-2 rounded-lg hover:bg-teal-50"
            >
              <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp
            </a>
            <button 
              onClick={() => setActiveTab('plan')}
              className="bg-[#0B5F5B] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow hover:bg-[#084B48] transition"
            >
              PLAN YOUR REQUIREMENT
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <main className="flex-1">
          <section className="bg-gradient-to-b from-[#EAF5F3] to-[#F8FAF9] py-20 px-4">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <span className="inline-block bg-[#F5EEDC] text-[#C8A45D] font-bold text-xs uppercase px-3 py-1 rounded-full tracking-wider border border-[#C8A45D]/20">
                ONE REQUIREMENT. MULTIPLE OPTIONS. ONE TEAM.
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#17212B] leading-tight">
                Corporate Travel. MICE. Events. Gifting. Merchandise.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                One team to plan, source and execute your corporate requirements — from travel and offsites to events, gifting and branded merchandise.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setActiveTab('plan')}
                  className="bg-[#0B5F5B] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#084B48] transition flex items-center text-lg"
                >
                  PLAN YOUR REQUIREMENT <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <a 
                  href="tel:9999513212" 
                  className="bg-white text-[#17212B] font-bold px-6 py-4 rounded-xl border border-gray-300 hover:bg-gray-50 transition flex items-center"
                >
                  <Phone className="mr-2 w-5 h-5 text-[#0B5F5B]" /> CALL: 9999513212
                </a>
              </div>
            </div>
          </section>

          {/* Core Services Grid */}
          <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Business Solutions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'MICE & OFFSITES', desc: 'Corporate offsites, incentive travel, conferences, meetings and group travel.', tab: 'mice', icon: Building2 },
                { title: 'CORPORATE TRAVEL', desc: 'Hotels, flights, transport, itineraries and business travel coordination.', tab: 'travel', icon: Plane },
                { title: 'CORPORATE EVENTS', desc: 'Conferences, launches, celebrations, brand activations and event execution.', tab: 'events', icon: Calendar },
                { title: 'CORPORATE GIFTING', desc: 'Employee gifting, client gifting, festive gifting and curated corporate hampers.', tab: 'gifting', icon: Gift },
                { title: 'BRANDED MERCHANDISE', desc: 'Custom merchandise, employee kits, event merchandise and branded products.', tab: 'merchandise', icon: ShoppingBag },
                { title: 'EVENT RENTALS', desc: 'Furniture, AV, branding structures, décor, exhibition and event infrastructure.', tab: 'rentals', icon: Box },
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                  <service.icon className="w-10 h-10 text-[#0B5F5B] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{service.desc}</p>
                  <button 
                    onClick={() => setActiveTab(service.tab)}
                    className="text-[#0B5F5B] font-bold text-sm flex items-center hover:underline"
                  >
                    Explore Details <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* Plan Requirement Form View */}
      {activeTab === 'plan' && (
        <main className="max-w-4xl mx-auto px-4 py-12 flex-1 w-full">
          {!submitted ? (
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
              <h2 className="text-3xl font-bold text-[#0B5F5B] mb-2">Plan Your Corporate Requirement</h2>
              <p className="text-gray-600 text-sm mb-8">Select one or multiple services. Our team will prepare options tailored to your needs.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Select Services */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">1. Select Services Needed</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { id: 'mice', label: 'MICE / Offsite' },
                      { id: 'travel', label: 'Corporate Travel' },
                      { id: 'events', label: 'Corporate Event' },
                      { id: 'gifting', label: 'Corporate Gifting' },
                      { id: 'merchandise', label: 'Branded Merchandise' },
                      { id: 'rentals', label: 'Event Rentals' }
                    ].map(s => (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => toggleService(s.id)}
                        className={`p-4 rounded-xl text-left border font-semibold text-sm transition ${
                          selectedServices.includes(s.id) 
                            ? 'bg-[#EAF5F3] border-[#0B5F5B] text-[#0B5F5B]' 
                            : 'bg-gray-50 border-gray-200 text-gray-700'
                        }`}
                      >
                        {selectedServices.includes(s.id) ? '✓ ' : '+ '}{s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Contact Details */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">2. Contact Information</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" placeholder="Full Name *" required 
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0B5F5B] outline-none"
                    />
                    <input 
                      type="text" placeholder="Company Name *" required 
                      value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                      className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0B5F5B] outline-none"
                    />
                    <input 
                      type="tel" placeholder="Phone / WhatsApp Number *" required 
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0B5F5B] outline-none"
                    />
                    <input 
                      type="email" placeholder="Corporate Email *" required 
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0B5F5B] outline-none"
                    />
                  </div>
                </div>

                {/* Step 3: Event/Travel Scope */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">3. Requirement Details</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" placeholder="Target Destination / City" 
                      value={formData.destination} onChange={e => setFormData({...formData, destination: e.target.value})}
                      className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0B5F5B] outline-none"
                    />
                    <input 
                      type="text" placeholder="Preferred Dates / Month" 
                      value={formData.dates} onChange={e => setFormData({...formData, dates: e.target.value})}
                      className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0B5F5B] outline-none"
                    />
                    <input 
                      type="text" placeholder="Approx Group Size / Quantity" 
                      value={formData.groupSize} onChange={e => setFormData({...formData, groupSize: e.target.value})}
                      className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0B5F5B] outline-none"
                    />
                    <input 
                      type="text" placeholder="Budget Scope (INR)" 
                      value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}
                      className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0B5F5B] outline-none"
                    />
                  </div>
                  <textarea 
                    rows="3" placeholder="Additional details or specific needs..." 
                    value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})}
                    className="w-full mt-4 p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0B5F5B] outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#0B5F5B] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#084B48] transition text-base"
                >
                  SUBMIT REQUIREMENT
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white p-12 rounded-3xl text-center shadow-sm border border-gray-200 space-y-6">
              <CheckCircle className="w-16 h-16 text-[#0B5F5B] mx-auto" />
              <h2 className="text-3xl font-bold">Requirement Submitted</h2>
              <div className="bg-[#EAF5F3] p-4 rounded-xl inline-block">
                <span className="text-xs font-semibold text-gray-500 uppercase block">Your Requirement ID</span>
                <span className="text-2xl font-mono font-bold text-[#0B5F5B]">{requirementId}</span>
              </div>
              <p className="text-gray-600 max-w-md mx-auto text-sm">
                Thank you! The Naura team has received your requirement and will review it immediately.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a 
                  href={`https://wa.me/919999513212?text=Hi%20Naura%20Team,%20I%20have%20submitted%20Requirement%20ID%20${requirementId}`}
                  target="_blank" rel="noreferrer"
                  className="bg-[#0B5F5B] text-white font-bold px-6 py-3 rounded-lg flex items-center text-sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2" /> Discuss on WhatsApp
                </a>
                <button 
                  onClick={() => { setSubmitted(false); setActiveTab('home'); }}
                  className="border border-gray-300 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50"
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}
        </main>
      )}

      {/* Footer */}
      <footer className="bg-[#17212B] text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-lg font-bold text-[#C8A45D] mb-3">NAURA EVENTS & TRAVEL CO.</h3>
            <p className="text-gray-400 leading-relaxed">
              One team to plan, source and execute corporate requirements — travel, offsites, events, gifting and merchandise.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Direct Contacts</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: <a href="tel:9999513212" className="text-white hover:underline">9999513212</a></li>
              <li>Alternate: <a href="tel:9560217182" className="text-white hover:underline">9560217182</a></li>
              <li>Email: <a href="mailto:nauraevents.in@gmail.com" className="text-white hover:underline">nauraevents.in@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Target Domain</h4>
            <p className="text-gray-400">https://nauraevents.in</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

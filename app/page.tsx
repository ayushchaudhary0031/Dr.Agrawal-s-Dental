'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  MapPin, Phone, Clock, Star, Calendar, MessageSquare,
  Microscope, HeartPulse, Wallet, ArrowRight, CheckCircle2,
  Stethoscope, Activity, Sparkles, Sun, Link as LinkIcon, 
  Crown, Baby, Syringe, Zap, SmilePlus, Component,
  Facebook, Instagram
} from 'lucide-react';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-[#f8f9fa] overflow-x-hidden">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl md:text-2xl text-[#005b82] leading-tight">
              Dr. Agrawal's Dental<br/><span className="text-sm font-medium text-gray-500">Health Clinic & Implant Centre</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            {['Home', 'About', 'Services', 'Implants', 'Gallery', 'FAQ'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-[#00b4d8] text-sm font-medium transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="#contact" className="bg-[#005b82] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#004766] transition-colors shadow-md">
              Book Appointment
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-[#e0f7fa] px-4 py-1.5 text-sm font-medium text-[#00b4d8] mb-6">
                Trusted Dental Excellence in Agra
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#005b82] mb-6">
                Advanced Dental Care<br/>For A Healthy & Beautiful<br/>Smile
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Expert Dental Implants, Root Canal Treatment, Braces, Cosmetic Dentistry & Complete Oral Care in Agra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="inline-flex justify-center items-center gap-2 bg-[#005b82] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#004766] transition shadow-lg">
                  <Calendar className="w-5 h-5"/> Book Appointment
                </Link>
                <a href="tel:+917906480031" className="inline-flex justify-center items-center gap-2 bg-white text-[#005b82] border-2 border-[#005b82] px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition shadow-sm">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
              {/* Use a placeholder image for the hero */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50">
                  <Image 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
                    alt="Smiling confident woman in dental clinic"
                    fill
                    className="object-cover object-top"
                    referrerPolicy="no-referrer"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO BAR - Floating */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-12 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <a href="https://www.google.com/maps/search/?api=1&query=Dr.+Agrawal's+Dental+Health+Clinic+%26+Implant+Centre,+Agra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-2 lg:px-4 hover:bg-gray-50 rounded-xl transition cursor-pointer">
            <div className="bg-[#e0f7fa] p-3 rounded-full text-[#00b4d8]"><MapPin className="w-6 h-6"/></div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Address</p>
              <p className="font-semibold text-gray-900 text-sm">Agra, Uttar Pradesh</p>
            </div>
          </a>
          <div className="flex items-center gap-4 p-2 lg:px-4">
            <div className="bg-[#e0f7fa] p-3 rounded-full text-[#00b4d8]"><Phone className="w-6 h-6"/></div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Phone</p>
              <p className="font-semibold text-gray-900 text-sm">+91 79064 80031</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 lg:px-4">
            <div className="bg-[#e0f7fa] p-3 rounded-full text-[#00b4d8]"><Clock className="w-6 h-6"/></div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Hours</p>
              <p className="font-semibold text-gray-900 text-sm">10:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 lg:px-4 relative">
            <div className="bg-[#e0f7fa] p-3 rounded-full text-[#00b4d8]"><Star className="w-6 h-6"/></div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Google Rating</p>
              <p className="font-semibold text-gray-900 text-sm">4.8/5 (Trusted Clinic)</p>
            </div>
            {/* WhatsApp floating icon approximation */}
            <a href="https://wa.me/917906480031" target="_blank" rel="noopener noreferrer" className="absolute -right-4 -bottom-10 lg:-right-12 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1ebd5b] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#f8f9fa]" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Microscope className="w-8 h-8 text-[#00b4d8]"/>,
                title: "Advanced Tech",
                desc: "We utilize the latest 3D imaging, laser dentistry, and digital scanners for maximum precision and faster recovery."
              },
              {
                icon: <HeartPulse className="w-8 h-8 text-[#00b4d8]"/>,
                title: "Patient Comfort",
                desc: "Pain-free procedures in a relaxing environment designed to ease dental anxiety for patients of all ages."
              },
              {
                icon: <Wallet className="w-8 h-8 text-[#00b4d8]"/>,
                title: "Affordable Care",
                desc: "Premium dental healthcare made accessible with transparent pricing and flexible EMI options for major treatments."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="w-16 h-16 bg-[#e0f7fa] rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Dental Services</h2>
            <p className="text-gray-600">From preventive care to complex surgical rehabilitations, we offer the full spectrum of modern dentistry.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 border border-gray-100 bg-gray-50 rounded-2xl p-4 md:p-8">
            {[
              { icon: Component, label: "Implants" },
              { icon: Activity, label: "RCT" },
              { icon: Sparkles, label: "Cleaning" },
              { icon: Sun, label: "Whitening" },
              { icon: LinkIcon, label: "Braces" },
              { icon: SmilePlus, label: "Cosmetic" },
              { icon: SmilePlus, label: "Smile Makeover" },
              { icon: Syringe, label: "Surgery" },
              { icon: Zap, label: "Laser" },
              { icon: Crown, label: "Crowns" },
              { icon: Baby, label: "Pediatrics" },
              { icon: Activity, label: "Gum Treatment" },
            ].map((svc, i) => (
              <div key={i} className="bg-white flex flex-col items-center justify-center py-6 px-4 rounded-xl shadow-sm hover:shadow text-center cursor-pointer transition">
                <svc.icon className="w-8 h-8 text-[#005b82] mb-3 stroke-[1.5]" />
                <span className="text-sm font-medium text-gray-800">{svc.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIST SECTION */}
      <section className="py-20 bg-[#f8f9fa]" id="implants">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
                alt="Dental Implant"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#005b82] mb-6 leading-tight">
                Dental Implant<br/>Specialist
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                We specialize in Full Mouth Rehabilitations using the latest 'All-on-4' and 'All-on-6' implant techniques. Restore your chewing ability and facial aesthetics with permanent, natural-looking teeth.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-[#00b4d8] mb-1">99%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-[#00b4d8] mb-1">5000+</div>
                  <div className="text-sm text-gray-600 font-medium">Implants Placed</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-[#00b4d8] mb-1">15+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-[#00b4d8] mb-1 text-xl flex items-center justify-center">Lifetime</div>
                  <div className="text-sm text-gray-600 font-medium">Warranty Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR PROFILE */}
      <section className="py-0 relative overflow-hidden" id="doctor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-[#005b82] rounded-3xl overflow-hidden flex flex-col md:flex-row my-10 shadow-2xl">
              <div className="w-full md:w-2/5 relative min-h-[400px]">
                 <Image 
                    src="/doctor-profile.avif"
                    alt="Dr. Agrawal"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                 />
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center text-white">
                <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest mb-2">Senior Implantologist</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Dr. Agrawal</h2>
                <p className="text-blue-100 mb-8 font-medium">MDS - Implant Dentistry & Oral Surgery</p>
                
                <p className="text-blue-50/80 leading-relaxed mb-10 max-w-xl">
                  With over two decades of clinical expertise, Dr. Agrawal is a pioneer in advanced implantology and cosmetic smile design in Agra. His commitment to pain-free dentistry and precision has restored thousands of smiles, making him one of the most trusted names in the region.
                </p>

                <div className="flex justify-center text-white/40">
                  <span className="text-3xl">✾</span>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* SMILE TRANSFORMATIONS */}
      <section className="py-20 bg-white" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smile Transformations</h2>
            <p className="text-gray-600">Real results from real patients. Witness the power of modern cosmetic dentistry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['/transformation-1.jpg', '/transformation-2.jpg', '/transformation-3.jpg'].map((src, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden shadow-sm aspect-video bg-gray-100 group">
                <Image 
                  src={src}
                  alt={`Smile Transformation Before and After ${index + 1}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#005b82]/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                   Transformation
                </div>
                {/* Visual split simulator */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 hidden sm:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="py-20 bg-[#005b82]" id="contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Form Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#005b82] mb-8 leading-tight">Book Your<br/>Consultation</h2>
              {isSubmitted ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-2xl border border-green-200 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Request Sent Successfully!</h3>
                  <p className="text-sm">We will get back to you shortly to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} action="/api/contact" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input suppressHydrationWarning type="text" name="name" required placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-[#00b4d8] text-gray-900" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input suppressHydrationWarning type="tel" name="phone" required placeholder="+91 00000 00000" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-[#00b4d8] text-gray-900" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input suppressHydrationWarning type="email" name="email" required placeholder="johndoe@gmail.com" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-[#00b4d8] text-gray-900" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Required</label>
                     <select suppressHydrationWarning name="treatment" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-[#00b4d8] text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1.2em]">
                       <option>Dental Implants</option>
                       <option>Root Canal Treatment</option>
                       <option>Cosmetic Dentistry</option>
                       <option>General Checkup</option>
                     </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <input suppressHydrationWarning type="date" name="date" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-[#00b4d8] text-gray-900" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <input suppressHydrationWarning type="time" name="time" required className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-[#00b4d8] text-gray-900" />
                    </div>
                  </div>
                  <button suppressHydrationWarning type="submit" disabled={isSubmitting} className="w-full mt-4 bg-[#005b82] text-white py-4 rounded-lg font-bold hover:bg-[#004766] transition shadow-md disabled:opacity-50">
                    {isSubmitting ? 'Sending Request...' : 'Confirm Appointment'}
                  </button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="w-full md:w-1/2 bg-gray-50 p-8 md:p-12 lg:p-16 border-l border-gray-100 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Clinic Information</h3>
              <div className="space-y-6 flex-1">
                <a href="https://www.google.com/maps/search/?api=1&query=Dr.+Agrawal's+Dental+Health+Clinic+%26+Implant+Centre,+Near+Bhagwan+Talkies,+Civil+Lines,+Agra,+UP+-+282002" target="_blank" rel="noopener noreferrer" className="flex gap-4 hover:bg-gray-100/50 p-2 -mx-2 rounded-xl transition cursor-pointer">
                  <div className="mt-1 bg-white p-2 text-[#00b4d8] rounded-full shadow-sm shrink-0"><MapPin className="w-5 h-5"/></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Main Clinic Address</h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">Dr. Agrawal's Dental Health Clinic & Implant Centre, Near Bhagwan Talkies, Civil Lines, Agra, UP - 282002</p>
                  </div>
                </a>
                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-2 text-[#00b4d8] rounded-full shadow-sm"><Phone className="w-5 h-5"/></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Emergency Helpline</h4>
                    <p className="text-gray-600 text-sm mt-1">+91 79064 80031</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-white p-2 text-[#00b4d8] rounded-full shadow-sm"><MessageSquare className="w-5 h-5"/></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Official Email</h4>
                    <p className="text-gray-600 text-sm mt-1">ayushchaudjary2001@gmail.com</p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <a href="https://www.google.com/maps/search/?api=1&query=Dr.+Agrawal's+Dental+Health+Clinic+%26+Implant+Centre,+Near+Bhagwan+Talkies,+Civil+Lines,+Agra,+UP+-+282002" target="_blank" rel="noopener noreferrer" className="block mt-10 h-48 bg-gray-200 rounded-xl overflow-hidden relative shadow-inner hover:opacity-90 transition cursor-pointer">
                <Image 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                  alt="Map Location"
                  fill
                  className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <MapPin className="w-10 h-10 text-red-500 bg-white rounded-full p-2 shadow-lg drop-shadow-xl animate-bounce" />
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div className="lg:col-span-1">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Dr. Agrawal's Dental<br/>Clinic
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Providing world-class dental healthcare and smile transformations for over 15 years.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center text-sm uppercase tracking-wider text-[#00b4d8]">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Treatments', 'Book Appointment'].map(link => (
                  <li key={link}><a href="#" className="text-gray-500 hover:text-[#005b82] text-sm">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center text-sm uppercase tracking-wider text-[#00b4d8]">Legal & Patient Care</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Dental Emergency', 'Patient Care'].map(link => (
                  <li key={link}><a href="#" className="text-gray-500 hover:text-[#005b82] text-sm">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center text-sm uppercase tracking-wider text-[#00b4d8]">Contact Us</h4>
              <p className="text-gray-500 text-sm mb-4">Feel free to reach out for any queries or to book your visit.</p>
              <div className="flex space-x-3">
                <a href="https://wa.me/917906480031" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#25D366] hover:text-white transition group relative overflow-hidden">
                   <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                   </svg>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition group relative overflow-hidden">
                   <Facebook className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
                </a>
                <a href="https://www.instagram.com/ayush_chaudhaarry/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white transition group relative overflow-hidden">
                   <Instagram className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-gray-100 pt-8 text-center">
            <p suppressHydrationWarning className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dr. Agrawal's Dental Health Clinic & Implant Centre. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  Smartphone, 
  TrendingUp, 
  Users, 
  Monitor, 
  CalendarCheck, 
  Zap, 
  MessageSquare,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-display font-bold text-2xl tracking-tight">
            Mesh<span className="text-accent">Media</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#process" className="hover:text-accent transition-colors">Process</a>
            <a href="#results" className="hover:text-accent transition-colors">Results</a>
            <a href="#contact" className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-accent transition-colors">
              Book Audit
            </a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 text-xl font-display md:hidden">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4">About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4">Services</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4">Process</a>
          <a href="#results" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4">Results</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-black text-white px-6 py-4 rounded-xl text-center mt-4">
            Book Free Audit
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl -z-10"
        ></motion.div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Accepting new clients
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 text-balance">
            {["Performance-Driven", "Digital", "Growth", "Systems"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className="inline-block mr-[0.2em] last:mr-0"
              >
                {word === "Growth" || word === "Systems" ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-purple-600">
                    {word}
                  </span>
                ) : (
                  word
                )}
                {i === 0 && <br className="hidden md:block" />}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 text-balance font-medium"
          >
            We help businesses build predictable customer acquisition systems using social media and digital marketing.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto bg-black text-white px-8 py-5 rounded-full font-bold hover:bg-accent transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
              Book a Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto bg-white text-black border-2 border-gray-200 px-8 py-5 rounded-full font-bold hover:border-black transition-all">
              View Our Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Not just another agency.</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance">
              <strong className="text-black font-semibold">MeshMedia</strong> is a performance-focused digital agency helping service-based and customer-driven businesses transform their online presence into structured systems that attract, engage, and convert clients consistently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Systems</h2>
          <p className="text-lg text-gray-600 max-w-2xl">Everything you need to turn attention into revenue.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Smartphone />, title: "Social Media Management", desc: "End-to-end management of your social profiles." },
            { icon: <Zap />, title: "Short-Form Content", desc: "High-converting Reels & TikToks that capture attention." },
            { icon: <TrendingUp />, title: "Growth Systems", desc: "Algorithmic growth strategies for Instagram & Facebook." },
            { icon: <Users />, title: "Customer Acquisition", desc: "Predictable systems to bring in new clients." },
            { icon: <Monitor />, title: "Website Design", desc: "High-converting, premium websites that sell." },
            { icon: <CalendarCheck />, title: "Booking Integration", desc: "Seamless online booking systems for your business." },
            { icon: <BarChart3 />, title: "Lead Generation", desc: "Automated funnels to capture and nurture leads." },
            { icon: <MessageSquare />, title: "Follow-Up Systems", desc: "Automated SMS & email to close more deals." }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 text-black group-hover:text-accent group-hover:scale-110 transition-all">
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-32 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">How It Works</h2>
              <p className="text-gray-400 text-lg mb-12 max-w-md">A proven 4-step framework to build your digital growth engine.</p>
              
              <div className="space-y-12">
                {[
                  { num: "01", title: "Business Analysis", desc: "We audit your current presence and identify growth bottlenecks." },
                  { num: "02", title: "Strategy Development", desc: "We map out a custom acquisition system for your specific offer." },
                  { num: "03", title: "System Implementation", desc: "We build the assets, funnels, and content engine." },
                  { num: "04", title: "Optimization & Growth", desc: "We launch, measure, and relentlessly optimize for ROI." }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="font-display text-3xl font-bold text-gray-800">{step.num}</div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 hidden md:block">
              <Image 
                src="https://photos.fife.usercontent.google.com/pw/AP1GczMxUBjcDm-jHRB15EnJ9hkLTzGFPPFS53sXF_yw_ZwHYF4swsmgnX4=w1418-h945-s-no-gm?authuser=0"
                alt="MeshMedia Process"
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Who We Work With</h2>
          <p className="text-lg text-gray-600">We partner with service-based businesses ready to scale.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {["Salons", "Restaurants", "Schools", "Gyms", "Local Businesses"].map((industry, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="aspect-square rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center p-6 text-center hover:bg-black hover:text-white transition-colors duration-300 cursor-default"
            >
              <span className="font-display font-bold text-lg md:text-xl">{industry}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results & Why Choose Us */}
      <section id="results" className="py-32 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-8">The Outcomes</h2>
            <ul className="space-y-6">
              {[
                "Increased visibility & brand awareness",
                "Higher engagement from ideal clients",
                "More qualified customer inquiries",
                "Strong, authoritative brand presence",
                "Predictable, scalable customer flow"
              ].map((result, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 text-lg"
                >
                  <CheckCircle2 className="text-accent shrink-0" />
                  <span>{result}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
            <h3 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Why Choose Us</h3>
            <p className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              &quot;Not just social media posting — we build systems that generate consistent revenue.&quot;
            </p>
            <p className="text-gray-600">
              Stop paying for likes and start investing in systems that actually move the needle for your business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-black text-white rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Ready to build a system that brings you customers consistently?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Book a free discovery call to see if we&apos;re a good fit.
            </p>
            
            <a href="https://wa.me/254758719660" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all hover:scale-105 active:scale-95 mb-12">
              Start Now
            </a>

            <div className="grid sm:grid-cols-2 gap-8 border-t border-gray-800 pt-12 text-left">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">WhatsApp / Calls</p>
                <p className="font-display text-xl">+254 758 719 660</p>
                <p className="font-display text-xl">+254 740 242 611</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Response Time</p>
                <p className="font-display text-xl">Within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-bold text-xl tracking-tight">
            Mesh<span className="text-accent">Media</span>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MeshMedia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

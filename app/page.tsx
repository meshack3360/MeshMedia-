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
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-white selection:bg-accent/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-display font-black text-xl text-white shadow-lg shadow-accent/20">
              M
            </div>
            <div className="font-display font-bold text-2xl tracking-tight">
              Mesh<span className="text-accent">Media</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#process" className="hover:text-accent transition-colors">Process</a>
            <a href="#results" className="hover:text-accent transition-colors">Results</a>
            <a href="#contact" className="bg-white text-navy-950 px-5 py-2.5 rounded-full hover:bg-accent hover:text-white transition-all font-bold">
              Book Audit
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy-950 pt-24 px-6 flex flex-col gap-6 text-xl font-display md:hidden">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 pb-4">About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 pb-4">Services</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 pb-4">Process</a>
          <a href="#results" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 pb-4">Results</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-accent text-white px-6 py-4 rounded-xl text-center mt-4 font-bold">
            Book Free Audit
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image 
            src="https://picsum.photos/seed/network/1920/1080"
            alt="Background"
            fill
            className="object-cover opacity-[0.03] grayscale"
            priority
          />
        </div>
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
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] -z-10"
        ></motion.div>
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 backdrop-blur-sm">
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-blue-400">
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
            className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 text-balance font-medium"
          >
            We help businesses build predictable customer acquisition systems using social media and digital marketing.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto bg-white text-navy-950 px-8 py-5 rounded-full font-bold hover:bg-accent hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
              Book a Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto bg-navy-900 text-white border-2 border-white/10 px-8 py-5 rounded-full font-bold hover:border-white transition-all">
              View Our Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 bg-navy-900/50 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://picsum.photos/seed/tech/1920/1080"
            alt="Background"
            fill
            className="object-cover opacity-[0.02] grayscale"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Not just another agency.</h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed text-balance">
              <strong className="text-white font-semibold">MeshMedia</strong> is a performance-focused digital agency helping service-based and customer-driven businesses transform their online presence into structured systems that attract, engage, and convert clients consistently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://picsum.photos/seed/digital/1920/1080"
            alt="Background"
            fill
            className="object-cover opacity-[0.02] grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Systems</h2>
            <p className="text-lg text-gray-400 max-w-2xl">Everything you need to turn attention into revenue.</p>
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
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-navy-900 border border-white/5 hover:bg-navy-950 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-navy-950 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="relative py-32 bg-navy-900 text-white px-6 overflow-hidden">
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
                    <div className="font-display text-3xl font-bold text-navy-800">{step.num}</div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-3xl overflow-hidden bg-navy-950 border border-white/10 hidden md:block">
              {/* Neon Techy Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <motion.div 
                    animate={{ 
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"
                  ></motion.div>
                  <motion.div 
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"
                  ></motion.div>
                  
                  {/* Neon Lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-pulse"></div>
                    <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-accent/50 to-transparent animate-pulse delay-700"></div>
                  </div>

                  {/* Techy HUD Elements */}
                  <div className="absolute top-10 left-10 p-4 border-l border-t border-accent/30 rounded-tl-2xl">
                    <div className="w-20 h-1 bg-accent/40 mb-2"></div>
                    <div className="w-12 h-1 bg-accent/20"></div>
                  </div>
                  <div className="absolute bottom-10 right-10 p-4 border-r border-b border-accent/30 rounded-br-2xl">
                    <div className="w-12 h-1 bg-accent/20 mb-2 ml-auto"></div>
                    <div className="w-20 h-1 bg-accent/40 ml-auto"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-8xl font-black text-white/5 tracking-tighter select-none">SYSTEMS</div>
                  <div className="font-display text-4xl font-bold text-accent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">MESH ENGINE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://picsum.photos/seed/connection/1920/1080"
            alt="Background"
            fill
            className="object-cover opacity-[0.02] grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Who We Work With</h2>
            <p className="text-lg text-gray-400">We partner with businesses ready to scale.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {["Salons", "Restaurants", "Gyms", "Spas"].map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="aspect-square rounded-3xl bg-navy-900 border border-white/5 flex items-center justify-center p-6 text-center hover:bg-accent hover:text-white transition-all duration-300 cursor-default group"
              >
                <span className="font-display font-bold text-lg md:text-xl group-hover:scale-110 transition-transform">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="relative py-32 bg-navy-900/50 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://picsum.photos/seed/data/1920/1080"
            alt="Background"
            fill
            className="object-cover opacity-[0.02] grayscale"
          />
        </div>
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
                  <span className="text-gray-300">{result}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="bg-navy-900 p-10 rounded-3xl shadow-2xl border border-white/5 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Why Choose Us</h3>
            <p className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              &quot;Not just social media posting — we build systems that generate consistent revenue.&quot;
            </p>
            <p className="text-gray-400">
              Stop paying for likes and start investing in systems that actually move the needle for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-32 px-6 bg-navy-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let&apos;s build your <span className="text-accent">growth engine</span>.
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Ready to scale? Fill out the form and our team will get back to you within 24 hours to schedule your free audit.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center text-accent">
                  <Smartphone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">WhatsApp / Calls</p>
                  <p className="font-display text-xl">+254 758 719 660</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center text-accent">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Response Time</p>
                  <p className="font-display text-xl">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-900 p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative"
          >
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-gray-400">We&apos;ll be in touch shortly to schedule your audit.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-accent font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="hello@company.com"
                      className="w-full bg-navy-950 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+254 --- --- ---"
                      className="w-full bg-navy-950 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">How can we help?</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your business and goals..."
                    className="w-full bg-navy-950 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={formStatus === 'submitting'}
                  type="submit"
                  className="w-full bg-white text-navy-950 py-5 rounded-2xl font-bold text-lg hover:bg-accent hover:text-white transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  <ArrowRight size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-navy-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-display font-black text-sm text-white">
              M
            </div>
            <div className="font-display font-bold text-xl tracking-tight">
              Mesh<span className="text-accent">Media</span>
            </div>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MeshMedia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

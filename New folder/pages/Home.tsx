
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, XCircle, TrendingUp, MessageSquare, Brain, Calendar, Zap, Play, ChevronDown, Bot, Layers, Database, FileText, Filter, Quote, Star, ChevronLeft, ChevronRight, BarChart } from 'lucide-react';
import DemoChat from '../components/ChatDemo';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const TestimonialSection = () => {
  const testimonials = [
    { 
      id: 1,
      name: "Mark Thompson", 
      role: "CEO, ScaleUp Agency", 
      text: "We automated our entire onboarding flow. What used to take 3 days now happens in 10 minutes. The ROI was instant.", 
      img: "65" 
    },
    { 
      id: 2,
      name: "Sarah Williams", 
      role: "VP of Sales, TechGrowth", 
      text: "Our sales team only talks to qualified leads now. The AI agent filters out 80% of the noise before it hits our CRM.", 
      img: "44" 
    },
    { 
      id: 3,
      name: "James Chen", 
      role: "Founder, EcomFlow", 
      text: "Customer support was drowning us. Zenvia's agent handled 5,000 tickets in the first week alone. Absolute lifesaver.", 
      img: "32" 
    },
    { 
      id: 4,
      name: "Elena Rodriguez", 
      role: "Director, MediCare", 
      text: "The voice agent for appointment booking is flawless. Our receptionists can finally focus on patients instead of phones.", 
      img: "22" 
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="py-24 bg-secondary-900 border-t border-slate-900 relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
             
             {/* Column 1: Testimonials */}
             <div className="relative bg-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-10 backdrop-blur-sm flex flex-col justify-between min-h-[400px]">
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-primary-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                            <Star className="w-4 h-4 fill-current" />
                            Client Feedback
                        </h3>
                        <Quote size={40} className="text-slate-700" />
                    </div>

                    <div className="relative z-10">
                    <AnimatePresence mode='wait'>
                        <motion.div 
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed">
                                "{testimonials[current].text}"
                            </h3>
                            
                            <div className="flex items-center gap-4">
                                <img 
                                src={`https://i.pravatar.cc/100?img=${testimonials[current].img}`} 
                                alt={testimonials[current].name} 
                                className="w-12 h-12 rounded-full border-2 border-primary-500" 
                                />
                                <div>
                                <p className="text-white font-bold">{testimonials[current].name}</p>
                                <p className="text-slate-400 text-sm">{testimonials[current].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    </div>
                </div>

                <div className="flex gap-2 mt-8">
                    {testimonials.map((_, idx) => (
                       <button 
                          key={idx}
                          onClick={() => handleDotClick(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                             current === idx ? "w-6 bg-primary-500" : "w-2 bg-slate-600 hover:bg-slate-500"
                          }`}
                          aria-label={`Go to testimonial ${idx + 1}`}
                       />
                    ))}
                 </div>
             </div>

             {/* Column 2: Case Studies Promo */}
             <div className="relative bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-10 flex flex-col justify-center min-h-[400px] group overflow-hidden hover:border-primary-500/30 transition-colors">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors"></div>

                <div className="relative z-10">
                   <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BarChart className="w-7 h-7 text-primary-400" />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-4">Real Results, Verified Data.</h3>
                   <p className="text-slate-300 text-lg leading-relaxed mb-10">
                      Don't just take their word for it. Dive into the data. See how we reduced support tickets by 72% and tripled qualified leads for our partners.
                   </p>
                </div>

                <div className="relative z-10">
                   <Link 
                      to="/case-studies" 
                      className="inline-flex items-center gap-3 text-white font-bold bg-primary-600 hover:bg-primary-500 px-8 py-4 rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-primary-900/20 group/btn"
                   >
                      View Case Studies
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                   </Link>
                </div>
             </div>

          </div>
       </div>
    </div>
  );
};

const Home = () => {
  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // State for How It Works animation sequence
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2500); // Change step every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden bg-secondary-900">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-32 overflow-hidden">
        
        {/* Background Effects - Static */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute inset-0 bg-secondary-900"></div>
          
          {/* Linear gradient sweeping from bottom-left - Static */}
          <div className="absolute bottom-0 left-0 w-full h-[120%] bg-gradient-to-tr from-primary-900/40 via-transparent to-transparent"></div>
          
          {/* Linear gradient sweeping from bottom-right - Static */}
          <div className="absolute bottom-0 right-0 w-full h-[120%] bg-gradient-to-tl from-indigo-900/30 via-transparent to-transparent"></div>
          
          {/* Subtle bottom glow */}
          <div className="absolute -bottom-32 left-0 right-0 h-[500px] bg-gradient-to-t from-primary-500/10 via-indigo-500/5 to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative">
            
            {/* BADGE: Static, no Shimmer Loop */}
            <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md mb-12 overflow-hidden group hover:border-primary-500/50 transition-colors cursor-default shadow-lg">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="relative z-10 text-primary-100 text-sm font-medium group-hover:text-white transition-colors">
                Deploy Your Digital Workforce
              </span>
            </div>
            
            <div className="min-h-[180px] sm:min-h-[220px] lg:min-h-[260px] flex flex-col justify-center lg:block mb-14 relative">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-2xl">
                  Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-300 to-white bg-[length:200%_auto]">Intelligent</span>
                </h1>
                
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] my-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-indigo-400 font-extrabold">
                    AI Agents
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                  & Automate Work.
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light mb-20">
              We build autonomous <strong className="text-white font-semibold">AI Agents</strong> and custom workflows that work 24/7. Scale your operations with a digital workforce that never sleeps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-20">
              <Link 
                to="/book" 
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(20,184,166,0.4)] animate-pulse transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                {/* FLASHING SHIMMER LOOP - BRIGHT WHITE */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full animate-[shimmer_2s_linear_infinite] z-0"></div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-primary-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Deploy Your Agents
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <button 
                onClick={scrollToDemo}
                className="relative px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group overflow-hidden"
              >
                {/* Subtle Secondary Shimmer */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
                <Play className="w-4 h-4 fill-current group-hover:fill-slate-900 transition-colors animate-[pulse_2s_infinite]" />
                <span className="relative z-10">See Live Demo</span>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?img=${i+15}`} alt="User" className="w-10 h-10 rounded-full border-2 border-secondary-900 grayscale hover:grayscale-0 transition-all" />
                 ))}
              </div>
              <p>Join 50+ companies scaling with Agents</p>
            </div>
          </div>
          
          {/* Chat Interface - Static */}
          <div className="relative hidden lg:block">
             {/* Subtle static glow backing */}
             <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-indigo-600/10 rounded-3xl blur-2xl opacity-50"></div>
             <DemoChat />
          </div>
        </div>
        
        {/* Scroll Indicator - Static */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hidden md:block">
          <ChevronDown className="w-6 h-6 opacity-50" />
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section id="problems" className="py-24 bg-slate-950 relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Stop Wasting <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Human Potential</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg leading-relaxed"
            >
              Your team is burnt out doing repetitive work. Deploy AI Agents to handle the grunt work so you can focus on strategy and growth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
            {[
              { icon: Clock, title: "Slow Response Times", desc: "Leads go cold while waiting hours for a reply. Our AI Agents respond in seconds, 24/7, keeping engagement high." },
              { icon: XCircle, title: "Missed Opportunities", desc: "Sales inquiries lost in the weekend void. We ensure every single lead is captured, qualified, and booked." },
              { icon: TrendingUp, title: "High Operational Costs", desc: "Hiring more staff just to handle ticket volume drains profit. Agents handle infinite scale for a fraction of the cost." },
              { icon: Database, title: "Data Silos & Chaos", desc: "Customer info scattered across apps? We unify data streams so your agents always have full context." },
              { icon: FileText, title: "Repetitive Drudgery", desc: "Stop paying smart people to copy-paste. Automate data entry and admin tasks to prevent team burnout." },
              { icon: Filter, title: "Unqualified Leads", desc: "Sales team wasting time on tire-kickers? AI pre-vets every prospect so you only talk to buyers." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-primary-500/40 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-primary-500/10 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors border border-slate-700 group-hover:border-primary-500/50 relative z-10">
                    <item.icon className="text-primary-500 w-7 h-7 group-hover:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed flex-grow relative z-10">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Split Layout: Testimonials & Case Studies */}
      <TestimonialSection />

      {/* Solutions / Features Section */}
      <section className="py-24 bg-secondary-900 relative overflow-hidden">
         <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
         <div className="absolute -left-40 top-40 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px]"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <FadeIn>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Agents & Automations We Build</h2>
                  <p className="text-slate-400 text-lg">From autonomous support bots to complex n8n workflows.</p>
                </FadeIn>
              </div>
              <Link to="/services" className="hidden md:flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 mt-4 md:mt-0 group">
                View All Agents <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {[
                { icon: MessageSquare, title: "Customer Support Agent", desc: "An autonomous agent that resolves tickets, refunds, and FAQs instantly." },
                { icon: Brain, title: "Sales Qualifier Agent", desc: "Engages inbound leads, qualifies them, and books meetings on autopilot." },
                { icon: Bot, title: "Internal Ops Agent", desc: "A bot for your team to query internal docs, SOPs, and databases." },
                { icon: Layers, title: "Workflow Automation", desc: "Connect your CRM, Email, and Slack to eliminate manual data entry." }
              ].map((feature, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                  <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-primary-500/40 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-primary-500/10 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors border border-slate-700 group-hover:border-primary-500/50 relative z-10">
                       <feature.icon className="w-6 h-6 text-primary-500 group-hover:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{feature.title}</h3>
                    <p className="text-sm text-slate-400 flex-grow relative z-10 leading-relaxed">{feature.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <div className="mt-10 md:hidden text-center">
              <Link to="/services" className="text-primary-400 font-semibold flex items-center justify-center gap-2">
                 View All Agents <ArrowRight size={18} />
              </Link>
            </div>
         </div>
      </section>

      {/* How It Works - Sequential Animation */}
      <section className="py-20 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 max-w-3xl mx-auto">
             <FadeIn>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">From Manual to Autonomous</h2>
               <p className="text-slate-400 text-lg">Our simple 3-step process to deploy your digital workforce.</p>
             </FadeIn>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connecting Lines (Background) */}
             <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[2px] bg-slate-800 z-0"></div>
             
             {/* Active Data Packet moving sequentially */}
            
             
             {[
               { step: "01", title: "Discovery", desc: "We analyze your current bottlenecks and map out the perfect AI agent strategy." },
               { step: "02", title: "Build & Train", desc: "We engineer your custom agents, training them on your specific data and SOPs." },
               { step: "03", title: "Deploy & Scale", desc: "We launch your digital workforce, monitoring performance and optimizing ROI." }
             ].map((item, idx) => {
               const isActive = activeStep === idx;
               
               return (
               <FadeIn key={idx} delay={idx * 0.2}>
                 <div className={`relative z-10 flex flex-col items-center text-center group transition-all duration-500 ${isActive ? 'scale-105 opacity-100' : 'opacity-60 scale-100'}`}>
                   
                   {/* Precision SVG Motion Border Box */}
                   <div className="relative w-20 h-20 mb-6 flex items-center justify-center transition-all duration-500">
                      {/* Glow Filter Definition */}
                      <svg className="absolute w-0 h-0">
                        <defs>
                          <filter id="neon-glow-seq" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                      </svg>

                      {/* The Animated Border SVG */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
                         {/* Static Background & Track */}
                         <rect x="2" y="2" width="76" height="76" rx="14" className="fill-slate-900 stroke-slate-800" strokeWidth="2" />
                         
                         {/* Animated Runner - Only renders if Active */}
                         {isActive && (
                           <motion.rect 
                              x="2" y="2" width="76" height="76" rx="14" 
                              fill="none"
                              stroke="#2dd4bf"
                              strokeWidth="2"
                              strokeLinecap="round"
                              filter="url(#neon-glow-seq)"
                              initial={{ strokeDasharray: "20 260", strokeDashoffset: 0 }}
                              animate={{ strokeDashoffset: -280 }} 
                              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                           />
                         )}
                      </svg>

                      <span className={`relative z-10 text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-600'}`}>
                        {item.step}
                      </span>
                   </div>
                   
                   <h3 className={`text-xl font-bold mb-3 transition-colors ${isActive ? 'texAt-white' : 'teAxt-slate-500'}`}>{item.title}</h3>
                   <p className="text-slate-400 max-w-xs leading-relaxed">{item.desc}</p>
                 </div>
               </FadeIn>
             )})}
           </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-24 bg-slate-950 scroll-mt-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 to-slate-950 pointer-events-none"></div>
         {/* Glowing orb background */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <FadeIn>
              <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-primary-500/20 to-indigo-500/20 text-primary-400 mb-6 border border-primary-500/20">
                 <Brain className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Experience the Agent</h2>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg">Try chatting with our demo agent below. Imagine this embedded on your site or handling your WhatsApp.</p>
              {/* Minimalist wrapper - no decorations */}
              <div className="max-w-md mx-auto">
                 <DemoChat />
              </div>
            </FadeIn>
         </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-secondary-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-10">Seamlessly Integrating With</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50">
             {['HubSpot', 'Salesforce', 'Shopify', 'OpenAI', 'Slack', 'WhatsApp', 'Notion', 'Stripe'].map((brand, i) => (
               <motion.span 
                  key={brand}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xl md:text-2xl font-bold text-slate-400 hover:text-white transition-colors cursor-default"
                >
                  {brand}
               </motion.span>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 via-secondary-900/50 to-secondary-900"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Ready to Build Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">AI Workforce?</span></h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Get a custom agent plan tailored to your specific industry bottlenecks. No commitment required.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link to="/book" className="w-full sm:w-auto px-10 py-5 bg-white text-secondary-900 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl shadow-white/10 flex items-center justify-center gap-2 transform hover:-translate-y-1 duration-200">
                 Book Your Free Strategy Call
                 <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
            <p className="mt-8 text-sm text-slate-500">Join 100+ innovative companies scaling with Zenvia</p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;

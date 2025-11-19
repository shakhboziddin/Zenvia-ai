import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, MessageCircle, Users, Database, ShoppingBag, FileText, ArrowRight, Check, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'support',
      title: 'AI Support Agent',
      icon: MessageCircle,
      desc: 'A 24/7 intelligent agent trained on your documents and history. Resolves tickets, answers questions, and escalates complex issues to humans.',
      features: ['Instant 24/7 Responses', 'Multi-channel (Email, Chat, WhatsApp)', 'Sentiment Analysis', 'CRM Sync']
    },
    {
      id: 'sales',
      title: 'AI Sales Agent',
      icon: Users,
      desc: 'Automatically qualifies inbound leads, nurtures them with personalized follow-ups, and books meetings directly on your sales team\'s calendar.',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Calendar Booking', 'Objection Handling']
    },
    {
      id: 'voice',
      title: 'AI Voice Agents',
      icon: Bot,
      desc: 'Handle inbound phone calls for appointments or support, and execute outbound calls for lead reactivation with human-like voice latency.',
      features: ['Natural Conversation', 'Appointment Setting', 'Call Transcripts', 'CRM Logging']
    },
    {
      id: 'ops',
      title: 'Operations & Workflow',
      icon: Database,
      desc: 'Connect disjointed apps (Slack, Notion, Gmail). Automate onboarding, reporting, and data entry tasks that slow your team down.',
      features: ['Employee Onboarding', 'Invoice Processing', 'Data Enrichment', 'Automated Reporting']
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Agent',
      icon: ShoppingBag,
      desc: 'Recover abandoned carts, handle "Where is my order?" queries instantly, and recommend products based on purchase history.',
      features: ['Order Tracking', 'Product Recommendations', 'Returns Automation', 'Review Collection']
    },
    {
      id: 'content',
      title: 'Internal Knowledge Agent',
      icon: FileText,
      desc: 'RAG (Retrieval-Augmented Generation) systems that allow your team to chat with your internal PDFS, SOPs, and documentation.',
      features: ['Internal Knowledge Base', 'Document Analysis', 'Content Repurposing', 'Meeting Summaries']
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-900">
      <div className="bg-slate-950 py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-bold uppercase tracking-wider mb-6 border border-primary-500/20"
          >
            <Cpu className="w-4 h-4" />
            Our Expertise
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            AI Agents & Automation Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            We don't just use generic tools. We build custom <span className="text-white font-medium">autonomous agents</span> tailored to your business logic.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-primary-500/50 transition-all group flex flex-col h-full shadow-lg hover:shadow-xl hover:shadow-primary-500/5"
            >
              <div className="p-8 flex-grow">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:bg-primary-500/10 group-hover:border-primary-500/30 transition-colors">
                  <service.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6 min-h-[80px]">{service.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link to="/book" className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors">
                  Discuss this agent <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-primary-900/50 to-indigo-900/50 rounded-3xl p-12 text-center border border-primary-500/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
             <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Agent Architecture?</h3>
             <p className="text-slate-300 mb-8 max-w-2xl mx-auto">We specialize in complex, multi-agent systems using n8n and custom LLM orchestration. If you can map the logic, we can build the agent.</p>
             <Link to="/book" className="px-8 py-4 bg-white text-secondary-900 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg inline-flex items-center gap-2 transform hover:-translate-y-1 duration-200">
               Talk to an Engineer <ArrowRight size={18} />
             </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
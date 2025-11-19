import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart, Zap } from 'lucide-react';

const CaseStudies = () => {
  const studies = [
    {
      client: "EcoStyle Commerce",
      industry: "E-commerce",
      result: "72% Ticket Reduction",
      desc: "Implemented an AI support agent that handles Order Status, Returns, and Sizing questions. The support team now only handles complex exchanges.",
      stats: [
        { label: "Auto-Resolution Rate", value: "72%" },
        { label: "Response Time", value: "< 10s" }
      ]
    },
    {
      client: "Vertex SaaS",
      industry: "Software / B2B",
      result: "3x Qualified Leads",
      desc: "Built a lead scoring system that analyzes inbound form submissions and automatically enriches data using Clay + OpenAI, then routes to Slack.",
      stats: [
        { label: "Meetings Booked", value: "+210%" },
        { label: "Manual Work Saved", value: "25h/wk" }
      ]
    },
    {
      client: "Dr. Smith Clinic",
      industry: "Healthcare / Local",
      result: "Zero Missed Calls",
      desc: "Deployed a Voice AI agent to handle after-hours appointment bookings and FAQs. It integrates directly with their booking software.",
      stats: [
        { label: "Appointments/Mo", value: "+45" },
        { label: "Phone Bill", value: "-30%" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-900 pt-10">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Success Stories
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto"
            >
              See how we're helping businesses across industries save time and make more money.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {studies.map((study, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 flex flex-col lg:flex-row shadow-2xl hover:shadow-primary-500/10 transition-all"
              >
                <div className="lg:w-2/5 bg-slate-700/30 p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-700">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-bold uppercase tracking-wider">
                       {study.industry}
                     </div>
                   </div>
                   <h2 className="text-3xl font-bold text-white mb-2">{study.client}</h2>
                   <h3 className="text-xl text-primary-400 font-semibold mb-6">{study.result}</h3>
                   <p className="text-slate-300 mb-8 leading-relaxed">
                     {study.desc}
                   </p>
                   <Link to="/book" className="inline-flex items-center text-white font-semibold hover:text-primary-400 transition-colors group">
                     Get similar results <ArrowUpRight className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                   </Link>
                </div>
                <div className="lg:w-3/5 p-10 flex items-center justify-center bg-slate-800 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                   <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="grid grid-cols-2 gap-8 relative z-10 w-full max-w-lg">
                      {study.stats.map((stat, sIdx) => (
                        <motion.div 
                          key={sIdx} 
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 + (sIdx * 0.1) }}
                          viewport={{ once: true }}
                          className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl border border-slate-700 text-center shadow-xl"
                        >
                          <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                          <div className="text-slate-500 text-sm uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                      ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
       </div>

       <div className="bg-slate-950 py-20 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold text-white mb-12">Industries We Serve</h2>
             <div className="flex flex-wrap justify-center gap-4">
                {[
                  'E-commerce', 'SaaS', 'Real Estate', 'Healthcare', 
                  'Marketing Agencies', 'Logistics', 'Fintech', 'Legal', 
                  'Hospitality', 'Education'
                ].map((ind, i) => (
                  <motion.span 
                    key={ind} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-6 py-3 bg-secondary-900 border border-slate-700 rounded-full text-slate-300 hover:text-white hover:border-primary-500 hover:bg-slate-800 transition-all cursor-default"
                  >
                    {ind}
                  </motion.span>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

export default CaseStudies;
import React from 'react';
import { Shield, Lock, Server, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-secondary-900 min-h-screen">
      {/* Mission */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            Democratizing Intelligence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 leading-relaxed"
          >
            We are a team of AI engineers and automation specialists. Our mission is simple: to help businesses scale by removing the bottleneck of human limitations in repetitive tasks. We believe AI isn't about replacing humans, but about empowering them to do higher-value work.
          </motion.p>
        </div>
      </section>

      {/* Security */}
      <section className="bg-slate-950 py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Enterprise-Grade Security</h2>
              <p className="text-slate-400 mb-8">We understand that your data is your most valuable asset. Our systems are built with privacy-first architecture.</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4 group">
                  <div className="bg-primary-500/10 p-2 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                     <Lock className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Data Encryption</h4>
                    <p className="text-sm text-slate-500">AES-256 encryption at rest and TLS 1.3 in transit.</p>
                  </div>
                </li>
                <li className="flex gap-4 group">
                   <div className="bg-primary-500/10 p-2 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                      <Server className="w-6 h-6 text-primary-500 flex-shrink-0" />
                   </div>
                  <div>
                    <h4 className="text-white font-bold">Private Instances</h4>
                    <p className="text-sm text-slate-500">We can deploy models on your own VPC for complete data isolation.</p>
                  </div>
                </li>
                <li className="flex gap-4 group">
                   <div className="bg-primary-500/10 p-2 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                      <Shield className="w-6 h-6 text-primary-500 flex-shrink-0" />
                   </div>
                  <div>
                    <h4 className="text-white font-bold">GDPR & CCPA Compliant</h4>
                    <p className="text-sm text-slate-500">Full compliance with international data protection regulations.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative overflow-hidden shadow-2xl"
            >
               {/* Abstract visual for security */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 grid grid-cols-2 gap-4">
                 <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                   <div className="text-green-400 text-xs font-mono mb-1">STATUS</div>
                   <div className="text-white font-bold">SECURE</div>
                 </div>
                 <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                   <div className="text-slate-500 text-xs font-mono mb-1">UPTIME</div>
                   <div className="text-white font-bold">99.99%</div>
                 </div>
                 <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 col-span-2">
                   <div className="text-slate-500 text-xs font-mono mb-1">ENCRYPTION</div>
                   <div className="text-white font-bold text-xs break-all font-mono">sha256:93840193...</div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: "How long does setup take?", a: "Typical implementation takes 5-10 business days depending on complexity." },
            { q: "Do I need technical skills?", a: "No. We build, host, and maintain everything. You just provide the knowledge base." },
            { q: "Is it expensive?", a: "We offer tiered pricing. Most clients see ROI within the first month by saving on labor costs." },
            { q: "Can it integrate with my CRM?", a: "Yes, we support HubSpot, Salesforce, Pipedrive, and custom APIs." }
          ].map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <h4 className="text-white font-bold mb-2">{faq.q}</h4>
              <p className="text-slate-400 text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
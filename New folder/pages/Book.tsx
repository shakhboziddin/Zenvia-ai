import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Book = () => {
  return (
    <div className="min-h-screen bg-secondary-900 flex flex-col items-center pt-10 pb-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        
        {/* Left Side: Info */}
        <div className="md:w-2/5 bg-slate-900 p-8 md:p-12 border-r border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-indigo-600"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <h1 className="text-3xl font-bold text-white mb-6">Book Your Discovery Call</h1>
          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                <Calendar className="text-primary-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">15-Minute Strategy Session</h3>
                <p className="text-slate-400 text-sm mt-1">We'll map out your automation opportunities and estimate ROI.</p>
              </div>
            </div>
          </div>
          
          <h4 className="text-slate-500 font-bold mb-4 text-xs uppercase tracking-wider">What to expect</h4>
          <ul className="space-y-4">
            {['Workflow Analysis', 'ROI Estimation', 'Custom Demo Plan', 'No Obligation'].map((item, i) => (
              <motion.li 
                key={item} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-center gap-3 text-slate-300 text-sm"
              >
                <CheckCircle className="w-5 h-5 text-primary-500" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side: Calendar/Form Placeholder */}
        <div className="md:w-3/5 p-8 md:p-12 bg-white">
          {/* In a real app, this would be a Calendly embed */}
          <div className="text-center h-full flex flex-col justify-center items-center min-h-[400px]">
             <h2 className="text-slate-900 text-2xl font-bold mb-2">Select a Time</h2>
             <p className="text-slate-500 mb-8">Choose a slot that works for your timezone.</p>
             
             <div className="w-full max-w-md bg-slate-50 rounded-xl border border-slate-200 p-8 mb-6 shadow-inner">
                <div className="space-y-3">
                   <div className="h-10 bg-slate-200 rounded w-3/4 mx-auto animate-pulse"></div>
                   <div className="h-10 bg-slate-200 rounded w-full mx-auto animate-pulse delay-75"></div>
                   <div className="h-10 bg-slate-200 rounded w-5/6 mx-auto animate-pulse delay-150"></div>
                </div>
                <p className="text-slate-400 text-sm mt-4">[Calendly Widget Loading...]</p>
             </div>
             
             <button className="w-full max-w-xs bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
               Confirm Booking
             </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Book;
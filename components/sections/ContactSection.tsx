import React, { useState } from 'react';
import LiveBadge from '../LiveBadge';

const PurpleGradientButton: React.FC<{ children: React.ReactNode; type?: 'button' | 'submit' | 'reset'; className?: string }> = ({ children, type = 'submit', className = '' }) => (
    <button
        type={type}
        className={`relative inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl transition-all duration-300 overflow-hidden ${className} button-glow`}
    >
        <span className="relative z-10">{children}</span>
    </button>
);


const ContactSection: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('contact@zenvia.ai');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you shortly.");
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact" className="py-20 md:py-28 scroll-animate">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="flex justify-center mb-4">
                  <LiveBadge text="Let's Connect" />
                </div>
                 <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Get in Touch</h2>
                <p className="text-lg text-slate-400">
                    Have a project in mind? Let's talk about how we can help you automate and innovate.
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                 <div className="space-y-8 lg:col-span-2">
                     <h3 className="text-2xl font-bold text-slate-100">Contact Details</h3>
                     <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-700">
                        <p className="text-slate-400 mb-2">Email us at</p>
                        <div className="flex items-center justify-between">
                            <a href="mailto:contact@zenvia.ai" className="text-lg font-semibold text-purple-300 hover:text-purple-200">
                                contact@zenvia.ai
                            </a>
                            <button onClick={handleCopy} className="text-sm px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors">
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                     </div>
                 </div>

                <div className="p-8 bg-slate-900/50 backdrop-blur-lg rounded-3xl border border-slate-700 lg:col-span-3">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                            <input type="text" id="name" name="name" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all" />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                            <input type="email" id="email" name="email" required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all" />
                        </div>
                         <div>
                            <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                            <input type="text" id="company" name="company" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                            <textarea id="message" name="message" rows={4} required className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"></textarea>
                        </div>
                        <PurpleGradientButton>Send Message</PurpleGradientButton>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
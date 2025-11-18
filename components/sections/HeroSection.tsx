import React from 'react';

const PurpleGradientButton: React.FC<{ children: React.ReactNode; href?: string; className?: string }> = ({ children, href, className = '' }) => (
    <a
        href={href || '#'}
        className={`relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 rounded-2xl transition-all duration-300 overflow-hidden group ${className} button-glow`}
    >
        <span className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></span>
        <span className="relative z-10">{children}</span>
    </a>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">
        {children}
    </div>
);

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="py-32 md:py-40 min-h-screen flex items-center justify-center scroll-animate">
            <div className="text-center w-full max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                    AI Agents & Intelligent Automation for <br className="hidden md:block" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Modern Businesses.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
                    We design, build, and deploy custom AI agents, automation systems, and smart workflows that save time, reduce costs, and scale operations.
                </p>

                <div className="flex justify-center items-center gap-6 mb-12">
                    <PurpleGradientButton href="#projects">
                        Our Projects
                    </PurpleGradientButton>
                    <a href="#contact" className="px-8 py-4 text-base font-semibold text-slate-200 bg-transparent border-2 border-slate-700 rounded-2xl hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300">
                        Contact Us
                    </a>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4">
                    <Badge>Custom AI Agents</Badge>
                    <Badge>n8n Automation</Badge>
                    <Badge>RAG Document Systems</Badge>
                    <Badge>End-to-End Integrations</Badge>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
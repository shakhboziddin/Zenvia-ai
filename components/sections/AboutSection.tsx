import React from 'react';
import LiveBadge from '../LiveBadge';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-28 scroll-animate">
            <div className="max-w-3xl mx-auto p-8 md:p-12 bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700 glow-shadow">
                <div className="flex justify-center mb-4">
                  <LiveBadge text="Our Mission" />
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 text-center">
                    About Zenvia.ai
                </h2>
                <p className="text-lg text-slate-300 text-center leading-relaxed">
                    Zenvia.ai builds intelligent agents and advanced automation workflows that help businesses operate faster, smarter, and more efficiently. We specialize in connecting AI models with real-world operations through n8n, APIs, and custom integrations.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
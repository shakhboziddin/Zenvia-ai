import React from 'react';
import TechIcon from '../TechIcon';
// Fix: Corrected import path casing from '../Livebadge' to '../LiveBadge'.
import LiveBadge from '../LiveBadge';

const SectionHeader: React.FC<{badge: string, title: string, subtitle: string}> = ({badge, title, subtitle}) => (
    <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex justify-center mb-4">
          <LiveBadge text={badge} />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{title}</h2>
        <p className="text-lg text-slate-400">
            {subtitle}
        </p>
    </div>
);

const TechItem: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-2xl transition-all duration-300 gradient-border">
        <TechIcon name={name} className="h-10 w-10 mb-3" />
        <span className="text-sm text-slate-300 text-center">{name}</span>
    </div>
);

const TechStackSection: React.FC = () => {
    const technologies = [
        "OpenAI",
        "Anthropic Claude",
        "Groq",
        "Python",
        "JavaScript",
        "React",
        "n8n",
        "Notion API",
        "Shopify API",
        "Telegram Bot API",
        "REST APIs",
        "Webhooks",
        "Supabase",
        "Vector DB: Pinecone",
        "Vector DB: Chroma"
    ];

    return (
        <section id="tech-stack" className="py-20 md:py-28 scroll-animate">
            <SectionHeader 
                badge="Tools & Technologies"
                title="Our Technology Stack"
                subtitle="We use a modern, robust stack to build scalable and effective AI solutions."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {technologies.map(tech => (
                    <TechItem key={tech} name={tech} />
                ))}
            </div>
        </section>
    );
};

export default TechStackSection;
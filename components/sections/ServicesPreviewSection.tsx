import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
    <div className="p-8 bg-slate-900/50 backdrop-blur-lg rounded-3xl h-full gradient-border">
        <div className="mb-4 text-purple-400">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-100 mb-3">{title}</h3>
        <p className="text-slate-300">{description}</p>
    </div>
);


const ServicesPreviewSection: React.FC = () => {
    const services = [
        {
            title: "AI Agents",
            description: "Autonomous assistants for sales, support, operations and decision making.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="4" y="12" width="16" height="8" rx="2"/><path d="M4 14h16"/><path d="M12 12v-2a2 2 0 0 0-2-2H8"/></svg>
        },
        {
            title: "Workflow Automation",
            description: "End-to-end n8n pipelines, multi-step workflows, and API integrations.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h2"/><path d="M20 12h2"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M12 8a4 4 0 0 1 4 4"/><path d="M12 16a4 4 0 0 1-4-4"/><path d="M8 12a4 4 0 0 1 4-4"/><path d="M16 12a4 4 0 0 1-4 4"/></svg>
        },
        {
            title: "Document Intelligence",
            description: "RAG, summarization, classification, data extraction, and automated reports.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        }
    ];

    return (
        <section className="py-20 md:py-28 scroll-animate">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(service => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </section>
    );
};

export default ServicesPreviewSection;
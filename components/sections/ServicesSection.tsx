import React from 'react';
import LiveBadge from '../LiveBadge';

interface ServiceCategoryProps {
    title: string;
    services: string[];
}

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

const CheckmarkIcon = () => (
    <svg className="h-6 w-6 text-purple-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, services }) => (
    <div className="p-8 bg-slate-900/50 backdrop-blur-lg rounded-3xl h-full gradient-border">
        <h3 className="text-2xl font-bold text-slate-100 mb-6">{title}</h3>
        <ul className="space-y-4">
            {services.map(service => (
                <li key={service} className="flex items-start space-x-3">
                    <CheckmarkIcon />
                    <span className="text-slate-300">{service}</span>
                </li>
            ))}
        </ul>
    </div>
);


const ServicesSection: React.FC = () => {
    const aiServices = [
        "Custom AI Agents",
        "AI-powered chat assistants",
        "Sales & support automation",
        "Smart decision-making agents"
    ];

    const automationServices = [
        "n8n workflow automation",
        "API integrations",
        "Webhook systems",
        "CRM and SaaS integrations",
        "Business process automation"
    ];

    const documentAiServices = [
        "RAG systems",
        "Document extraction",
        "PDF summarization",
        "Classification",
        "Automated reports"
    ];

    return (
        <section id="services" className="py-20 md:py-28 scroll-animate">
            <SectionHeader 
                badge="Our Capabilities"
                title="What We Do"
                subtitle="We offer a comprehensive suite of services to transform your business with AI and automation."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCategory title="AI Services" services={aiServices} />
                <ServiceCategory title="Automation Services" services={automationServices} />
                <ServiceCategory title="Document AI" services={documentAiServices} />
            </div>
        </section>
    );
};

export default ServicesSection;
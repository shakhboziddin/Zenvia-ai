import React from 'react';
import TechIcon from '../TechIcon';
import LiveBadge from '../LiveBadge';

interface Project {
    title: string;
    tech_icons: string[];
    description: string;
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="p-8 bg-slate-900/50 backdrop-blur-lg rounded-3xl h-full flex flex-col gradient-border">
        <h3 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h3>
        <p className="text-slate-300 mb-6 flex-grow">{project.description}</p>
        <div className="flex items-center space-x-4 mt-auto">
            {project.tech_icons.map(tech => (
                 <div key={tech} className="bg-slate-800/70 p-2 rounded-lg">
                    <TechIcon name={tech} className="h-6 w-6" />
                 </div>
            ))}
        </div>
    </div>
);

const ProjectsSection: React.FC = () => {
    const projects: Project[] = [
        {
            title: "AI Sales Agent",
            tech_icons: ["OpenAI", "n8n", "Notion API"],
            description: "An autonomous sales assistant that qualifies leads, scores them, replies instantly, and logs activity into CRM."
        },
        {
            title: "AI-Powered Customer Support",
            tech_icons: ["Anthropic Claude", "Webhooks", "Supabase"],
            description: "Intelligent support agent that understands user queries, provides instant answers from a knowledge base, and escalates to human agents when necessary."
        },
        {
            title: "Document QA (RAG System)",
            tech_icons: ["Python", "Vector DB: Pinecone", "Groq"],
            description: "Upload PDFs or documents and get accurate answers with citation-backed retrieval, powered by fast inference models."
        },
        {
            title: "E-commerce Automation Suite",
            tech_icons: ["Shopify API", "OpenAI", "n8n"],
            description: "Automated customer replies, product description generator, abandoned-cart follow-ups, and product recommendations."
        },
        {
            title: "Automated Content Creation",
            tech_icons: ["OpenAI", "Python", "React"],
            description: "A pipeline that automatically generates blog posts, social media updates, and marketing copy based on predefined topics and styles."
        },
        {
            title: "Automated Reporting Engine",
            tech_icons: ["Python", "REST APIs", "n8n"],
            description: "Automated data gathering from multiple APIs, analytics, and scheduled branded PDF report generation."
        }
    ];

    return (
        <section id="projects" className="py-20 md:py-28 scroll-animate">
            <SectionHeader 
                badge="Case Studies"
                title="Our Work"
                subtitle="Explore some of the intelligent automation solutions we've delivered for our clients."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
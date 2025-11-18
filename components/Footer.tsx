import React from 'react';

const Logo = () => (
    <div className="flex items-center space-x-3">
        <div className="w-8 h-8 text-white">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#a855f7" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M2 7L12 12L22 7" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M12 22V12" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
        </div>
        <span className="text-xl font-bold tracking-wider text-slate-100">ZENVIA.AI</span>
    </div>
);

const Footer: React.FC = () => {
    const navLinks = ["Home", "Projects", "Services", "Tech Stack", "About", "Contact"];
    
    return (
        <footer className="border-t border-slate-800 mt-20">
            <div className="container mx-auto px-6 md:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                     <Logo />

                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors">
                                {link}
                            </a>
                        ))}
                    </nav>

                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Zenvia.ai. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React, { useState, useEffect } from 'react';

const Logo = () => (
    <div className="flex items-center space-x-3">
        <div className="w-9 h-9 text-white">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.33 3.03L9.21 7.14V15.36L16.33 11.25V3.03Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                <path d="M7.67 8.64L14.79 12.75V20.97L7.67 16.86V8.64Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
            </svg>
        </div>
        <span className="text-xl font-bold tracking-wider text-slate-100">ZENVIA.AI</span>
    </div>
);


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = ["Home", "Projects", "Services", "Tech Stack", "About", "Contact"];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);


    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="w-full max-w-5xl mx-auto flex justify-between items-center p-2 px-6 bg-slate-900/50 backdrop-blur-lg border border-slate-700 rounded-full">
                    <a href="#home" onClick={handleLinkClick}><Logo /></a>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} onClick={handleLinkClick} className="text-sm text-slate-300 hover:text-white transition-colors duration-300">
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative h-8 w-8 text-slate-300 hover:text-white transition-colors" aria-label="Open menu">
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full flex flex-col justify-center items-center space-y-1.5">
                                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                           </div>
                        </button>
                    </div>
                </div>
                
                 {/* Mobile Menu */}
                <div 
                    className={`
                        absolute top-full left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl mt-2
                        md:hidden
                        origin-top transition-all duration-300 ease-in-out
                        ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                    `}
                >
                    <div className="p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-xl">
                        <nav className="flex flex-col items-center space-y-4">
                            {navLinks.map(link => (
                                <a 
                                    key={link} 
                                    href={`#${link.toLowerCase().replace(/ /g, '-')}`} 
                                    onClick={handleLinkClick} 
                                    className="w-full text-center text-lg py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
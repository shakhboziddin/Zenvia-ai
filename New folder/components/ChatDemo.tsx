
import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { motion } from 'framer-motion';

const DemoChat = () => {
  // Start with empty messages
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  // Start with isTyping true to simulate initial connection
  const [isTyping, setIsTyping] = useState(true);
  
  // Ref for the scrollable container, NOT the bottom element
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      // This only scrolls the internal div, never the window
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Effect to simulate the initial "typing" and then showing the welcome message
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
      setMessages([
        { role: 'bot', text: "Hello! I'm Zenvia's AI Assistant. How can I automate your workflow today?" }
      ]);
    }, 2000); // 2 seconds delay for realism

    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI delay and response
    setTimeout(() => {
      let response = "I can help with that! To verify, you're looking to streamline customer support or sales?";
      if (userMsg.toLowerCase().includes('sales')) response = "Great. Our AI Sales Assistant can qualify leads 24/7, book appointments, and sync directly to your CRM. Would you like to see a blueprint?";
      if (userMsg.toLowerCase().includes('support')) response = "Understood. We can deploy an Agent that resolves 80% of tickets instantly using your knowledge base. It frees up your team for complex issues.";
      if (userMsg.toLowerCase().includes('price') || userMsg.toLowerCase().includes('cost')) response = "Our pricing is tailored to your scale, starting with a basic automation tier. We usually see ROI within the first 30 days.";

      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 flex flex-col h-[500px] z-50">
      {/* Header */}
      <div className="bg-slate-900/90 backdrop-blur-md p-4 border-b border-slate-700 flex items-center gap-3 relative overflow-hidden z-50">
        {/* Subtle top highlight */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-50 z-50" ></div>

        <div className="bg-slate-800 p-2 rounded-full relative group">
           <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-md group-hover:bg-primary-500/40 transition-all z-50"></div>
           <Bot className="w-5 h-5 text-primary-400 relative z-10" />
        </div>
        <div>
          <h3 className="font-semibold text-white text-sm tracking-wide z-50">Zenvia Assistant</h3>
          <div className="flex items-center gap-1.5 mt-0.5 z-50">
             <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            <span className="text-xs text-green-400 font-medium">Online</span>
          </div>
        </div>
      </div>

      {/* Chat Area - Attached Ref here */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-800/50 scroll-smooth z-50"
      >
        {messages.map((msg, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-primary-600'}`}>
              {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
            </div>
            <div className={`p-3 rounded-2xl text-sm max-w-[80%] ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-slate-700 text-slate-100 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3"
          >
             <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
              <Bot size={14} />
            </div>
            <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none flex items-center gap-1">
              <motion.div
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.div
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-slate-900 border-t border-slate-700 z-50">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about automations..."
            className="flex-1 bg-slate-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 border border-slate-700 placeholder-slate-500"
          />
          <button 
            onClick={handleSend}
            className="bg-primary-600 hover:bg-primary-500 text-white rounded-lg p-3 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoChat;


import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, className = 'h-8 w-8' }) => {
  const iconProps = {
    className: `${className} text-slate-300`,
    fill: 'currentColor',
    viewBox: '0 0 24 24',
  };

  switch (name) {
    case 'OpenAI':
      return <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.503 18.572a1.59 1.59 0 0 1-1.012.428h-3.414a.846.846 0 0 1-.723-1.242l.666-1.15a.843.843 0 0 0 .12-.66l-1.025-2.83a.837.837 0 0 0-.541-.54l-2.83-1.025a.843.843 0 0 0-.66.12l-1.15.666a.846.846 0 0 1-1.242-.723v-3.414a1.59 1.59 0 0 1 .428-1.012L12 2.497l2.488 2.488a1.59 1.59 0 0 1 .428 1.012v3.414a.846.846 0 0 1-.723 1.242l-.666 1.15a.843.843 0 0 0-.12.66l1.025 2.83a.837.837 0 0 0 .541.54l2.83 1.025a.843.843 0 0 0 .66-.12l1.15-.666a.846.846 0 0 1 1.242.723v3.414c0 .33-.102.646-.285.901zM12 10.155l-1.845-1.845v-2.88h2.88L12 6.345v3.81zM8.43 12L6.585 13.845v2.88h2.88L10.38 15.6v-3.6zm3.57.882l1.845 1.845v2.88h-2.88L9.93 16.5v-3.6zM15.57 12l1.845-1.845v-2.88h-2.88L13.62 8.4v3.6zM12 13.845l-1.845 1.845H7.275l-.915-.915h2.88v-2.88zm8.085-3.81h-2.88v2.88l.915.915h2.88v-2.88zm-3.81 8.085v-2.88h2.88l.915.915v2.88h-2.88zM4.725 12H7.6v-2.88l-.915-.915H3.81v2.88z"/></svg>;
    case 'Anthropic Claude':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5V16h-3v-1.5h3v-5h1.5v5h3V16h-3v1.5h-1.5z"/></svg>;
    case 'Groq':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 13h-2.19c-.31-3.6-3.3-6.5-6.91-6.5-1.88 0-3.6.76-4.88 2.01L7.1 7.1C8.89 5.31 11.3 4.5 13.9 4.5c4.08 0 7.45 3.14 7.9 7.1l-1.7-.01c-.3-2.6-2.4-4.7-5.1-4.7s-4.8 2.1-5.1 4.7H4.5c.45-3.96 3.82-7.1 7.9-7.1 2.6 0 5.01.81 6.8 2.19l-3.59 3.59c.06 0 .12.01.19.01 2.8 0 5.1-2.3 5.1-5.1 0-.6-.1-1.18-.3-1.7h.01c.1.52.2 1.05.2 1.6 0 3.7-3.1 6.8-6.9 6.8s-6.9-3.1-6.9-6.8c0-3.6 2.8-6.5 6.4-6.8v1.7c-2.6.3-4.7 2.4-4.7 5.1s2.1 4.8 4.7 5.1v1.7z"/></svg>;
    case 'Python':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M11.5 13.5v-3h-1v-4h3v-1H12A4 4 0 008 9.5v.5h-1A3.5 3.5 0 003.5 13a.5.5 0 00.5.5H5v1a3.5 3.5 0 003.5 3.5h.5a4 4 0 004-4v-1h3v-1h-3.5zm-3 1a2.5 2.5 0 01-2.5-2.5h1a1.5 1.5 0 001.5 1.5v1zm6.5-6a2.5 2.5 0 012.5 2.5h-1a1.5 1.5 0 00-1.5-1.5v-1z"/><path d="M12.5 10.5v3h1v4h-3v1H12a4 4 0 004-4v-.5h1a3.5 3.5 0 003.5-3.5.5.5 0 00-.5-.5H19v-1a3.5 3.5 0 00-3.5-3.5h-.5a4 4 0 00-4 4v1h3v1h3.5z"/></svg>;
    case 'JavaScript':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 13.5h-2v-7h2v7zm4 0h-2v-7h2v7z"/></svg>;
    case 'React':
      return <svg {...iconProps} viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.5" fill="none"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5" fill="none"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>;
    case 'n8n':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16H8v-8h1.5v8zm3.21-4.71-2.55-2.55.99-.99L12 8.59l2.85-2.85.99.99-2.55 2.55 2.55 2.55-.99.99L12 10.59l-2.85 2.85-.99-.99 2.55-2.55zM16 16h-1.5V8H16v8z"/></svg>;
    case 'Notion API':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M17.41 5H6.59c-.9 0-1.46.89-1.05 1.68l4.41 8.64c.2.39.59.63 1.02.63s.82-.24 1.02-.63l4.41-8.64c.41-.79-.15-1.68-1.05-1.68zM12 13.48L8.15 6h7.7L12 13.48zM6 18h12v1H6z"/></svg>;
    case 'Shopify API':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M19.14 8.28a3.36 3.36 0 00-2.38-1H7.24a3.36 3.36 0 00-2.38 1L3 10.16v.61c0 1.86 1.51 3.37 3.37 3.37h.65v-1.12c0-.8.64-1.45 1.45-1.45h7.06c.8 0 1.45.65 1.45 1.45v1.12h.65c1.86 0 3.37-1.51 3.37-3.37v-.61l-1.86-1.88zM9.53 15.31v-2.14h4.94v2.14H9.53zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>;
    case 'Telegram Bot API':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-1.28.2-1.51l15.59-5.81c.73-.27 1.36.17 1.15.99L18.04 19.3c-.24.93-1.02 1.15-1.7.72l-4.55-3.35-4.3 4.1c-.53.51-1.26.24-1.45-.42z"/></svg>;
    case 'REST APIs':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M13 14h-2v-4h2v4zm2-4h-1v4h1v-4zm-6 4H7v-4h2v4zm8.09.29l-3.23-3.23c-.1-.1-.26-.1-.35 0l-3.23 3.23c-.2.2.08.54.35.54h9.35c.27 0 .55-.34.36-.54zM20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8zm-2 0c0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6 6-2.69 6-6z"/></svg>;
    case 'Webhooks':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M14 9V6c0-2.21-1.79-4-4-4S6 3.79 6 6v3h2V6c0-1.1.9-2 2-2s2 .9 2 2v3h4zm-4 4v5h4v-5h-4zM4 11v10h16V11H4zm2 2h12v6H6v-6z"/></svg>;
    case 'Supabase':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12.24 2.2a1 1 0 00-.48 0L3.2 6.81a1 1 0 00-.7.94v8.5a1 1 0 00.7.94l8.56 4.61a1 1 0 00.99 0l8.56-4.61a1 1 0 00.7-.94v-8.5a1 1 0 00-.7-.94L12.24 2.2zM12 4.07l6.84 3.68-3.61 1.94-6.84-3.68L12 4.07zm-7.56 4.3L12 12.3v7.63l-7.56-4.07V8.37z"/></svg>;
    case 'Vector DB: Pinecone':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 11.5L2 17l10 5 10-5-10-5.5zM2 12l10 5v-5.5L2 6.5V12z"/></svg>;
    case 'Vector DB: Chroma':
      return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8c1.53 0 2.94.43 4.15 1.18L14.3 7.03C13.6 6.69 12.83 6.5 12 6.5c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5c.83 0 1.6-.19 2.3-.53l1.85 1.85C14.94 19.57 13.53 20 12 20zm5.85-4.15L16 14.3c.34-.7.53-1.47.53-2.3 0-3.04-2.46-5.5-5.5-5.5-1.02 0-1.96.28-2.77.77L6.91 5.85C8.47 4.7 10.16 4 12 4c4.42 0 8 3.58 8 8 0 1.84-.62 3.53-1.66 4.88l-1.49-1.49z"/></svg>;
    default:
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" />
          <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
  }
};

export default TechIcon;

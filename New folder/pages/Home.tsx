import React, { useState } from "react";
import { Send, Bot } from "lucide-react";

const DemoChat = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! I'm your AI Agent. How can I help automate your workflow today?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Got it! I'll take care of that for you." },
      ]);
    }, 700);
  };

  return (
    <div className="relative z-[50]">
      <div className="w-[380px] h-[500px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-700 bg-slate-800 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          <span className="text-white font-semibold text-sm flex items-center gap-2">
            <Bot size={16} /> AI Assistant
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[80%] p-3 rounded-xl text-sm ${
                msg.from === "bot"
                  ? "bg-slate-800 text-white"
                  : "bg-primary-600 text-white ml-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-700 bg-slate-800 flex gap-2">
          <input
            className="flex-1 bg-slate-900 text-white px-3 py-2 rounded-lg outline-none border border-slate-700 focus:border-primary-500"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-primary-600 hover:bg-primary-500 px-4 rounded-lg text-white flex items-center justify-center"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoChat;

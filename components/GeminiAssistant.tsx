
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Hi! I'm the Maxx Roofing Assistant. Have questions about your roof, shingles, or potential leaks? Ask me anything!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      // Fix: Follow guidelines by creating a new instance right before use and using process.env.API_KEY directly
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Fix: Use the chat API to maintain history and system instructions correctly
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are a professional, friendly assistant for Maxx Roofing. 
          Your goal is to answer homeowner questions about roofing technical details, leak signs, and shingle types. 
          Keep answers concise and professional. 
          Always emphasize that while you can provide information, a professional on-site inspection from Maxx Roofing is the only way to be sure. 
          If a user asks about pricing, explain that it varies by material and square footage, and suggest they book a free estimate via the form on the site.
          The company name is Maxx Roofing. They do repairs, replacements, and gutters.`,
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const response = await chat.sendMessage({ message: userMessage });
      const text = response.text || "I'm sorry, I'm having trouble connecting right now. Please call us at (555) 123-4567 for immediate assistance.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a technical glitch, but we are still here to help! Please call our office." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110 active:scale-95 border-2 border-red-600/50"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-44 right-6 md:bottom-28 md:right-8 z-50 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-xs font-bold">M</div>
              <div>
                <h4 className="font-bold text-sm">Maxx Assistant</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-[10px] text-slate-400">AI Powered Expert</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-red-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-200 shadow-sm rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl border border-slate-200 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about leak signs..."
              className="flex-1 px-4 py-2 bg-slate-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-red-100 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;

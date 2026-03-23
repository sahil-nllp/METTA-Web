import { useState, useRef, useEffect } from 'react';
import './AISupport.css';

interface Message {
  id: string;
  role: 'user' | 'ai';
  text: string;
}

const INITIAL_MESSAGES: Message[] = [
  { id: '1', role: 'ai', text: "Hey there. I'm Metta AI. Ask me about cravings, healthy swaps, or meal ideas." }
];

export default function AISupport() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const fetchAIResponse = async (history: Message[], newUserMsg: string) => {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      
      if (!apiKey || apiKey === 'your_api_key_here') {
        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'ai', text: "Hey! Please add your Groq API key to the .env file (VITE_GROQ_API_KEY) and restart the server to chat." }]);
        setIsTyping(false);
        return;
      }

      const systemPrompt = "You are Metta AI, an elegant, concise, and helpful assistant for a modern weight-loss and healthy eating platform called Metta. Focus on delicious, high-quality, crave-worthy meals instead of strict diets or calorie counting. Keep your answers short, warm, and highly practical (1-3 sentences max).";

      const apiMessages = [
        { role: 'system', content: systemPrompt },
        ...history.map(m => ({ role: m.role === 'ai' ? 'assistant' : 'user', content: m.text })),
        { role: 'user', content: newUserMsg }
      ];

      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: apiMessages,
            temperature: 0.7,
            max_tokens: 200
          })
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => null);
          throw new Error(errorData?.error?.message || `API error: ${res.status}`);
        }
        
        const data = await res.json();
        const replyText = data.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'ai', text: replyText }]);
      } catch (err: any) {
        console.error(err);
        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'ai', text: `Error: ${err.message}` }]);
      } finally {
        setIsTyping(false);
      }
    };

    fetchAIResponse(messages, input.trim());
  };

  return (
    <section className="section ai-support">
      <div className="ai-bg-glow" />
      <div className="container ai-inner">
        <div className="ai-text">
          <span className="label reveal">Intelligent Support</span>
          <h2 className="ai-title reveal delay-1">
            Have questions?<br />
            <em>Metta has<br />your answers.</em>
          </h2>
          <p className="ai-desc reveal delay-2">
            Get real-time help with cravings, ingredient swaps, eating out, meal suggestions, and general health guidance — all in one place.
          </p>
        </div>

        <div className="ai-chat-container reveal delay-2">
          <div className="ai-chat-header">
            <div className="ai-chat-status">
              <span className="ai-status-pulse" />
              Metta Assistant
            </div>
            <div className="ai-chat-badge">Online</div>
          </div>
          
          <div className="ai-chat-scroll" ref={chatScrollRef}>
            <div className="ai-chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`ai-message-row ${msg.role}`}>
                  {msg.role === 'ai' && (
                    <div className="ai-avatar">M</div>
                  )}
                  <div className={`ai-bubble ${msg.role}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="ai-message-row ai">
                  <div className="ai-avatar">M</div>
                  <div className="ai-bubble typing">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <form className="ai-chat-input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="ai-input"
              disabled={isTyping}
            />
            <button type="submit" disabled={!input.trim() || isTyping} className="ai-send-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

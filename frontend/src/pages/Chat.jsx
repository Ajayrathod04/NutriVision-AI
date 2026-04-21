import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Loader2, Bot, User } from "lucide-react";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hello! I am NutriVision AI. How can I help you with your nutrition goals today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://nutrivision-backend-295594191663.us-central1.run.app";

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input || loading) return;
    
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/ask-ai`, { prompt: input });
      setMessages(prev => [...prev, { role: "ai", content: res.data.data }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "ai", content: "I'm having trouble connecting to my brain right now. But generally, eating more whole foods is always a good idea!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ maxWidth: "800px", margin: "0 auto", height: "calc(100vh - 200px)", display: "flex", flexDirection: "column" }}>
      <div className="glass-card" style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ alignSelf: msg.role === "ai" ? "flex-start" : "flex-end", maxWidth: "80%", display: "flex", gap: "10px", alignItems: "flex-start", flexDirection: msg.role === "ai" ? "row" : "row-reverse" }}>
            <div style={{ width: "35px", height: "35px", borderRadius: "10px", background: msg.role === "ai" ? "rgba(99, 102, 241, 0.2)" : "rgba(168, 85, 247, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {msg.role === "ai" ? <Bot size={20} color="#818cf8" /> : <User size={20} color="#c084fc" />}
            </div>
            <div style={{ background: msg.role === "ai" ? "rgba(255,255,255,0.03)" : "var(--primary)", padding: "12px 18px", borderRadius: "18px", borderBottomLeftRadius: msg.role === "ai" ? 0 : "18px", borderBottomRightRadius: msg.role === "user" ? 0 : "18px", fontSize: "0.95rem" }}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ alignSelf: "flex-start", opacity: 0.7 }}><Loader2 className="animate-spin" /></div>
        )}
        <div ref={scrollRef} />
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <input 
          placeholder="Ask NutriVision AI..." 
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          style={{ marginBottom: 0, borderRadius: "15px" }}
        />
        <button onClick={sendMessage} disabled={loading} style={{ width: "50px", height: "50px", padding: 0, borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Send size={20} />
        </button>
      </div>
    </motion.div>
  );
}

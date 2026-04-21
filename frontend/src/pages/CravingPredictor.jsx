import { motion } from "framer-motion";
import { Zap, AlertTriangle, Coffee, Pizza } from "lucide-react";

export default function CravingPredictor() {
  const hour = new Date().getHours();
  
  const getPrediction = () => {
    if (hour >= 15 && hour <= 17) return {
        type: "Sugar Craving",
        probability: "High (85%)",
        reason: "Afternoon cortisol dip & energy slump.",
        suggestion: "Eat an apple or 5 almonds now to block the craving.",
        icon: <Zap color="#f59e0b" />
    };
    if (hour >= 20) return {
        type: "Late Night Salty Craving",
        probability: "Medium (60%)",
        reason: "Habitual relaxation response.",
        suggestion: "Drink a glass of herbal tea or water.",
        icon: <Pizza color="#ef4444" />
    };
    return {
        type: "Energy Levels Stable",
        probability: "Low Craving Risk",
        reason: "Post-nutrient absorption phase.",
        suggestion: "Stay hydrated to maintain current momentum.",
        icon: <Coffee color="#10b981" />
    };
  };

  const pred = getPrediction();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{maxWidth: "600px", margin: "0 auto"}}>
      <div style={{textAlign: "center", marginBottom: "30px"}}>
        <Zap size={48} color="#6366f1" style={{marginBottom: "15px"}} />
        <h2>Neural Craving Predictor</h2>
        <p style={{color: "#94a3b8"}}>Predicting behavioral impulses based on metabolic cycles.</p>
      </div>

      <div className="glass-card" style={{textAlign: "center", border: "2px solid rgba(99, 102, 241, 0.2)"}}>
        <div style={{background: "rgba(99, 102, 241, 0.1)", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px"}}>
          {pred.icon}
        </div>
        <h1 style={{fontSize: "2rem", marginBottom: "5px"}}>{pred.type}</h1>
        <div className="status-badge" style={{marginBottom: "20px"}}>
            Probability: {pred.probability}
        </div>
        
        <div style={{textAlign: "left", background: "rgba(0,0,0,0.2)", padding: "20px", borderRadius: "15px"}}>
            <p style={{marginBottom: "10px"}}><strong>Reasoning:</strong> {pred.reason}</p>
            <p><strong>Actionable Suggestion:</strong> {pred.suggestion}</p>
        </div>
      </div>

      <div className="glass-card">
        <h3><AlertTriangle size={18} color="#f59e0b" /> Prevention Strategy</h3>
        <ul style={{marginTop: "10px", paddingLeft: "20px", color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.8"}}>
            <li>Increase protein at previous meal</li>
            <li>Sleep quality check (Last night: 6.5h)</li>
            <li>Hydration level: 55% (Needs attention)</li>
        </ul>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Zap, Shield, Activity } from "lucide-react";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      style={{ textAlign: "center", paddingTop: "50px" }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ margin: "0 auto 30px", width: "100px", height: "100px", background: "linear-gradient(45deg, #6366f1, #a855f7)", borderRadius: "30%", opacity: 0.2, position: "absolute", left: "50%", marginLeft: "-50px" }}
      ></motion.div>
      
      <Zap size={64} color="#6366f1" style={{ marginBottom: "20px" }} />
      <h1 style={{ fontSize: "3.5rem", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(to right, #818cf8, #c084fc)" }}>
        Predictive Health
      </h1>
      <p style={{ color: "#94a3b8", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 40px" }}>
        NutriVision AI uses advanced intelligence to monitor your nutrition, predict cravings, and guide your journey to peak health.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "50px" }}>
        <div className="glass-card" style={{ width: "200px" }}>
            <Activity color="#ec4899" />
            <h4 style={{marginTop: "10px"}}>AI Insights</h4>
        </div>
        <div className="glass-card" style={{ width: "200px" }}>
            <Shield color="#10b981" />
            <h4 style={{marginTop: "10px"}}>Secure Data</h4>
        </div>
      </div>

      <button 
        onClick={() => navigate("/dashboard")}
        style={{ fontSize: "1.2rem", padding: "16px 48px", borderRadius: "30px" }}
      >
        Get Started
      </button>
    </motion.div>
  );
}

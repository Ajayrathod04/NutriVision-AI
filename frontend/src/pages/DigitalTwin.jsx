import { motion } from "framer-motion";
import { User, Activity, Brain, Heart } from "lucide-react";

export default function DigitalTwin() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{maxWidth: "900px", margin: "0 auto"}}>
      <h2 style={{textAlign: "center", marginBottom: "30px"}}>Biological Digital Twin</h2>

      <div style={{display: "flex", flexWrap: "wrap", gap: "25px"}}>
        <div style={{flex: "1 1 300px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="glass-card" style={{width: "280px", height: "450px", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px"}}>
                <motion.div 
                    animate={{ scale: [1, 1.05, 1] }} 
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{width: "150px", height: "150px", background: "radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}
                >
                    <User size={80} color="#818cf8" />
                </motion.div>
                <div style={{textAlign: "center"}}>
                    <h3 style={{margin: 0}}>Predictive Profile</h3>
                    <p style={{fontSize: "0.8rem", color: "#94a3b8"}}>Bio-Sync: Active</p>
                </div>
                
                {/* Floaties */}
                <motion.div animate={{y: [0, -10, 0]}} transition={{duration: 4, repeat: Infinity}} style={{position: "absolute", top: "40px", right: "20px", background: "rgba(16, 185, 129, 0.1)", padding: "5px 10px", borderRadius: "10px", fontSize: "0.7rem", border: "1px solid #10b981"}}>Metabolic: High</motion.div>
                <motion.div animate={{y: [0, 10, 0]}} transition={{duration: 3, repeat: Infinity}} style={{position: "absolute", bottom: "100px", left: "20px", background: "rgba(236, 72, 153, 0.1)", padding: "5px 10px", borderRadius: "10px", fontSize: "0.7rem", border: "1px solid #ec4899"}}>Fiber: Low</motion.div>
            </div>
        </div>

        <div style={{flex: "2 1 400px"}}>
            <div className="glass-card">
                <h3><Activity size={18} /> Behavior Score: 88/100</h3>
                <p style={{color: "#94a3b8", fontSize: "0.9rem"}}>Your biological twin is performing better than 82% of users in your age group.</p>
            </div>

            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px"}}>
                <div className="glass-card">
                    <Heart color="#ef4444" size={20} />
                    <h4 style={{marginTop: "10px"}}>Vitality</h4>
                    <p style={{fontSize: "1.2rem", fontWeight: 700}}>High</p>
                </div>
                <div className="glass-card">
                    <Brain color="#3b82f6" size={20} />
                    <h4 style={{marginTop: "10px"}}>Focus</h4>
                    <p style={{fontSize: "1.2rem", fontWeight: 700}}>Stable</p>
                </div>
            </div>

            <div className="glass-card">
                <h3>7-Day Prediction</h3>
                <div style={{padding: "15px", background: "rgba(0,0,0,0.2)", borderRadius: "15px"}}>
                    <p style={{fontSize: "0.9rem", color: "#cbd5e1"}}>
                        Based on existing patterns, your twin predicts <strong>weight plateauing</strong> in 4 days unless protein intake increases by 15g daily.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

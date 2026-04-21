import { motion } from "framer-motion";
import { 
  Zap, Calendar, Coffee, Droplets, Target, TrendingUp 
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Health Score", value: "92", icon: <Zap color="#f59e0b" />, color: "rgba(245, 158, 11, 0.1)" },
    { label: "Calories", value: "1,240 / 2,100", icon: <TrendingUp color="#10b981" />, color: "rgba(16, 185, 129, 0.1)" },
    { label: "Water", value: "1.2L / 2L", icon: <Droplets color="#3b82f6" />, color: "rgba(59, 130, 246, 0.1)" },
    { label: "Streak", value: "12 Days", icon: <Calendar color="#ec4899" />, color: "rgba(236, 72, 153, 0.1)" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header style={{ marginBottom: "30px" }}>
        <h2>Good Morning, Ajay</h2>
        <p style={{ color: "#94a3b8" }}>You are on a 12-day health streak! Keep it up.</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "30px" }}>
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            className="glass-card" 
            whileHover={{ scale: 1.05 }}
            style={{ textAlign: "center" }}
          >
            <div style={{ background: stat.color, padding: "10px", borderRadius: "12px", width: "fit-content", margin: "0 auto 15px" }}>
              {stat.icon}
            </div>
            <p style={{ fontSize: "0.9rem", color: "#94a3b8" }}>{stat.label}</p>
            <h3 style={{ margin: 0 }}>{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        <div className="glass-card">
          <div style={{display: "flex", justifyContent: "space-between", marginBottom: "15px"}}>
            <h3>Recent Meals</h3>
            <button style={{padding: "4px 10px", fontSize: "0.8rem"}}>View All</button>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <div style={{display: "flex", alignItems: "center", gap: "15px", padding: "10px", background: "rgba(255,255,255,0.02)", borderRadius: "12px"}}>
                <div style={{width: "40px", height: "40px", background: "#334155", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center"}}><Coffee size={20}/></div>
                <div style={{flex: 1}}>
                    <p style={{fontWeight: 600}}>Energy Breakfast</p>
                    <p style={{fontSize: "0.8rem", color: "#64748b"}}>8:30 AM • 450 kcal</p>
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "15px", padding: "10px", background: "rgba(255,255,255,0.02)", borderRadius: "12px"}}>
                <div style={{width: "40px", height: "40px", background: "#334155", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center"}}><Target size={20}/></div>
                <div style={{flex: 1}}>
                    <p style={{fontWeight: 600}}>Power Lunch</p>
                    <p style={{fontSize: "0.8rem", color: "#64748b"}}>1:00 PM • 680 kcal</p>
                </div>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h3>Health Insights</h3>
          <p style={{fontSize: "0.9rem", lineHeight: "1.5", color: "#cbd5e1"}}>
            Based on your activity, you're likely to experience a <strong>Sugar Crash</strong> around 4:00 PM. We suggest having an apple or protein bar at 3:30 PM.
          </p>
          <div style={{marginTop: "20px", padding: "10px", borderLeft: "4px solid #6366f1", background: "rgba(99, 102, 241, 0.05)" }}>
            <p style={{fontSize: "0.8rem", color: "#818cf8"}}>AI SUGGESTION:</p>
            <p style={{fontSize: "0.9rem"}}>Increase fiber intake by 20% today.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

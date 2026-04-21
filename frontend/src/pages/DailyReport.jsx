import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import axios from "axios";

export default function DailyReport() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const meals = [
            { name: "Breakfast", calories: 400 },
            { name: "Lunch", calories: 700 },
            { name: "Snack", calories: 150 }
        ];
        const res = await axios.post(`${BACKEND_URL}/daily-report`, { meals, goals: "Lose weight" });
        setReport(res.data);
      } catch (err) {
        setReport({
            deterministic: "DAILY SUMMARY: Meals Logged: 3, Total Calories: 1250. Status: On Track.",
            ai_insight: "AI Analysis unavailable. Stay consistent with your diet."
        });
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  }, []);

  if (loading) return <div style={{textAlign: "center", paddingTop: "100px"}}><Loader2 className="animate-spin" size={40} color="#6366f1" /></div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{maxWidth: "800px", margin: "0 auto"}}>
      <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "30px"}}>
        <BarChart color="#6366f1" />
        <h2 style={{margin: 0}}>Predictive Performance Report</h2>
      </div>

      <div className="glass-card">
        <h3><CheckCircle size={18} color="#10b981" /> System Metrics</h3>
        <pre style={{ whiteSpace: "pre-wrap", fontStyle: "italic", color: "#cbd5e1", marginTop: "10px", padding: "15px", background: "rgba(0,0,0,0.2)", borderRadius: "10px" }}>
            {report.deterministic}
        </pre>
      </div>

      <div className="glass-card" style={{borderLeft: "5px solid #a855f7"}}>
        <h3><Zap size={18} color="#a855f7" /> AI Intelligence Layer</h3>
        <p style={{lineHeight: "1.6", color: "#e2e8f0", marginTop: "10px"}}>
            {report.ai_insight}
        </p>
      </div>

      <div className="glass-card">
        <h3>Efficiency Breakdown</h3>
        <div style={{marginTop: "15px", display: "flex", flexDirection: "column", gap: "10px"}}>
            {[
                {label: "Protein", val: "70%", color: "#6366f1"},
                {label: "Carbs", val: "50%", color: "#ec4899"},
                {label: "Fats", val: "30%", color: "#f59e0b"}
            ].map((p, i) => (
                <div key={i}>
                    <div style={{display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "5px"}}>
                        <span>{p.label}</span>
                        <span>{p.val}</span>
                    </div>
                    <div style={{width: "100%", height: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "10px", overflow: "hidden"}}>
                        <motion.div 
                            initial={{width: 0}} 
                            animate={{width: p.val}} 
                            transition={{duration: 1, delay: i*0.2}}
                            style={{height: "100%", background: p.color}}
                        />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

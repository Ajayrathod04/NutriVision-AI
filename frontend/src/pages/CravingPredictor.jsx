import { motion } from "framer-motion";
import { Zap, AlertTriangle, Coffee, Pizza, Sparkles, Brain, ArrowRight, Info } from "lucide-react";

console.log("Rendering: CravingPredictor");

export default function CravingPredictor() {
  if (!CravingPredictor) return <div>Syncing Neural Centers...</div>;
  const hour = new Date().getHours();
  
  const getPrediction = () => {
    if (hour >= 15 && hour <= 17) return {
        type: "Sugar Spike Impulse",
        probability: 85,
        reason: "Afternoon cortisol dip paired with low glycemic load from previous meal.",
        suggestion: "Consume 15g of healthy fats (e.g. Walnuts) now to stabilize insulin.",
        icon: <Zap color="#f59e0b" />
    };
    if (hour >= 20) return {
        type: "Evening Hedonic Craving",
        probability: 60,
        reason: "Circadian rhythm shifting to carbohydrate storage mode.",
        suggestion: "Deep breathing (5 mins) to activate parasympathetic system.",
        icon: <Pizza color="#ef4444" />
    };
    return {
        type: "Metabolic Equilibrium",
        probability: 15,
        reason: "Hormone ghrelin is currently suppressed.",
        suggestion: "Maintain hydration to preserve current cognitive focus.",
        icon: <Coffee color="#22c55e" />
    };
  };

  const pred = getPrediction();

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in p-2 md:p-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-2xl border border-primary/30">
                <Brain className="text-primary" size={28} />
            </div>
            <div>
                <h2 className="text-2xl font-bold">Predictive Impulse Engine</h2>
                <p className="text-gray-400 text-sm">Forecasting neural cravings based on bio-rhythms.</p>
            </div>
        </div>
        <div className="status-badge bg-accent/10 border border-accent/20 text-accent flex items-center gap-2 px-4 py-2 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Sync Active
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
            <motion.div 
                whileHover={{ scale: 1.01 }}
                className="glass-card p-10 text-center relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles size={120} />
                </div>
                
                <div className="w-20 h-20 bg-dark rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-emerald-500/20 shadow-2xl">
                    {pred.icon}
                </div>
                
                <h3 className="text-4xl font-black mb-4 tracking-tight">{pred.type}</h3>
                
                <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
                    <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">PROBABILITY</span>
                    <span className={`text-xl font-black ${pred.probability > 70 ? 'text-red-400' : 'text-accent'}`}>{pred.probability}%</span>
                </div>

                <div className="text-left p-6 bg-black/40 rounded-3xl border border-white/5">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">
                        <Info size={14} /> Core Reasoning
                    </h4>
                    <p className="text-gray-200 leading-relaxed">{pred.reason}</p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-6 border-l-4 border-accent">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Zap size={18} className="text-accent" /> Immediate Block
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{pred.suggestion}</p>
                </div>
                <div className="glass-card p-6 border-l-4 border-primary">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                        <AlertTriangle size={18} className="text-primary" /> Secondary Mitigation
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">Ensure magnesium levels are adequate to naturally suppress glucose impulses.</p>
                </div>
            </div>
        </div>

        <div className="space-y-6">
            <div className="glass-card p-6 h-full flex flex-col">
                <h4 className="text-sm font-bold text-gray-500 mb-6 tracking-widest uppercase text-center">PREVENTION STACK</h4>
                <div className="space-y-6 flex-1">
                    {[
                        { label: "Protein Load", status: "Optimal", color: "text-accent" },
                        { label: "Sleep Sync", status: "Suboptimal", color: "text-red-400" },
                        { label: "Glucose Delta", status: "Stable", color: "text-accent" },
                        { label: "Bio-Sync", status: "92%", color: "text-primary" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between group cursor-help">
                            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item.label}</span>
                            <span className={`text-sm font-bold ${item.color}`}>{item.status}</span>
                        </div>
                    ))}
                </div>
                <button className="mt-8 w-full border border-white/5 bg-white/5 py-4 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold hover:bg-white/10 transition-all">
                    View Mitigation Plan <ArrowRight size={16} />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

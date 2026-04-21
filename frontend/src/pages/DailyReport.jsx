import { motion } from "framer-motion";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie
} from "recharts";
import { 
  TrendingDown, TrendingUp, AlertCircle, Sparkles, CheckCircle2, Clock
} from "lucide-react";

const nutritionData = [
  { name: "Protein", current: 85, target: 120, unit: "g" },
  { name: "Carbs", current: 210, target: 180, unit: "g" },
  { name: "Fats", current: 45, target: 65, unit: "g" },
];

const timeline = [
  { time: "08:15 AM", event: "Breakfast Logged", status: "Healthy", cals: "+350" },
  { time: "11:30 AM", event: "Craving Blocked", status: "Success", cals: "0" },
  { time: "01:20 PM", event: "Lunch Logged", status: "Moderate", cals: "+620" }
];

export default function DailyReport() {
  return (
    <div className="space-y-8 animate-in p-2 md:p-6 pb-20">
      <header className="flex items-center gap-4 border-b border-white/5 pb-6">
        <div className="bg-primary/20 p-3 rounded-2xl">
            <Sparkles className="text-primary" />
        </div>
        <div>
            <h2 className="text-2xl font-bold">Comprehensive Daily Audit</h2>
            <p className="text-gray-400 text-sm">Bio-intelligence report for 21 April 2026.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            {/* Macro Summary */}
            <div className="glass-card p-8">
                <h3 className="font-bold mb-6 flex items-center gap-2"><TrendingUp size={18} className="text-accent" /> Macro-Nutrient Sync</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {nutritionData.map((macro, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{macro.name}</span>
                            <div className="flex items-end gap-2 my-2">
                                <h4 className="text-xl font-bold">{macro.current}{macro.unit}</h4>
                                <span className="text-xs text-gray-500 mb-1">/ {macro.target}{macro.unit}</span>
                            </div>
                            <div className="w-full h-1 bg-dark rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(macro.current / macro.target) * 100}%` }}
                                    className={`h-full ${macro.current > macro.target ? 'bg-red-500' : 'bg-accent'}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Event Timeline */}
            <div className="glass-card p-8">
                <h3 className="font-bold mb-8 flex items-center gap-2"><Clock size={18} className="text-primary" /> Activity Timeline</h3>
                <div className="space-y-6 relative ml-4 border-l border-white/10 pl-8">
                    {timeline.map((item, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative"
                        >
                            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-dark ring-2 ring-accent/20" />
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-white mb-1">{item.event}</h4>
                                    <span className="text-xs text-gray-400 font-medium uppercase tracking-tighter">{item.time} • Status: <span className="text-accent">{item.status}</span></span>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold text-gray-300">{item.cals} kcal</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* AI Recommendations Side */}
        <div className="space-y-8">
            <div className="glass-card p-8 bg-accent/5 border-primary/20">
                <h3 className="font-bold mb-6 flex items-center gap-2 text-primary font-bold"><CheckCircle2 size={18} /> Optimization List</h3>
                <div className="space-y-4">
                    {[
                        "Increase hydration by 400ml",
                        "Restrict carbs in next meal",
                        "15-min light cardio suggested",
                        "Bio-sync audit complete"
                    ].map((tip, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl text-sm text-gray-300 hover:text-white transition-colors">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {tip}
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-card p-8 text-center border-l-4 border-yellow-500">
                <AlertCircle size={30} className="mx-auto mb-4 text-yellow-500" />
                <h4 className="font-bold mb-2">Nutritional Gap Detected</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                    Fiber intake is currently 40% below optimal metabolic threshold. Recommend immediate walnut or flaxseed ingestion.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

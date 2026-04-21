import { motion } from "framer-motion";
import { User, Activity, Heart, Zap, Sparkles, TrendingUp, Info } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const predictionData = [
  { day: "Today", score: 85 },
  { day: "+2 Days", score: 88 },
  { day: "+4 Days", score: 82 },
  { day: "+1 Week", score: 91 },
  { day: "+2 Weeks", score: 95 },
];

export default function DigitalTwin() {
  return (
    <div className="space-y-8 animate-in p-2 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Bio-Card */}
        <div className="lg:col-span-1">
            <div className="glass-card p-8 h-full flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5"><Zap size={200} /></div>
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center border-4 border-primary/30 mb-6 shadow-2xl shadow-primary/20">
                    <User size={60} className="text-primary" />
                </div>
                <h3 className="text-2xl font-black mb-2">Ajay Rathod</h3>
                <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-xs font-bold border border-accent/20 mb-8 uppercase tracking-widest">BIO-SYNC: OPTIMIZED</span>
                
                <div className="w-full space-y-4">
                    {[
                        { label: "Behavioral Score", value: "92/100", color: "bg-accent" },
                        { label: "Hydration Status", value: "Optimal", color: "bg-blue-500" },
                        { label: "Neural Recovery", value: "78%", color: "bg-primary" },
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-400">{item.label}</span>
                                <span className="text-sm font-bold text-white">{item.value}</span>
                            </div>
                            <div className="w-full h-1.5 bg-dark rounded-full overflow-hidden">
                                <div className={`h-full ${item.color}`} style={{ width: "85%" }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Intelligence Overlay */}
        <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-8">
                    <TrendingUp className="text-accent" />
                    <h3 className="text-xl font-bold">Predictive Metabolic Path</h3>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={predictionData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" />
                            <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                            <YAxis hide />
                            <Tooltip contentStyle={{ backgroundColor: "#1e1b4b", border: "1px solid #ffffff10", borderRadius: "12px" }} />
                            <Line type="monotone" dataKey="score" stroke="#22c55e" strokeWidth={4} dot={{ r: 6, fill: "#22c55e" }} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-6 bg-yellow-500/5 border-l-4 border-yellow-500">
                    <div className="flex items-center gap-2 mb-4">
                        <Zap size={18} className="text-yellow-500" />
                        <h4 className="font-bold">Risk Factors</h4>
                    </div>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li>• Low glycemic fiber intake</li>
                        <li>• Elevated cognitive load (PM)</li>
                    </ul>
                </div>
                <div className="glass-card p-6 bg-accent/5 border-l-4 border-accent">
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={18} className="text-accent" />
                        <h4 className="font-bold">Digital Evolution</h4>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Bio-model predicts 12% increase in cognitive focus if 2 glasses of antioxidant tea are added.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

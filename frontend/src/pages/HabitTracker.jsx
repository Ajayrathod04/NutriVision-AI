import { motion } from "framer-motion";
import { 
  CheckCircle2, Circle, TrendingUp, Zap, Calendar, Target, Plus
} from "lucide-react";
import { useState } from "react";

export default function HabitTracker() {
  const [habits, setHabits] = useState([
    { id: 1, name: "Early Hydration (500ml)", completed: true, streak: 12 },
    { id: 2, name: "Post-Lunch Walk (15m)", completed: false, streak: 4 },
    { id: 3, name: "No Sugar After 8PM", completed: true, streak: 8 },
    { id: 4, name: "Fiber Integration", completed: false, streak: 0 },
  ]);

  const toggleHabit = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in p-2 md:p-6 pb-20">
      <header className="flex justify-between items-end border-b border-white/5 pb-8">
        <div>
            <h2 className="text-3xl font-black">Habit Intelligence</h2>
            <p className="text-gray-400 mt-2">Consistent behavioral loops yield maximum biological ROI.</p>
        </div>
        <button className="btn-primary py-2 px-4 text-xs font-bold bg-primary/20 hover:bg-primary/30 border border-primary/20">
            <Plus size={16} /> New Neuro-Track
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Habit List */}
        <div className="lg:col-span-2 space-y-4">
            {habits.map((habit, i) => (
                <motion.div 
                    key={habit.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => toggleHabit(habit.id)}
                    className={`glass-card p-6 flex items-center justify-between cursor-pointer group transition-all ${habit.completed ? 'bg-accent/5 border-accent/20' : ''}`}
                >
                    <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${habit.completed ? 'bg-accent border-accent' : 'border-white/10 group-hover:border-primary'}`}>
                            {habit.completed && <CheckCircle2 size={16} className="text-white" />}
                        </div>
                        <div>
                            <h4 className={`font-bold transition-all ${habit.completed ? 'text-accent line-through opacity-60' : 'text-white'}`}>{habit.name}</h4>
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Active Streak: {habit.streak} Days</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Efficiency Card */}
        <div className="space-y-6">
            <div className="glass-card p-8 text-center bg-primary/5">
                <div className="w-20 h-20 bg-dark rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-primary/20 shadow-2xl shadow-primary/20">
                    <Zap className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-1">Consistency Force</h3>
                <p className="text-2xl font-black text-white mb-6">84.2%</p>
                <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "84.2%" }}
                        className="h-full bg-primary shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    />
                </div>
            </div>

            <div className="glass-card p-6">
                <h4 className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-4 tracking-widest uppercase">
                    <Target size={14} /> Neuro-Sync Insight
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed italic">
                    "Morning hydration habits are 8x more likely to stick when paired with existing caffeine cues."
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

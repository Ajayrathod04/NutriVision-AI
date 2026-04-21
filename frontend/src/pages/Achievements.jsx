import { motion } from "framer-motion";
import { Trophy, Star, Target, Zap, Heart, Droplets, Flame } from "lucide-react";

console.log("Rendering: Achievements");

const achievements = [
  { title: "🔥 7-Day Streak", icon: "🔥", desc: "Logged meals for a full week", type: "Streak" },
  { title: "🥗 Healthy Eating", icon: "🥗", desc: "Consumed 10 healthy salads", type: "Healthy" },
  { title: "💧 Hydration Quest", icon: "💧", desc: "Met water goal for 5 days", type: "Hydration" },
  { title: "💪 Fitness Warrior", icon: "💪", desc: "Perfect protein balance", type: "Fitness" },
  { title: "🎯 Goal Crusher", icon: "🎯", desc: "Stayed within 50kcal of goal", type: "Goal" },
  { title: "🏆 Milestone Gold", icon: "🏆", desc: "Reached 90+ health score", type: "Milestone" },
];

export default function Achievements() {
  if (!Achievements) return <div>Loading Hall of Fame...</div>;
  return (
    <div className="space-y-8 animate-in p-2 md:p-6 pb-20">
      <header className="flex items-center gap-4">
        <div className="bg-yellow-500/10 p-3 rounded-2xl border border-yellow-500/20">
            <Trophy className="text-yellow-500" size={32} />
        </div>
        <div>
            <h2 className="text-3xl font-black">Your Hall of Fame</h2>
            <p className="text-gray-400">Biological milestones achieved via consistent discipline.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05 }}
            className="glass-card p-8 flex flex-col items-center text-center group"
          >
            <span 
                role="img" 
                aria-label={item.type.toLowerCase()} 
                className="text-5xl mb-6 transform transition-transform group-hover:scale-125 duration-300 block"
            >
                {item.icon}
            </span>
            <h3 className="text-xl font-extrabold mb-2">
                <span role="img" aria-label={item.type.toLowerCase()}>{item.icon}</span> {item.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed italic">"{item.desc}"</p>
            
            <div className="mt-6 pt-6 border-t border-white/5 w-full">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-accent uppercase tracking-widest">
                    <Star size={12} fill="currentColor" /> {item.type} Unlocked
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

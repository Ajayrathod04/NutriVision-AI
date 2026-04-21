import { motion } from "framer-motion";
import { 
  Zap, Calendar, Coffee, Droplets, Target, TrendingUp, AlertCircle, Sparkles, User
} from "lucide-react";
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area
} from "recharts";
import { StatCard, ChartCard } from "../components/DashboardWidgets";

const calorieData = [
  { day: "Mon", calories: 1800 },
  { day: "Tue", calories: 2100 },
  { day: "Wed", calories: 1950 },
  { day: "Thu", calories: 2300 },
  { day: "Fri", calories: 2050 },
  { day: "Sat", calories: 2200 },
  { day: "Sun", calories: 1900 },
];

const mealDist = [
  { name: "Breakfast", value: 350 },
  { name: "Lunch", value: 650 },
  { name: "Dinner", value: 800 },
  { name: "Snacks", value: 250 },
];

export default function Dashboard({ user }) {
  return (
    <div className="space-y-8 animate-in p-2 md:p-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h2 className="text-3xl font-extrabold text-white">Dashboard Overview</h2>
           <p className="text-gray-400 mt-1">Metabolic sync established for {user?.name || "Life Scout"}.</p>
        </div>
        <div className="flex -space-x-3 overflow-hidden">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-dark bg-gray-700 flex items-center justify-center border border-white/10">
                    <User size={16} />
                </div>
            ))}
            <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-dark bg-accent text-xs font-bold border border-white/10">
                +3
            </div>
        </div>
      </header>

      {/* Hero Alert */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-accent/10 border border-accent/20 p-5 rounded-2xl flex items-start gap-4"
      >
        <div className="bg-accent p-2 rounded-lg">
            <Sparkles className="text-white" size={20} />
        </div>
        <div>
            <h4 className="font-bold text-white mb-1">AI Recommendation</h4>
            <p className="text-sm text-gray-300">Your metabolism is peaking. We suggest an intense workout in the next 2 hours for maximum fat-burning efficiency.</p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Health Score" value="94%" icon={Zap} color="bg-yellow-500" trend={12} />
        <StatCard label="Calories Today" value="1,840" icon={Target} color="bg-green-500" trend={2} />
        <StatCard label="Water Intake" value="1.8L" icon={Droplets} color="bg-blue-500" trend={-5} />
        <StatCard label="Active Streak" value="14 Days" icon={Calendar} color="bg-pink-500" />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <ChartCard title="Metabolic Energy (Weekly)">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={calorieData}>
                        <defs>
                            <linearGradient id="colorCals" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                        <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: "#1e1b4b", border: "1px solid #ffffff10", borderRadius: "12px" }} 
                            itemStyle={{ color: "#22c55e" }}
                        />
                        <Area type="monotone" dataKey="calories" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorCals)" />
                    </AreaChart>
                </ResponsiveContainer>
            </ChartCard>
        </div>
        <div>
            <ChartCard title="Daily Distribution">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mealDist}>
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis hide />
                        <Tooltip 
                            cursor={{ fill: '#ffffff05' }}
                            contentStyle={{ backgroundColor: "#1e1b4b", border: "1px solid #ffffff10", borderRadius: "12px" }}
                        />
                        <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                            {mealDist.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 2 ? "#22c55e" : "#6366f1"} opacity={0.8} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </ChartCard>
        </div>
      </div>
    </div>
  );
}

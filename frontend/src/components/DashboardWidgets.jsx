import { motion } from "framer-motion";

export const StatCard = ({ label, value, icon: Icon, color, trend }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="glass-card p-6 flex items-center justify-between"
  >
    <div>
      <p className="text-sm font-medium text-gray-400 mb-1">{label}</p>
      <h3 className="text-2xl font-bold text-white">{value}</h3>
      {trend && (
        <span className={`text-xs font-bold ${trend > 0 ? "text-accent" : "text-red-400"}`}>
          {trend > 0 ? "+" : ""}{trend}% from last week
        </span>
      )}
    </div>
    <div className={`p-4 rounded-2xl ${color} bg-opacity-10 shadow-inner`}>
      <Icon className={color.replace('bg-', 'text-')} size={24} />
    </div>
  </motion.div>
);

export const ChartCard = ({ title, children }) => (
  <div className="glass-card p-6 h-full flex flex-col">
    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
        <div className="w-1.5 h-6 bg-accent rounded-full"></div>
        {title}
    </h3>
    <div className="flex-1 w-full min-h-[300px]">
      {children}
    </div>
  </div>
);

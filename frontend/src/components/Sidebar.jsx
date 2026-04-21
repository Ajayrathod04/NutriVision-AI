import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, Map, Calculator, Activity, Heart, 
  Brain, Scan, ShoppingBag, Trophy, ListTodo, LogOut, Menu, X, Utensils
} from "lucide-react";
import { useState } from "react";

const SidebarItem = ({ to, icon: Icon, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => 
      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
        isActive ? "bg-accent/10 text-accent border border-accent/20" : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`
    }
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </NavLink>
);

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    {
      title: "OVERVIEW",
      items: [
        { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
        { to: "/achievements", icon: Trophy, label: "Achievements" },
        { to: "/habit-tracker", icon: ListTodo, label: "Habit Tracker" },
        { to: "/report", icon: Activity, label: "Daily Report" },
      ]
    },
    {
      title: "NUTRITION",
      items: [
        { to: "/gallery", icon: Utensils, label: "Food Gallery" },
        { to: "/logger", icon: Calculator, label: "Meal Logger" },
        { to: "/report", icon: Heart, label: "Mood Eating" },
        { to: "/scanner", icon: Scan, label: "Food Scanner" },
        { to: "/grocery", icon: ShoppingBag, label: "Grocery List" },
      ]
    },
    {
      title: "AI FEATURES",
      items: [
        { to: "/craving", icon: Brain, label: "Craving Predictor" },
        { to: "/digital-twin", icon: UserIcon, label: "Digital Twin" },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-dark border border-white/10 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-dark border-r border-white/10 
        transform transition-transform duration-300 lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                <Brain className="text-white" />
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">NutriMind <span className="text-accent">AI</span></h1>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto space-y-8 scrollbar-hide">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-bold text-gray-500 tracking-widest mb-4 px-2">{section.title}</h3>
                <div className="space-y-1">
                  {section.items.map((item, i) => (
                    <SidebarItem key={i} {...item} onClick={() => setIsOpen(false)} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 cursor-pointer transition-colors">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function UserIcon({ size }) {
    return <Activity size={size} />;
}
